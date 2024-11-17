import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <section className="flex flex-col gap-10">
        <p>Congradulation, You've Successfully Logged In to CatchUp App</p>
        <button className="w-1/2 hover:bg-[#006d77] font-bold   text-[#ffffff]  p-2 rounded bg-[#6c757d]">
          <Link to={"/UpdatePassword"}>Update Password</Link>
        </button>
      </section>
    </>
  );
};

export default WelcomePage;
