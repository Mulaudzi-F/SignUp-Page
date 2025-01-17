import { FaRegCalendarAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BsChatSquareDots } from "react-icons/bs";

export default function DashBoardSideNav() {
  return (
    <nav className="text-[white] h-5/6 flex flex-col items-center  bg-[#222725] rounded-sm  w-40 ">
      <ul className="flex flex-col  justify-center h-5/6 items-center gap-8 ">
        <li>
          <FaRegCalendarAlt />
        </li>
        <li>
          <BsChatSquareDots />
        </li>
        <li>
          <IoMdNotifications />
        </li>
        <li>
          <IoHomeOutline />
        </li>
        <li>Tutors</li>
        <li>Subscription</li>
        <li>Transactions</li>
      </ul>
      <button className="">Logout</button>
    </nav>
  );
}
