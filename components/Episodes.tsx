import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EpisodeButton from "./EpisodeButton";

function Episodes({ episodeList }: { episodeList: string[] }) {
  return (
    <div>
      <div className="px-3 font-bold text-md">
        <h3>Các tập:</h3>
      </div>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="pl-3 py-2 gap-[1px] ">
          {episodeList.map((episode, index) => (
            <CarouselItem key={index} className="basis-10">
              <EpisodeButton episode={episode} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
}

export default Episodes;
