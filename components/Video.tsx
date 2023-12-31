"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function Video() {
  const [muted, setMuted] = useState(true);

  return (
    <div>
      <div className="overflow-hidden max-w-full aspect-video relative">
        <ReactPlayer
          className="!h-full !w-[300%] ml-[-100%] relative pointer-events-none"
          url="https://www.youtube.com/embed/sAH-r7Z6gOQ&rel=0"
          loop={true}
          playing={true}
          muted={muted}
        />
        <button
          onClick={() => setMuted(!muted)}
          className="absolute border-[1px] h-8 w-8 bottom-6 right-4 rounded-full flex items-center justify-center z-10"
        >
          {muted ? (
            <SpeakerXMarkIcon className="w-4 h-4" />
          ) : (
            <SpeakerWaveIcon className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Video;
