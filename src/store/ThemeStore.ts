import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  theme: "light" | "dark";
  setTheme: () => void;
};

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "dark",
      setTheme: () =>
        set((state) => ({
          ...state,
          theme: state.theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "theme", // name of the item in the storage (must be unique)
    }
  )
);

// export default useThemeStore;
export const useTheme = () => useThemeStore((state) => state.theme);
export const useSetTheme = () => useThemeStore((state) => state.setTheme);
