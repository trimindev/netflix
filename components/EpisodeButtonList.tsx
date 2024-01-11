import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EpisodeButton from "./EpisodeButton";

function EpisodeButtonList({
  episodeNumbers,
  sessionNumber,
}: {
  episodeNumbers: string[];
  sessionNumber?: string;
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
      }}
    >
      <CarouselContent className="pl-3 py-2 gap-[1px] ">
        {episodeNumbers.map((episodeNumber, index) => (
          <CarouselItem key={index} className="basis-10">
            <EpisodeButton episodeNumber={episodeNumber} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  );
}

export default EpisodeButtonList;
