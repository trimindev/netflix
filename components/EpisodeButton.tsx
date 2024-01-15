"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface PageProps {
  episodeNumber: number;
}

function EpisodeButton({ episodeNumber }: PageProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentEpisode = searchParams.get("ep");
  const currentSession = searchParams.get("ss");
  const isActive = Number(currentEpisode) == episodeNumber;

  return (
    <Link
      href={{
        pathname: pathname,
        query: {
          ...(currentSession && { ss: currentSession }),
          ep: episodeNumber,
        },
      }}
    >
      <div
        className={`w-8 h-8 font-bold rounded-lg flex items-center justify-center transition-all ${
          isActive ? "bg-white/10" : "bg-[#191919]"
        }`}
      >
        {episodeNumber}
      </div>
    </Link>
  );
}

export default EpisodeButton;
