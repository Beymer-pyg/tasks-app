import Link from "next/link";
import React from "react";
import HabitHUBLogo from "./HabitHUBLogo";

export default function SideNav() {
  return (
    <div
      className="flex h-full flex-col pxxx-2 py-4  border-r-2 border-gray-300
    "
    >
      <Link
        className="mb-4 px-2 flex h-14 items-center justify-start md:h-16"
        href="/"
      >
        <div className="w-40">
          <HabitHUBLogo />
        </div>
      </Link>
      <div className="h-36 mb-4 px-2">Calendar</div>
      <div>
        <div className="font-semibold px-2">Tasks</div>
        <div className="flex w-full items-center justify-between bg-gray-200 h-9">
          <div className="ml-3.5">Today</div>
          <div className="mr-2">2</div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-12">
        <div className="font-semibold px-2">Lists</div>
        <div className="flex w-full items-center justify-between">
          <div className="ml-3.5">Daily Routine</div>
          <div className="mr-2">1</div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="ml-3.5">Study</div>
          <div className="mr-2">0</div>
        </div>
      </div>
    </div>
  );
}
