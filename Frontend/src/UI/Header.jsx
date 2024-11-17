import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around py-6 bg-[#83c5be] rounded-sm">
      <Link to={"/"}>Feeds</Link>
      <Link to={"SignIn"}>SignIn</Link>
      <Link to={"/Tasks"}>Tasks </Link>
      <Link to={"/Transactions"}>Transactions</Link>
      <Link to={"/Profile"}>Profile</Link>
    </div>
  );
};

export default Header;
