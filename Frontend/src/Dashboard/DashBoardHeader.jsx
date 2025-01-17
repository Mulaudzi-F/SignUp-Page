export default function DashBoardHeader() {
  return (
    <header className="grid grid-cols-3 bg-[#222725] rounded-sm  text-[white] items-center justify-around h-1/6 w-full">
      <figure className="justify-self-start flex flex-col h-full pl-10  rounded-full">
        <span className="bg-white w-1/2 flex justify-center items-center h-full rounded-full ">
          {" "}
          <img alt="userPicture" src="" />
        </span>
        <figcaption>User Name</figcaption>
      </figure>
      <div className="justify-self-center flex items-center h-full w-1/2">
        <input type="text" className="w-11/12 h-1/2" placeholder="Search" />
      </div>
      <div className="justify-self-end pr-10 ">
        <button>
          <span>R</span> <span>0.00</span>
        </button>
      </div>
    </header>
  );
}
