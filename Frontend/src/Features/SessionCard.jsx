const SessionCard = () => {
  return (
    <li className="flex flex-col sm:flex-row items-center pt-10 bg-[#f8f9fa] shadow-lg rounded-lg p-4 gap-4 sm:gap-6">
      {/* Profile Picture */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
        <img
          src=""
          alt={`tondani's profile`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Name */}
        <h2 className="text-lg font-semibold text-[#222725]">Maths</h2>

        {/* Summary */}
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Time Information */}
        <div className="flex gap-4 text-sm text-gray-500">
          <p>
            <span className="font-semibold text-gray-700">Date:</span> 12 Feb
            2025
          </p>
          <p>
            <span className="font-semibold text-gray-700">Time:</span> 00:00:00
          </p>
        </div>

        {/* Status */}
        <p>
          //
          {
            //className={`text-sm font-medium ${
            //     status === "Active"
            //       ? "text-green-600"
            //       : status === "Pending"
            //       ? "text-yellow-600"
            //       : "text-red-600"
            //   }`}
            // >
            //   Status: {status}
          }
        </p>
      </div>

      {/* Start Session Button */}
      <div className="flex-shrink-0">
        <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Session
        </button>
      </div>
    </li>
  );
};

export default SessionCard;
