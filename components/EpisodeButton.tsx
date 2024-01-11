"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

function EpisodeButton({
  episodeNumber,
  sessionNumber,
}: {
  episodeNumber: string;
  sessionNumber?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentEpisode = searchParams.get("episode");
  const isActive = currentEpisode === episodeNumber;

  return (
    <Link
      href={{
        pathname: pathname,
        query: {
          ep: episodeNumber,
          ...(sessionNumber && { ss: sessionNumber }),
        },
      }}
    >
      <div
        className={`w-8 h-8 font-bold rounded-lg flex items-center justify-center transition-all ${
          isActive ? "bg-[#2ecc71]" : "bg-[#191919]"
        }`}
      >
        {episodeNumber}
      </div>
    </Link>
  );
}

export default EpisodeButton;
