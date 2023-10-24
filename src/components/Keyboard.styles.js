import { StyleSheet, Dimensions } from "react-native";
import { keys, colors } from "../constants";

const screenWidth = Dimensions.get("window").width;
export const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 1.6;

export default StyleSheet.create({
  keyboard: {
    alignSelf: "stretch",
    marginBottom: 50,
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  key: {
    width: keyWidth - 4,
    height: keyHeight - 4,
    margin: 2,
    borderRadius: 7,
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    color: colors.lightgrey,
    fontWeight: "bold",
  },
});
