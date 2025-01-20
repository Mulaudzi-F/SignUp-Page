import { FaRegCalendarAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BsChatSquareDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import DashBoardNav from "../UI/DashBoardNav";

export default function DashBoardSideNav() {
  return (
    <div className="hidden sm:block">
      <DashBoardNav />
    </div>
  );
}
