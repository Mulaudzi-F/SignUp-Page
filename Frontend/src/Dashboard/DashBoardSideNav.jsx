import { FaRegCalendarAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BsChatSquareDots } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function DashBoardSideNav() {
  return (
    <nav className="text-[white] fixed hidden  list-none h-full md:flex flex-col items-center shadow-md bg-[#222725] rounded-sm  w-40 ">
      <ul className="flex flex-col  justify-center h-5/6 items-center gap-8 ">
        <li className="hover:text-[#1a759f]  cursor-pointer">
          <IoHomeOutline size={25} />
        </li>
        <li className="hover:text-[#1a759f] cursor-pointer">
          <IoMdNotifications size={25} />
        </li>
        <li className="hover:text-[#1a759f] cursor-pointer">
          <BsChatSquareDots size={25} />
        </li>
        <li className="hover:text-[#1a759f] cursor-pointer">
          <FaRegCalendarAlt size={25} />
        </li>

        <li className="hover:text-[#1a759f] cursor-pointer">Tutors</li>
        <li className="hover:text-[#1a759f] cursor-pointer">Subscription</li>
        <li className="hover:text-[#1a759f] cursor-pointer">Transactions</li>
      </ul>

      <button className="hover:text-[#1a759f]">
        <Link to={"/"}>Logout</Link>
      </button>
    </nav>
  );
}
