"use client";

import React from "react";
import Logo from "./Logo";
import SearchButton from "./SearchButton";
import GenreButton from "./GenreButton";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { TypeFilm } from "@/lib/filmType";
import BackButton from "./BackButton";

interface PageProps {
  isShowLogo?: boolean;
  isShowFilter?: boolean;
  genre?: string | undefined;
  typeFilm?: TypeFilm;
}

function Navbar({
  genre,
  isShowLogo = true,
  isShowFilter = true,
  typeFilm,
}: PageProps) {
  const pathName = usePathname();

  const title = undefined;

  return (
    <div className="nav">
      <div className="nav-row-1">
        {isShowLogo ? (
          <Logo />
        ) : (
          <div>
            <BackButton />
            {title && <h1>{title}</h1>}
          </div>
        )}
        <SearchButton />
      </div>
      {isShowFilter && (
        <div className="nav-row-2">
          {!typeFilm && (
            <>
              <Link className="nav-button" href="/tvshow">
                Serie TV
              </Link>
              <Link className="nav-button" href="/movie">
                Film
              </Link>
            </>
          )}
          <GenreButton typeFilm="movie" name="Categorie" />
        </div>
      )}
    </div>
  );
}

export default Navbar;
