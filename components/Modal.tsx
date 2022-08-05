import React, { useEffect, useState } from 'react';
import MuiModal from '@mui/material/Modal';
import { modalState, movieState } from '../atoms/modalAtom.';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  PlusIcon,
  ThumbUpIcon,
  XIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from '@heroicons/react/outline';
import { Element, Genre } from '../typings';
import ReactPlayer from 'react-player/lazy';
import { FaPlay } from 'react-icons/fa';
import { abort } from 'process';

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const currentMovie = useRecoilValue(movieState);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!currentMovie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          currentMovie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${currentMovie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json());

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [currentMovie]);

  const handleClose = () => {
    setShowModal(false);
    setPlaying(true);
  };

  console.log(trailer);

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="!top-12 right-0 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-2xl scrollbar-hide select-none"
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative  pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            config={{ youtube: { playerVars: { disablekb: 1 } } }}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            playing={playing}
            muted={muted}
          />
          <div className="absolute bottom-2 sm:bottom-10 pr-2 sm:px-10 flex w-full items-center justify-between ">
            <div className="flex sm:space-x-2 -space-x-1">
              <button
                className="flex items-center gap-x-2 rounded bg-white px-6 py-2
              text-xl font-semibold text-black transition hover:bg-[#e6e6e6] scale-75 sm:scale-100"
                onClick={() => {
                  window.open(`https://www.youtube.com/watch?v=${trailer}`);
                  setPlaying(false);
                }}
              >
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>

              <button className="modalButton scale-75 sm:scale-100">
                <PlusIcon className="h-7 w-7" />
              </button>

              <button className="modalButton scale-75 sm:scale-100">
                <ThumbUpIcon className="h-7 w-7" />
              </button>
            </div>

            <button
              className="modalButton scale-75 sm:scale-100"
              onClick={() => setMuted(!muted)}
            >
              {muted ? (
                <VolumeOffIcon className="h-6 w-6" />
              ) : (
                <VolumeUpIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className="flex space-x-16 rounded-b-2xl bg-[#181818] px-10 py-8 select-text h-1/2 sm:h-auto overflow-scroll scrollbar-hide sm:overflow-hidden">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {currentMovie?.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {currentMovie?.release_date || currentMovie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row pb-5 sm:pb-0">
              <p className="w-5/6">{currentMovie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres: </span>
                  {genres.map((genre) => genre.name).join(', ')}
                </div>

                <div>
                  <span className="text-[gray]">Original language: </span>
                  {currentMovie?.original_language}
                </div>

                <div>
                  <span className="text-[gray]">Total votes: </span>
                  {currentMovie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default Modal;
