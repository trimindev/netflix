import React from "react";
import NavButton from "./NavButton";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Logo from "./Logo";
import SearchButton from "./SearchButton";

function Navbar() {
  return (
    <div className="px-3 pt-2 pb-4">
      <div className="h-10 flex justify-between items-center mb-1">
        <Logo />
        <SearchButton />
      </div>
      <div className="flex gap-x-2">
        <NavButton>Phim T.Hình</NavButton>
        <NavButton>Phim</NavButton>
        <NavButton>
          <span>Thể Loại</span>
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </NavButton>
      </div>
    </div>
  );
}

export default Navbar;
