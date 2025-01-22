import { FaUserPlus } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";

import { useTutors } from "../../FetchingUsers/useTutors";

const UserCard = ({ onTutorData }) => {
  const baseUrl = "http://127.0.0.1:8000/";
  console.log(onTutorData);
  return (
    <section className="bg-red shadow-lg  flex flex-col flex-1  w-full rounded-md ">
      <div>
        <div className="flex justify-between pt-2">
          <figure>
            <img
              alt="user-picture"
              src={`${baseUrl}${onTutorData.photo}`}
              className="rounded-r-full max-h-[100px]"
            />
            <figcaption className="font-bold pl-2">
              {onTutorData.name}
            </figcaption>
          </figure>
          <span className="m-1">
            <FaUserPlus size={26} />
          </span>
        </div>
        <p className="pl-2">title will go here</p>
      </div>
      <div className="flex justify-center gap-2">
        {" "}
        <span>course 1</span> <span> course 2</span> <span> course 3</span>
      </div>
      <div className="flex justify-center">
        <p className="text-center">{onTutorData.summary}</p>
      </div>
      <div className="flex justify-between p-8 items-center">
        <IoStarHalf size={22} />
        <button className="bg-[#415a77] hover:bg-[#6c757d] text-stone-50 rounded-md p-3">
          Request
        </button>
        <p>
          <span>6</span>sesions
        </p>
      </div>
    </section>
  );
};

export default UserCard;
