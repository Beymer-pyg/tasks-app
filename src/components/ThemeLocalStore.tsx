"use client";
import { useTheme } from "@/store/ThemeStore";
import React, { useEffect } from "react";

function ThemeLocalStore() {
  const theme = useTheme();
  useEffect(() => {
    try {
      const localThemeString = localStorage.getItem("theme");
      if (localThemeString) {
        const localTheme = JSON.parse(localThemeString);
        document.documentElement.setAttribute(
          "data-mode",
          localTheme.state.theme
        );
        document.documentElement.className = localTheme.state.theme;
      }
    } catch (err) {
      console.log("error loading the color theme");
    }
  }, [theme]);
  return <></>;
}

export default ThemeLocalStore;
