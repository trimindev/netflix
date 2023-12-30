import React from "react";
import EpisodesButton from "./EpisodesButton";
import PlayButton from "./PlayButton";

function Info() {
  return (
    <div className="px-2">
      <div className="mb-2">
        <h1 className="text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur
        </h1>
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <PlayButton />
        <EpisodesButton />
      </div>
      <div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          nesciunt ab. Accusamus expedita sed dolorum, nobis vitae eligendi
          quaerat porro quibusdam architecto eum cum iste illum aperiam at, ea
          atque!
        </p>
        <div className="text-xs flex pr-12 py-1 group">
          <p className="text-[#b2b2b2] truncate">
            <span className="font-semibold">Diễn viên:</span> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ab, laboriosam
          </p>
          <button className="group-active:text-red-500 transition-all">
            thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
