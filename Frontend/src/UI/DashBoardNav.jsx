import { FaRegCalendarAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BsChatSquareDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import { FiAlignJustify } from "react-icons/fi";

const DashBoardNav = () => {
  const { user } = useUser();
  return (
    <nav className="text-white sticky px-20 bottom sm:fixed list-none sm:h-full flex flex-col items-center shadow-md bg-gradient-to-br from-[#2c3e50] to-[#4ca1af] rounded-sm w-full sm:w-20 p-2">
      <ul className="flex py-3 sm:pt-14 sm:flex-col justify-center sm:h-5/6 items-center gap-8">
        {/* Icon + Label */}
        <div className="group relative flex flex-col items-center">
          <Link
            to="."
            className="hover:text-[#343937] cursor-pointer flex flex-col items-center"
          >
            <IoHomeOutline size={25} />
          </Link>
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded">
            Home
          </span>
        </div>

        <div className="group relative flex flex-col items-center">
          <Link
            to="/DashboardLayout/Notifications"
            className="hover:text-[#343937] cursor-pointer flex flex-col items-center"
          >
            <IoMdNotifications size={25} />
          </Link>
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-sm px-12 py-1 rounded">
            Notification
          </span>
        </div>

        <div className="group relative flex flex-col items-center">
          <Link
            to="/DashboardLayout/Chats"
            className="hover:text-[#343937] cursor-pointer flex flex-col items-center"
          >
            <BsChatSquareDots size={25} />
          </Link>
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded">
            Chats
          </span>
        </div>

        <div className="group relative flex flex-col items-center">
          <Link
            to="/DashboardLayout/sessions"
            className="hover:text-[#343937] cursor-pointer flex flex-col items-center"
          >
            <FaRegCalendarAlt size={25} />
          </Link>
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded">
            Upcoming Session
          </span>
        </div>

        {/* Text-only items (Ensured alignment and hover effect) */}
        <div className="group relative flex flex-col items-center hidden sm:block">
          <Link
            to="/DashboardLayout/userTutorCard"
            className="hover:text-[#343937] cursor-pointer flex items-center text-lg"
          >
            Tutors
          </Link>
        </div>

        <div className="group relative flex flex-col items-center  sm:block">
          <Link
            to="/DashboardLayout/Subscriptions"
            className="hover:text-[#343937] cursor-pointer flex items-center text-lg"
          >
            Subscription
          </Link>
        </div>

        <div className="group relative flex flex-col items-center px-20  sm:block">
          <span className="hover:text-[#343937] cursor-pointer flex items-center text-lg">
            Transactions
          </span>
        </div>
      </ul>

      <button className="mb-10 hidden sm:block hover:text-[#343937]">
        <Link to="/">Logout</Link>
      </button>

      <Link to="/DashboardLayout/MePage">
        <figure className="flex items-center gap-4">
          <span className="flex justify-center items-center h-14 w-14 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              alt="userPicture"
              src={``}
            />
          </span>
        </figure>
      </Link>
    </nav>
  );
};

export default DashBoardNav;
