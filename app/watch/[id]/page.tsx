import EpisodeButtonList from "@/components/EpisodeButtonList";
import Info from "@/components/Info";
import GenreFilmCardList from "@/components/GenreFilmCardList";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import React from "react";

import { FilmInfo } from "@/lib/filmType";
import {
  findFilmById,
  getMovieInfoList,
  fetchTVShowInfoList,
} from "@/lib/filmUtils";
import Link from "next/link";

interface PageProps {
  params: { id: string };
  searchParams: { ss?: string; ep?: string; playing?: boolean };
}

async function page({ params, searchParams }: PageProps) {
  const { id } = params;
  const { ss, ep, playing } = searchParams;

  const TVShowInfoList: FilmInfo[] = await fetchTVShowInfoList();
  const MovieInfoList: FilmInfo[] = await getMovieInfoList();

  const filmInfo =
    findFilmById(TVShowInfoList, id) || findFilmById(MovieInfoList, id); // fix only use 1 info list later

  if (!filmInfo) {
    console.error(`Film with id ${id} not found.`);
    return <div>Film not found</div>;
  }

  const {
    name,
    tags,
    trailerUrl,
    content,
    cast,
    episodeUrlList,
    videoUrl,
    sessionTotal,
  } = filmInfo;

  const isTVShow = !videoUrl && episodeUrlList;

  let filmURL;
  if ((searchParams = {})) filmURL = trailerUrl;
  if (playing && isTVShow && episodeUrlList)
    filmURL = Object.values(episodeUrlList)[0];
  if (playing && !isTVShow) filmURL = videoUrl;

  let episodeNumbers: string[] = [];
  if (episodeUrlList) episodeNumbers = Object.keys(episodeUrlList);

  return (
    <div className="max-w-screen-sm min-h-screen mx-auto">
      <div className="pb-2 mb-2 border-b-2 border-opacity-5 border-white">
        <Navbar />
        {filmURL && <Video url={filmURL} />}
        <Info {...{ name, tags, content, cast }} />
        <div>
          <div className="flex gap-x-2 px-3 font-bold text-md">
            <h3>Các tập:</h3>
            <Link href="/">
              <div>Mùa 1</div>
            </Link>
          </div>
          {isTVShow && <EpisodeButtonList episodeNumbers={episodeNumbers} />}
        </div>
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
