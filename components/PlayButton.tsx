"use client";

import { PlayIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function PlayButton() {
  const pathname = usePathname();
  return (
    <Link
      href={{
        pathname: pathname,
        query: { playing: true },
      }}
    >
      <div className="w-full h-10 flex justify-center items-center gap-1 bg-white text-black font-bold rounded-sm active:bg-opacity-90 transition-all">
        <PlayIcon className="w-5 h-5" />
        <span>Phát</span>
      </div>
    </Link>
  );
}

export default PlayButton;
