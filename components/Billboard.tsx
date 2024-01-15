import { FilmInfo } from "@/lib/filmType";
import { findFilmById, getRandomItemFromArray } from "@/lib/filmUtils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BillboardProps {
  films: FilmInfo[];
  mostWatchData: string[];
}

function Billboard({ films, mostWatchData }: BillboardProps) {
  const randomFilmId = getRandomItemFromArray(mostWatchData);
  const randomFilmInfo = findFilmById(films, randomFilmId);

  if (!randomFilmInfo) return <p>Billboard not found</p>;

  const randomFilmPoster = randomFilmInfo.poster1Url;

  return (
    <Link href={`/watch/${randomFilmId}`}>
      <div className="relative w-full aspect-[112.67/160.97] border-[1px] border-white/30 rounded-xl overflow-hidden shadow-2xl shadow-black active:scale-[.98] transition-all">
        <Image src={randomFilmPoster} fill={true} alt="Billboard Poster" />
      </div>
    </Link>
  );
}

export default Billboard;
