import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ image }: { image: string }) {
  return (
    <Link href="/">
      <div className="relative aspect-[112.67/160.97] rounded-lg overflow-hidden active:scale-95 transition-all">
        <Image src={image} fill={true} alt="Picture of the author" />
      </div>
    </Link>
  );
}

export default Card;
