import Episodes from "@/components/Episodes";
import Info from "@/components/Info";
import ListGenreCard from "@/components/ListGenreCard";
import LolomoRow from "@/components/LolomoRow";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import React from "react";

function page() {
  const koreanFilmImage = [
    "/11.jpg",
    "/11.jpg",
    "/11.jpg",
    "/11.jpg",
    "/11.jpg",
  ];

  return (
    <div className="max-w-screen-sm min-h-screen mx-auto">
      <div className="pb-2 mb-2 border-b-2 border-opacity-5 border-white">
        <Navbar />
        <Video />
        <Info />
        <Episodes />
      </div>
      <LolomoRow title={"Nội dung tương tự"}>
        <ListGenreCard images={koreanFilmImage} />
      </LolomoRow>
    </div>
  );
}

export default page;
