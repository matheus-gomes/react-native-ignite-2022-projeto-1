import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskStatus: {
    flexDirection: "row",
  },
  statusText: {
    fontWeight: "bold",
    marginRight: 8,
    fontSize: 14
  },
  statusCount: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#FFF",
    borderRadius: 50,
    backgroundColor: "#333333",
    paddingHorizontal: 10,
    paddingVertical: 0
  }
});