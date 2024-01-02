"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function EpisodeButton({
  number,
  currentEpisode,
}: {
  number: number;
  currentEpisode?: string | null;
}) {
  const pathname = usePathname();
  const isActive = currentEpisode === String(number);

  return (
    <Link
      href={{
        pathname: pathname,
        query: { episode: number },
      }}
    >
      <div
        className={`w-8 h-8 font-bold rounded-lg flex items-center justify-center transition-all ${
          isActive ? "bg-[#2ecc71]" : "bg-[#191919]"
        }`}
      >
        {number}
      </div>
    </Link>
  );
}

export default EpisodeButton;
