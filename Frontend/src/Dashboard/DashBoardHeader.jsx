import { useUser } from "../authentication/useUser";

export default function DashBoardHeader() {
  const { user } = useUser();
  console.log(user);
  return (
    <header className="grid grid-cols-3 shadow-md fixed z-10 bg-[#222725] rounded-sm  text-[white] items-center justify-around w-full">
      <figure className="justify-self-start flex flex-col h-full pl-6  rounded-full">
        <span className="bg-white w-1/2 flex justify-center items-center h-full rounded-full ">
          {" "}
          <img alt="userPicture" src="" />
        </span>
        <figcaption className="cursor-pointer hover:text-[#1a759f] pl-2">
          me
        </figcaption>
      </figure>
      <div className="justify-self-center flex  items-center h-full w-1/2">
        <input
          type="text"
          className="w-11/12 shadow-2xl rounded-lg  shadow-[black] h-1/2"
          placeholder="Search"
        />
      </div>
      <div className="justify-self-end cursor-pointer hover:bg-[#1a759f] pr-10 shadow-inner w-1/4 h-1/2 flex justify-center rounded-lg shadow-[#f8f9fa] ">
        <button>
          <span>R</span> <span>{user.balance}</span>
        </button>
      </div>
    </header>
  );
}
