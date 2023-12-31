import React from "react";
import PlayButton from "./PlayButton";
import Episodes from "./Episodes";

function Info() {
  return (
    <div className="pt-2 px-3">
      <div className="mb-2">
        <h1 className="text-2xl font-extrabold">
          Lorem ipsum dolor sit amet consectetur
        </h1>
      </div>
      <div className="mb-2">
        <PlayButton />
      </div>
      <div className="font-extralight mb-2 ">
        <p className="pointer-events-none text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          nesciunt ab. Accusamus expedita sed dolorum, nobis vitae eligendi
          quaerat porro quibusdam architecto eum cum iste illum aperiam at, ea
          atque!
        </p>
        <div className="flex pr-12 py-1 text-xs cursor-pointer group">
          <p className="text-[#b2b2b2] truncate pointer-events-none">
            <span className="font-normal">Diễn viên:</span> Lorem ipsum dolor
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
