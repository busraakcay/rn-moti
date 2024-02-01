import React, { createContext, useState } from "react";
import { Appearance, View } from "react-native";
import { themeStyles } from "./styles";
import { ThemeContextProps, ThemeMode, ThemeProviderProps } from "../../types";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    Appearance.getColorScheme()
  );

  const styles = themeStyles(themeMode);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <View style={styles.container}>{children}</View>
    </ThemeContext.Provider>
  );
};
