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
import SessionSelect from "@/components/SessionSelect";

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

  const { name, tags, trailerUrl, content, cast, movieUrl, sessionList } =
    filmInfo;

  let filmURL, currentSession, currentEpisode, sessionTotal, episodeList;

  const isTVShow = !movieUrl && sessionList;
  if (isTVShow) {
    currentSession = Number(ss) || 1;
    currentEpisode = Number(ep) || 1;
    episodeList = Object.keys(sessionList).map(Number);
    sessionTotal = Object.keys(sessionList).length;
    if (sessionTotal == 1) sessionTotal = undefined;

    const episodeUrlList = Object.values(sessionList)[currentSession - 1];
    filmURL = Object.values(episodeUrlList)[currentEpisode - 1];
  } else filmURL = movieUrl;

  const isPlay = ep || ss || playing;
  const videoUrl = isPlay ? filmURL : trailerUrl;

  return (
    <div className="max-w-screen-sm min-h-screen mx-auto">
      <div className="pb-2 mb-2 border-b-2 border-opacity-5 border-white">
        <Navbar />
        {videoUrl && <Video url={videoUrl} />}
        <Info {...{ name, tags, content, cast }} />
        {isTVShow && (
          <>
            <div className="flex items-center gap-x-2 px-3 mb-2 font-bold text-md">
              <h3>Các tập:</h3>
              {sessionTotal && currentSession && (
                <SessionSelect {...{ sessionTotal, currentSession }} />
              )}
            </div>
            {episodeList && currentEpisode && currentSession && (
              <EpisodeButtonList {...{ episodeList }} />
            )}
          </>
        )}
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
