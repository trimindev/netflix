import Link from "next/link";
import React from "react";

function EpisodeButton({ number }: { number: number }) {
  return (
    <Link href="/">
      <div className="w-8 h-8 rounded-lg bg-[#191919] flex items-center justify-center">
        {number}
      </div>
    </Link>
  );
}

export default EpisodeButton;
