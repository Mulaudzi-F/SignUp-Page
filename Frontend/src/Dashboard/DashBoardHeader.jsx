import { Link } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import { FiAlignJustify } from "react-icons/fi";

const baseUrl = "http://127.0.0.1:8000/";
export default function DashBoardHeader() {
  const { user } = useUser();

  return (
    <header className="flex items-center justify-between py-4 fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#2c3e50] to-[#4ca1af]  text-white shadow-md rounded-sm px-4 sm:px-8">
      {/* Logo Section */}
      <Link to={"."}>
        <figure className="flex items-center gap-4">
          <span className="flex justify-center items-center h-14 w-14 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              alt="Catch up Logo"
              src="./Catch up logo.webp"
            />
          </span>
        </figure>
      </Link>
      {/* Search Bar */}
      <div className="flex-grow mx-4 sm:mx-6">
        <input
          type="text"
          className="w-full md:w-1/3 py-2 px-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#1a759f] bg-[#343937] text-white"
          placeholder="Search"
        />
      </div>

      {/* Balance Button */}
      <div className="flex items-center">
        <button className="flex items-center justify-center px-4 py-2 bg-[#415a77] hover:bg-[#1a759f] text-white rounded-lg shadow-lg">
          <span className="mr-2">R</span>
          <span>{user.balance}</span>
        </button>
      </div>
    </header>
  );
}
