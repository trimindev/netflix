import React from "react";
import PlayButton from "./PlayButton";

interface InfoProps {
  name: string;
  content: string;
  tags: string[];
  cast: string;
}

function Info({ name, content, cast }: InfoProps) {
  return (
    <div className="pt-2 px-3">
      <div className="mb-4">
        <h1 className="text-3xl font-extrabold">{name}</h1>
      </div>
      <div className="mb-2">
        <PlayButton />
      </div>
      <div className="font-light mb-2">
        <p className="pointer-events-none text-sm">{content}</p>
        <div className="flex py-1 text-xs cursor-pointer group max-w-xs">
          <p className="text-[#b2b2b2] truncate pointer-events-none pr-2">
            <span className="font-semibold">Diễn viên:</span>
            {cast}...
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
