import React from "react";
import SearchButton from "./SearchButton";
import Link from "next/link";
import GenreButton from "./GenreButton";

function NavBarGenre({ genre }: { genre: string }) {
  return (
    <div className="nav">
      <div className="nav-row-1">
        <SearchButton />
      </div>
      <div className="nav-row-2">
        <Link className="nav-button" href="/">
          Phim T.Hình
        </Link>
        <Link className="nav-button" href="/">
          Phim
        </Link>
        <GenreButton name={genre} />
      </div>
    </div>
  );
}

export default NavBarGenre;
