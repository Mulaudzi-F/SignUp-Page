import SessionCard from "../Features/SessionCard";

const SessionsCollected = () => {
  return (
    <>
      <section className="pt-10 text-[#fff]">
        <ul className="pt-14 flex flex-col items-center gap-4 justify-center">
          <SessionCard />
        </ul>
      </section>
    </>
  );
};

export default SessionsCollected;
