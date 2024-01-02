import Episodes from "@/components/Episodes";
import Info from "@/components/Info";
import GenreFilmCardList from "@/components/GenreFilmCardList";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import React from "react";

import { FilmInfo } from "@/lib/filmType";
import {
  extractEpisodeNumbers,
  findFilmById,
  getMovieInfoList,
  getTVShowInfoList,
} from "@/lib/filmUtils";

interface PageProps {
  params: { id: string };
  searchParams: { session?: string; episode: string } | { video: string };
}

async function page({ params, searchParams }: PageProps) {
  const { id } = params;

  const TVShowInfoList: FilmInfo[] = await getTVShowInfoList();
  const MovieInfoList: FilmInfo[] = await getMovieInfoList();

  const filmInfo =
    findFilmById(TVShowInfoList, id) || findFilmById(MovieInfoList, id);

  if (!filmInfo) {
    console.error(`Film with id ${id} not found.`);
    return <div>Film not found</div>;
  }

  const {
    name,
    tags,
    trailerUrl,
    genre,
    content,
    cast,
    episodeUrls,
    videoUrl,
  } = filmInfo;

  return (
    <div className="max-w-screen-sm min-h-screen mx-auto">
      <div className="pb-2 mb-2 border-b-2 border-opacity-5 border-white">
        <Navbar />
        <Video url={trailerUrl} />
        <Info {...{ name, tags, content, cast }} />
        {/* {!videoUrl && <Episodes episodeList={episodeList} />} */}
      </div>
      <GenreFilmCardList
        title={"Phim truyền hình chính kịch Hàn Quốc"}
        films={TVShowInfoList}
        targetTag="han-quoc"
      />
    </div>
  );
}

export default page;
