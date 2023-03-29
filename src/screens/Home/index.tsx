import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { TaskList } from "../../components/TaskList";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TaskList />
    </View>
  )
}