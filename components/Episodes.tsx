import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EpisodeButton from "./EpisodeButton";

function Episodes() {
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
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem key={index + 1} className="basis-10">
              <EpisodeButton number={index + 1} />
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
