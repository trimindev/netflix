import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EpisodeButton from "./EpisodeButton";

interface PageProps {
  episodeList: number[];
  currentSession: number;
  currentEpisode: number;
}

function EpisodeButtonList({
  episodeList,
  currentSession,
  currentEpisode,
}: PageProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
      }}
    >
      <CarouselContent className="pl-3 py-2 gap-[1px] ">
        {episodeList.map((episodeNumber, index) => (
          <CarouselItem key={index} className="basis-10">
            <EpisodeButton {...{ episodeNumber }} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  );
}

export default EpisodeButtonList;
