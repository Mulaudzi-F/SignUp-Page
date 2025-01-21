import { useUser } from "../authentication/useUser";
import { FiAlignJustify } from "react-icons/fi";
const baseUrl = "http://127.0.0.1:8000/";
export default function DashBoardHeader() {
  const { user } = useUser();

  return (
    <header className="flex py-4 max-h-[10%] sm:p-0  fixed top-0 left-0 right-0 z-50   shadow-md sm:fixed  bg-[#222725] rounded-sm  text-[white] items-center justify-around w-full">
      <figure className="justify-self-start flex flex-col justify-center items-center h-1/2 pl-6 md:pl-0 w-1/4 lg:w-[8%] md:w-[12%] rounded-full">
        <span className="w-1/2 flex justify-center items-center h-full rounded-full ">
          {" "}
          <img
            className="rounded-full h-14 w-14 max-h-24"
            alt="userPicture"
            src={`${baseUrl}${user.photo}`}
          />
        </span>
        <figcaption className="cursor-pointer hidden  md:block hover:text-[#1a759f] pl-2">
          me
        </figcaption>
      </figure>
      <div className="justify-self-center flex  items-center h-full w-1/2">
        <input
          type="text"
          className="sm:w-11/12 mr-3 w-full shadow-2xl rounded-lg  shadow-[black] py-2 sm:h-1/2"
          placeholder="Search"
        />
      </div>
      <div className="justify-self-end cursor-pointer hover:bg-[#1a759f] sm:pr-10 shadow-inner w-1/4 sm:h-1/2 flex justify-center rounded-lg shadow-[#f8f9fa] ">
        <button className="w-full py-2 ">
          <span>R</span> <span className="w-full ">{user.balance}</span>
        </button>
      </div>
    </header>
  );
}
