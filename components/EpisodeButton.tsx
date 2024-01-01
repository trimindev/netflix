"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function EpisodeButton({ number }: { number: number }) {
  const pathname = usePathname();

  return (
    <Link
      href={{
        pathname: pathname,
        query: { episode: number },
      }}
    >
      <div className="w-8 h-8 font-bold rounded-lg bg-[#191919] flex items-center justify-center">
        {number}
      </div>
    </Link>
  );
}

export default EpisodeButton;
