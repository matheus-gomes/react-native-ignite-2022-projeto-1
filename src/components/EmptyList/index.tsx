import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import EmptyListImage from "../../../assets/EmptyList.png";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={EmptyListImage} style={styles.image} />
      <Text style={styles.mainText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.secondaryText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}