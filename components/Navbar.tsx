import React from "react";
import Logo from "./Logo";
import SearchButton from "./SearchButton";
import GenreButton from "./GenreButton";
import Link from "next/link";

function Navbar() {
  return (
    <div className="relative px-3 pt-2 pb-4">
      <div className="h-10 flex justify-between items-center mb-1">
        <Logo />
        <SearchButton />
      </div>
      <div className="flex gap-x-2">
        <Link className="nav-button" href="/">
          Phim T.Hình
        </Link>
        <Link className="nav-button" href="/">
          Phim
        </Link>
        <GenreButton />
      </div>
    </div>
  );
}

export default Navbar;
