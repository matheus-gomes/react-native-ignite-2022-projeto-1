import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderColor: "#333333",
    borderWidth: 2,
    borderRadius: 5,
    height: 64,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12
  },
  taskText: {
    marginHorizontal: 8,
    color: "#FFFFFF",
    fontSize: 14,
    flex: 1
  },
  taskFinished: {
    textDecorationLine: "line-through",
  },
  taskNotFinished: {
    textDecorationLine: "none",
  }
});