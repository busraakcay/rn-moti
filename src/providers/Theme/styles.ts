import { StyleSheet } from "react-native";
import { themeColors } from "../../styles/theme";

export const themeStyles = (themeMode: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexGrow: 1,
      backgroundColor: themeColors[themeMode].screenBackgroundColor,
    },
  });
