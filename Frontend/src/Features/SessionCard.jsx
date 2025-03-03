import React, { useContext } from "react";
import { VideoCallContext } from "./VideoCallContext";
import VideoBtn from "../Daily Video/Video App";
const SessionCard = () => {
  const { setInCall } = useContext(VideoCallContext);

  const handleStartSession = () => {
    setInCall(true); // Trigger the video call
  };

  return (
    <li className="flex flex-col sm:flex-row w-3/4 mt-4 items-center pt-10 bg-[#222725] shadow-lg rounded-lg p-4 gap-4 sm:gap-6">
      {/* Profile Picture */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
        <img
          src="https://via.placeholder.com/80" // Replace with the actual profile picture URL
          alt={`Tondani's profile`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Name */}
        <h2 className="text-lg font-semibold text-[#fff]">Maths</h2>

        {/* Summary */}
        <p className="text-sm text-[#fff]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Time Information */}
        <div className="flex gap-4 text-sm text-[#fff]">
          <p>
            <span className="font-semibold text-gray-400">Date:</span> 12 Feb
            2025
          </p>
          <p>
            <span className="font-semibold text-gray-400">Time:</span> 00:00:00
          </p>
        </div>

        {/* Status */}
        <p className="text-sm text-green-600 font-medium">Status: Active</p>
      </div>

      {/* Start Session Button */}
      <div className="flex-shrink-0">
        <VideoBtn />

        {/* <button
          onClick={handleStartSession}
          className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Start Session
        </button> */}
      </div>
    </li>
  );
};

export default SessionCard;
