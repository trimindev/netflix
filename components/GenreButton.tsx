import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/GenreDialog";
import { fetchGenreList } from "@/lib/filmUtils";
import { TypeFilm } from "@/lib/filmType";

interface PageProps {
  name: string;
  typeFilm: TypeFilm;
}

export async function GenreButton({ name, typeFilm }: PageProps) {
  const GenreList = await fetchGenreList();

  return (
    <Dialog>
      <DialogTrigger>
        <div className="nav-button">
          <span>{name}</span>
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </div>
      </DialogTrigger>
      <DialogContent className="pt-12 pb-8 px-4 w-11/12 bg-[#0f0f0f] text-white/80 shadow-md rounded-md">
        <div className="flex gap-3 flex-wrap">
          {GenreList &&
            GenreList.map(({ genre, tags }, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-10 px-3 py-1 border border-white/80 rounded-md "
              >
                {genre}
              </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default GenreButton;
