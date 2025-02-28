import { FaUserPlus } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";

import { useTutors } from "../../FetchingUsers/useTutors";
import CardCourseButtons from "./CardCourseButtons";
import { useState } from "react";
import ReusableModal from "../UI/ReUseAbleModal";
import { RequestSessionForm } from "./RequestSessionForm";
import { Link } from "react-router-dom";

const UserCard = ({ onTutorData }) => {
  const baseUrl = "http://127.0.0.1:8000/";
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-[#343937] text-[#e9ecef] shadow-lg flex flex-col w-full rounded-md p-4 md:p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <Link to={"/DashboardLayout/UserDetail"}>
          <figure className="flex items-center">
            <img
              alt="user-picture"
              src={`${baseUrl}${onTutorData.photo}`}
              className="rounded-full h-20 w-20 object-cover shadow-md"
            />
            <figcaption className="font-bold text-lg pl-4">
              {onTutorData.name}
            </figcaption>
          </figure>
        </Link>
        <span className="m-1 text-[#e9ecef] hover:text-[#6c757d] cursor-pointer">
          <FaUserPlus size={26} />
        </span>
      </div>
      {/* Title Section */}
      <p className="pl-2 mt-4 text-sm md:text-base font-medium text-[#adb5bd]">
        {onTutorData.title || "Title will go here"}
      </p>
      {/* Courses Section */}
      <div className="flex justify-center py-6 gap-2 flex-wrap">
        {onTutorData.courses && (
          <CardCourseButtons course={onTutorData.courses} />
        )}
      </div>
      {/* Summary Section */}
      <div className="flex justify-center px-2 md:px-8 text-center">
        <p className="text-sm md:text-base text-[#ced4da]">
          {onTutorData.summary}
        </p>
      </div>
      {/* Footer Section */}
      <div className="flex justify-between items-center mt-6">
        <IoStarHalf size={22} className="text-[#f9c74f]" />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#415a77] hover:bg-[#6c757d] text-white rounded-md px-6 py-2 text-sm md:text-base"
        >
          Request
        </button>
        <ReusableModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <RequestSessionForm />
        </ReusableModal>
        <p className="text-sm md:text-base text-[#adb5bd]">
          <span className="font-bold text-white">6</span> sessions
        </p>
      </div>
    </section>
  );
};

export default UserCard;
