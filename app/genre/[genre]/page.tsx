import NavBarGenre from "@/components/NavBarGenre";
import React from "react";

interface PageProps {
  params: { genre: string };
}

function page({ params }: PageProps) {
  const { genre } = params;

  return (
    <div>
      <NavBarGenre genre={genre} />
    </div>
  );
}

export default page;
