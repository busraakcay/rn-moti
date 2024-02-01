import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  item: {
    borderWidth: 2.7,
    padding: 8,
    marginRight: 8,
    borderColor: colors.orange,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 22,
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {},
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
  },
});
