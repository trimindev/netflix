import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function BackButton() {
  return (
    <Link href="/">
      <ArrowLeftIcon className="w-6 h-6" />
    </Link>
  );
}

export default BackButton;
