import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl font-extrabold">Welcome to CatchUp</h1>
        <p className="flex justify-center gap-4 items-center">
          Here is Where you're gonna get all the updates
        </p>
      </div>
    </>
  );
};

export default HomePage;
