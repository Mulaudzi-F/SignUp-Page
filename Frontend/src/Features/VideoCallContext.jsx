import React, { createContext, useState } from "react";

export const VideoCallContext = createContext();

export const VideoCallProvider = ({ children }) => {
  const [inCall, setInCall] = useState(false);

  return (
    <VideoCallContext.Provider value={{ inCall, setInCall }}>
      {children}
    </VideoCallContext.Provider>
  );
};
