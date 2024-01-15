import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/GenreDialog";
import Link from "next/link";

export function GenreButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="nav-button">
          <span>Thể Loại</span>
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </div>
      </DialogTrigger>
      <DialogContent className="">
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <Link href="/">Anime</Link>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}

export default GenreButton;
