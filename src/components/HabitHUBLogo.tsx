import React from "react";
import { CalendarHeart } from "lucide-react";

export default function HabitHUBLogo() {
  return (
    <div className="relative flex flex-row items-center leading-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-2 -left-3 -z-10 transform-gpu overflow-hidden"
      >
        <div
          style={{
            clipPath:
              "polygon(40% 10%, 58% 10%, 94% 36%, 94% 57%, 73% 81%, 56% 90%, 25% 82%, 8% 43%, 8% 31%, 15% 19%)",
            filter: "blur(16px)",
          }}
          className="relative w-12 h-14 bg-[#c885f8]"
        />
      </div>
      <CalendarHeart className="h-6 w-6 z-10 text-white" />

      <p className="font-bold text-2xl ml-5">HabitHUB</p>
    </div>
  );
}
