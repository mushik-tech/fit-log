"use client";

import Link from "next/link";
import React, { useContext } from "react";

const Stat = () => {
  return (
    <div className="flex space-x-5">
      <Link href={"/my-plan"} className="flex gap-3 items-center">
        Plan
        <span className="bg-[#C2F800] rounded-full w-8 h-8 text-center text-black p-1  font-bold">
          0
        </span>
      </Link>
      <Link href={"/my-plan"} className="flex gap-3 items-center">
        Saved
        <span className="border border-[#2D313B] rounded-full w-8 h-8 p-1 text-center font-bold">
          0
        </span>
      </Link>
    </div>
  );
};

export default Stat;
