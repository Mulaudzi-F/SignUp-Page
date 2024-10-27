const moongoose = require("mongoose");
const dotenv = require("dotenv");

//==============Unhandled Exception=============

dotenv.config({
  path: "./utils/config.env",
});
const app = require("./app");
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

moongoose.connect(DB, { tls: true }).then((con) =>
  //console.log(con.Connections)
  console.log(`DB connected to succesfully `)
);
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {});
console.log(`app is running on port ${port}`);

//------------------------ERROR OUTSIDE EXPRESS_ UNHANDLED REJECTION----------------------

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection!!, Shutting...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
