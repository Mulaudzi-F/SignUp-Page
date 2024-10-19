const User = require("../Models/userModel");

const { isMongoId } = require("validator");
const CatchAsync = require("../utils/CatchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

/**
 *
 * 
 
 */
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure;

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
};

//********************This is the mdoule for  creating new App User******************************
exports.signUp = CatchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
    role: req.body.role,
    active: req.body.active,
  });

  createSendToken(newUser, 201, res);
});

//*****************//

exports.login = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //*****************Checking iF Email And Password exist */
  if (!email || !password) {
    return AppError("please provide email or password", 400);
  }

  //***************Checking if User Exist & password  is correct */
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  //-----------------------If everything is okay------------

  createSendToken(user, 200, res);
});

exports.forgotPassword = CatchAsync(async (req, res, next) => {
  // Getting user bassed on the posted email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError("User Does nit exist", 404));
  }

  //(2) Generate the random reset token

  const resetToken = user.createPasswordResetToken();
  await user.save({
    validateBeforeSave: false,
  });

  //(3) Send Token Via Email

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/127.0.0.1:8000/app/v1/users/forgotpassword/${resetToken}`;

  const message = `Forgot your password Submit a PATCH request with your new password and 
  password confirm to ${resetURL}.\n If you didn't forget password please Ignore`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your Password reset Token is only valid for 10 minutes",
      message,
    });
    res.status(200).json({
      status: "success",
      message: "Token sent to Email",
    });
  } catch (err) {
    (user.createPasswordResetToken = undefined),
      (user.passwordResertExpires = undefined);

    return next(
      new AppError("The was an Error sending the Email, try again later"),
      500
    );
  }
});
