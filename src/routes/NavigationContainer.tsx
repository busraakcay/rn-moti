import React, { useContext } from "react";
import { NavigationContainer as RNNavigationContainer } from "@react-navigation/native";
import { themeColors } from "../styles";
import { ThemeContext } from "../providers";
import { ThemeContextProps } from "../types";

export const NavigationContainer = ({ children }) => {
  const { themeMode } = useContext<ThemeContextProps>(ThemeContext);
  console.log(themeMode);
  const appTheme = {
    dark: themeMode === "dark",
    colors: {
      primary: themeColors[themeMode].cardBackgroundColor,
      background: themeColors[themeMode].screenBackgroundColor,
      card: themeColors[themeMode].barsBackgroundColor,
      text: themeColors[themeMode].textColor,
      border: themeColors[themeMode].barBorderColor,
      notification: themeColors[themeMode].separatorLineColor,
    },
  };

  return (
    <RNNavigationContainer theme={appTheme}>{children}</RNNavigationContainer>
  );
};
