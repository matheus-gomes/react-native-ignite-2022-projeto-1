import { Text } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  quantity: number;
  color: string;
}

export function TaskStatus({ name, quantity, color }: Props) {
  return (
    <View style={styles.taskStatus}>
      <Text style={{
        color,
        ...styles.statusText
      }}>
        {name}
      </Text>
      <Text style={styles.statusCount}>{quantity}</Text>
    </View>
  )
}