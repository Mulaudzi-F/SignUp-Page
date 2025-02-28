import SessionCard from "../Features/SessionCard";
import React, { useContext } from "react";
import { VideoCallContext } from "../Features/VideoCallContext";
import VideoCall from "../Features/VideoCall";

const SessionsCollected = () => {
  const { inCall } = useContext(VideoCallContext);

  const roomUrl = "https://catchup.daily.co/CatchUp";
  return (
    <>
      {inCall ? (
        <VideoCall roomUrl={roomUrl} />
      ) : (
        <section className="pt-10 text-[#fff]">
          <ul className="pt-14 flex flex-col items-center gap-4 justify-center">
            <SessionCard />
          </ul>
        </section>
      )}
    </>
  );
};

export default SessionsCollected;
