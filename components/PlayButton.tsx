import { PlayIcon } from "@heroicons/react/16/solid";
import React from "react";

function PlayButton() {
  return (
    <button className="w-full h-9 flex justify-center items-center gap-1 bg-white text-black font-bold rounded-sm active:bg-opacity-90 transition-all">
      <PlayIcon className="w-4 h-4" />
      <span>Phát</span>
    </button>
  );
}

export default PlayButton;
