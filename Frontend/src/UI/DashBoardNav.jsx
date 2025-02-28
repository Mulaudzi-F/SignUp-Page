import { FaRegCalendarAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BsChatSquareDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import { FiAlignJustify } from "react-icons/fi";

const baseUrl = "http://127.0.0.1:8000/";

const DashBoardNav = () => {
  const { user } = useUser();
  return (
    <nav className="text-[white] sticky bottom  sm:fixed  list-none  sm:h-full flex flex-col items-center shadow-md bg-[#222725] rounded-sm w-full  sm:w-40 ">
      <ul className="flex  py-3 sm:pt-14 sm:flex-col  justify-center sm:h-5/6 items-center gap-8 ">
        <Link to={"."} className="hover:text-[#1a759f]  cursor-pointer">
          <IoHomeOutline size={25} />
        </Link>
        <Link
          to={"/DashboardLayout/Notifications"}
          className="hover:text-[#1a759f] cursor-pointer"
        >
          <IoMdNotifications size={25} />
        </Link>
        <Link
          to={"/DashboardLayout/Chats"}
          className="hover:text-[#1a759f] cursor-pointer"
        >
          <BsChatSquareDots size={25} />
        </Link>
        <Link
          to="/DashboardLayout/sessions"
          className="hover:text-[#1a759f] cursor-pointer"
        >
          <FaRegCalendarAlt size={25} />
        </Link>

        <Link
          to="/DashboardLayout/userTutorCard"
          className="hidden sm:block hover:text-[#1a759f] cursor-pointer"
        >
          Tutors
        </Link>
        <Link
          to={"/DashboardLayout/Subscriptions"}
          className=" hidden sm:block hover:text-[#1a759f] cursor-pointer"
        >
          Subscription
        </Link>
        <li className="hidden sm:block hover:text-[#1a759f] cursor-pointer">
          Transactions
        </li>
      </ul>

      <button
        className="mb-10 hidden sm:block
    hover:text-[#1a759f]"
      >
        <Link to={"/"}>Logout</Link>
      </button>
      <Link to={"/DashboardLayout/MePage"}>
        <figure className="flex items-center gap-4">
          <span className="flex justify-center items-center h-14 w-14 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              alt="userPicture"
              src={`${baseUrl}${user.photo}`}
            />
          </span>
        </figure>
      </Link>
    </nav>
  );
};

export default DashBoardNav;
