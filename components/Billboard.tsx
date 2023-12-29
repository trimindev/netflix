import Image from "next/image";
import Link from "next/link";
import React from "react";

function Billboard({ image }: { image: string }) {
  return (
    <Link href="/watch/1">
      <div className="w-full aspect-[112.67/160.97] relative border-[1px] border-opacity-30 border-white rounded-xl overflow-hidden shadow-2xl shadow-black active:scale-95 transition-all">
        <Image src={image} fill={true} alt="Picture of the author" />
      </div>
    </Link>
  );
}

export default Billboard;
