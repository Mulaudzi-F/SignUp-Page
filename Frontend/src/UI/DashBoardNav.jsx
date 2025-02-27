import { FaRegCalendarAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BsChatSquareDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const DashBoardNav = () => {
  return (
    <nav className="text-[white] sticky bottom  sm:fixed  list-none  sm:h-full flex flex-col items-center shadow-md bg-[#222725] rounded-sm w-full  sm:w-40 ">
      <ul className="flex  py-3 sm:pt-14 sm:flex-col  justify-center sm:h-5/6 items-center gap-8 ">
        <Link to={"."} className="hover:text-[#1a759f]  cursor-pointer">
          <IoHomeOutline size={25} />
        </Link>
        <li className="hover:text-[#1a759f] cursor-pointer">
          <IoMdNotifications size={25} />
        </li>
        <li className="hover:text-[#1a759f] cursor-pointer">
          <BsChatSquareDots size={25} />
        </li>
        <Link
          to="/DashboardLayout/sessions"
          className="hover:text-[#1a759f] cursor-pointer"
        >
          <FaRegCalendarAlt size={25} />
        </Link>

        <Link
          to="/userTutorCard"
          className="hidden sm:block hover:text-[#1a759f] cursor-pointer"
        >
          Tutors
        </Link>
        <li className=" hidden sm:block hover:text-[#1a759f] cursor-pointer">
          Subscription
        </li>
        <li className="hidden sm:block hover:text-[#1a759f] cursor-pointer">
          Transactions
        </li>
      </ul>

      <button
        className=" hidden sm:block
    hover:text-[#1a759f]"
      >
        <Link to={"/"}>Logout</Link>
      </button>
    </nav>
  );
};

export default DashBoardNav;
