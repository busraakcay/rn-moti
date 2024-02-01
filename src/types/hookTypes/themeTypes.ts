import { ReactNode } from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeContextProps {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
