import Image from 'next/image';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom.';
import { Movie } from '../typings';

interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const setShowModal = useSetRecoilState(modalState);
  const setCurrentMovie = useSetRecoilState(movieState);

  return (
    <div
      className="h-28 md:h-[150px]  min-w-[180px] md:min-w-[270px] md:hover:scale-105 transition duration-200 ease-out cursor-pointer relative"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
