"use client";

import { useSetTheme, useTheme } from "@/store/ThemeStore";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

const ThemeSwitch = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  return (
    <div>
      <button
        className="bg-white flex bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-full items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={setTheme}
      >
        {theme === "light" ? (
          <Moon className="text-zinc-700" />
        ) : (
          <Sun className="text-zinc-700 dark:text-white/80" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
