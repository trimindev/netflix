import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ id, poster }: { id: string; poster: string }) {
  return (
    <Link href={`/watch/${id}`}>
      <div className="relative aspect-[112.67/160.97] rounded-lg overflow-hidden active:scale-[.98] transition-all">
        <Image src={poster} fill={true} alt="Picture of the author" />
      </div>
    </Link>
  );
}

export default Card;
