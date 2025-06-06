import EpisodeButtonList from "@/components/EpisodeButtonList";
import Info from "@/components/Info";
import GenreFilmCardList from "@/components/GenreFilmCardList";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import React from "react";

import { FilmInfo } from "@/lib/filmType";
import {
  findFilmById,
  fetchMovieInfoList,
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
  const MovieInfoList: FilmInfo[] = await fetchMovieInfoList();

  const filmInfo =
    findFilmById(TVShowInfoList, id) || findFilmById(MovieInfoList, id);

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
    sessionTotal = Object.keys(sessionList).length;
    if (sessionTotal == 1) sessionTotal = undefined;

    const episodeUrlList = sessionList[currentSession];

    episodeList = Object.keys(episodeUrlList).map(Number);
    filmURL = episodeUrlList[currentEpisode];
  } else filmURL = movieUrl;

  const isPlay = ep || ss || playing;
  const videoUrl = isPlay ? filmURL : trailerUrl;

  return (
    <div className="max-w-screen-sm min-h-screen mx-auto">
      <div className="pb-2 mb-2 border-b-2 border-white/5">
        <Navbar isShowLogo={false} isShowFilter={false} />
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
        title={"More Like This"}
        films={TVShowInfoList}
        targetTag="han-quoc"
      />
      <GenreFilmCardList
        title={"Today Tops Pick For You"}
        films={TVShowInfoList}
        targetTag="chinese"
      />
    </div>
  );
}

export default page;
