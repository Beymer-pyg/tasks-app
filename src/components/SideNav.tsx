"use client";
import Link from "next/link";
import React from "react";
import HabitHUBLogo from "./HabitHUBLogo";
import CalendarComp from "./CalendarComp";
import { useBoardStore } from "@/store/BoardStore";

export default function SideNav() {
  const board = useBoardStore((state) => state.board);

  let totalTodos = 0;
  for (let column of Array.from(board.columns.values())) {
    totalTodos += column.todos.length;
  }
  return (
    <div
      className="flex h-full flex-col pxxx-2 py-4  border-r-2 border-gray-300
    "
    >
      <Link
        className="px-2 flex h-14 items-center justify-center md:h-16"
        href="/"
      >
        <div className="w-40">
          <HabitHUBLogo />
        </div>
      </Link>
      <div className="mb-2 px-1 mx-auto">
        <CalendarComp />
      </div>
      <div className="md:mt-6">
        <div className="font-semibold px-2">Tasks</div>
        <div className="flex w-full items-center justify-between bg-gray-200 h-9">
          <div className="ml-3.5">Today</div>
          <div className="mr-2">{totalTodos}</div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-2 md:mt-12">
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
