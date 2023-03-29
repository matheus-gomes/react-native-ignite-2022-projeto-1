import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingHorizontal: 24,
  },
  inputContainer: {
    flexDirection: "row",
    top: -25
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    padding: 10,
    height: 50,
    borderRadius: 6,
    marginRight: 4,
    fontSize: 16,
    color: "#FFFFFF"
  },
  button: {
    backgroundColor: "#1E6F9F",
    height: 50,
    width: 50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },
  taskStatusContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  taskStatus: {
    flexDirection: "row",
  },
  taskList: {
    marginTop: 20
  }
});