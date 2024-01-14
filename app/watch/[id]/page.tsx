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
    episodeList = Object.keys(sessionList);
    sessionTotal = Object.keys(sessionList).length;

    const episodeUrlList = Object.values(sessionList)[currentSession - 1];
    filmURL = Object.values(episodeUrlList)[currentEpisode - 1];
  } else filmURL = movieUrl;

  const isPlay = ep || playing;
  const videoUrl = isPlay ? filmURL : trailerUrl;

  return (
    <div className="max-w-screen-sm min-h-screen mx-auto">
      <div className="pb-2 mb-2 border-b-2 border-opacity-5 border-white">
        <Navbar />
        {videoUrl && (
          <Video
            url={
              "https://rr2---sn-npoe7nz7.c.drive.google.com/videoplayback?expire=1705209190&ei=NkOjZdr_CL7bwN4PseiV6A8&ip=2402:800:6310:b157:6d1d:49b9:477f:b1ee&id=2b3afb29b9b00ff2&itag=18&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=xl&mm=32&mn=sn-npoe7nz7&ms=su&mv=m&mvi=2&pl=55&ttl=transient&susc=dr&driveid=10-poAmSU7ev7b38TrfJk8LrtZ7-DPy8f&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=1304.357&lmt=1682954588032908&mt=1705197879&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhANM0yxOqyzClVXE8bvVYFjwO1LndI5BUZ0lPna0zl9QYAiBJ_CBaza-C0XblPC_s3_dW7RqEaSyIWgjeacBbi-TRfQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIhALuYs0vEeQETqA0cpZblcKwbCX04DPqyAedqV0-OeNQlAiBciN7fKZ8lyRdjjMDWYN16HHdSvANZ4wSOT2VT3ketDA==&cpn=5XdC1_bp_vKtrYZL&c=WEB_EMBEDDED_PLAYER&cver=1.20240109.00.00"
            }
          />
        )}
        <Info {...{ name, tags, content, cast }} />
        {isTVShow && (
          <>
            <div className="flex items-center gap-x-2 px-3 mb-2 font-bold text-md">
              <h3>Các tập:</h3>
              {sessionTotal && currentSession && (
                <SessionSelect
                  sessionTotal={sessionTotal}
                  currentSession={currentSession}
                />
              )}
            </div>
            {episodeList && <EpisodeButtonList episodeList={episodeList} />}
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
