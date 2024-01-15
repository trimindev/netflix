import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function GenreButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="nav-button">
          <span>Thể Loại</span>
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-screen h-screen">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default GenreButton;
