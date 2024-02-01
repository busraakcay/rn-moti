import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export const homeStyles = (dimensions: {
  borderWidth: number;
  spacing: number;
}) =>
  StyleSheet.create({
    item: {
      borderBottomWidth: dimensions.borderWidth,
      paddingHorizontal: dimensions.spacing,
      paddingVertical: dimensions.spacing * 0.5,
      borderColor: colors.grey,
    },
  });
