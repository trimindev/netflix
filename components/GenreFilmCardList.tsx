import React from "react";
import { CarouselContent, CarouselItem } from "./ui/carousel";
import CarouselRow from "@/components/CarouselRow";
import Card from "./Card";
import { FilmInfo } from "@/lib/filmType";
import { findFilmByTag } from "@/lib/filmUtils";

interface GenreFilmCardListProps {
  title: string;
  films: FilmInfo[];
  targetTag: string;
}

function GenreFilmCardList({
  title,
  films,
  targetTag,
}: GenreFilmCardListProps) {
  const filteredFilms = findFilmByTag(films, targetTag);
  return (
    <CarouselRow title={title}>
      <CarouselContent className="ml-3 gap-[6px] mb-3">
        {filteredFilms.map(({ id, poster1Url }, index) => (
          <CarouselItem key={index} className="basis-[30%]">
            <Card id={id} poster={poster1Url} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselRow>
  );
}

export default GenreFilmCardList;
