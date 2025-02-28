import React, { useEffect, useRef, useState, useContext } from "react";
import DailyIframe from "@daily-co/daily-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { VideoCallContext } from "./VideoCallContext";

const VideoCall = ({ roomUrl }) => {
  const callWrapperRef = useRef(null);
  const [callFrame, setCallFrame] = useState(null);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const { setInCall } = useContext(VideoCallContext);

  useEffect(() => {
    // Initialize Daily.co call frame only if it doesn't already exist
    if (!callFrame) {
      const newCallFrame = DailyIframe.createFrame(callWrapperRef.current, {
        url: roomUrl,
        showLeaveButton: true,
        iframeStyle: {
          width: "100%",
          height: "500px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        },
      });

      // Join the call
      newCallFrame.join();
      setCallFrame(newCallFrame);
    }

    // Cleanup on unmount
    return () => {
      if (callFrame) {
        callFrame.leave();
        setCallFrame(null); // Reset the callFrame state
      }
    };
  }, [roomUrl, callFrame]); // Add callFrame as a dependency

  const toggleScreenShare = () => {
    if (callFrame) {
      if (isScreenSharing) {
        callFrame.stopScreenShare();
      } else {
        callFrame.startScreenShare();
      }
      setIsScreenSharing(!isScreenSharing);
    }
  };

  const handleEndCall = () => {
    if (callFrame) {
      callFrame.leave();
      setCallFrame(null); // Reset the callFrame state
    }
    setInCall(false); // Update the inCall state to false
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        {/* Daily.co Call Frame */}
        <div ref={callWrapperRef} className="daily-call-frame" />
      </CardContent>

      {/* Controls */}
      <CardFooter className="flex justify-center gap-4 p-6 border-t">
        <Button onClick={toggleScreenShare}>
          {isScreenSharing ? "Stop Screen Share" : "Start Screen Share"}
        </Button>
        <Button variant="destructive" onClick={handleEndCall}>
          End Call
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VideoCall;
