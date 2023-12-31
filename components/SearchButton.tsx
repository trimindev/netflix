import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

function SearchButton() {
  return (
    <Link
      href="/"
      className="p-2 -mr-2 rounded-full active:bg-black active:bg-opacity-10 transition-all"
    >
      <MagnifyingGlassIcon className="h-6 w-6" />
    </Link>
  );
}

export default SearchButton;
