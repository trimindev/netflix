import Link from "next/link";
import React from "react";

function NavButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      className="flex items-center h-8 px-3 text-sm rounded-full border-[1px] border-white border-opacity-80 active:bg-black active:bg-opacity-10 transition-all"
      href="/"
    >
      {children}
    </Link>
  );
}

export default NavButton;
