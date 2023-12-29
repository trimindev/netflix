"use client";

import React from "react";
import { CarouselContent, CarouselItem } from "./ui/carousel";
import Card from "./Card";

function ListGenreCard({ images }: { images: string[] }) {
  return (
    <CarouselContent className="ml-3 gap-[6px]">
      {images.map((image, index) => (
        <CarouselItem key={index} className="basis-[30%]">
          <Card image={image} />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}

export default ListGenreCard;
