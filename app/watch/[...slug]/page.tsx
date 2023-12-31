import Episodes from "@/components/Episodes";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import React from "react";

function page() {
  return (
    <div className="max-w-screen-sm min-h-screen mx-auto">
      <Navbar />
      <Video />
      <Info />
      <Episodes />
    </div>
  );
}

export default page;
