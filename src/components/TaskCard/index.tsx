import { View, Pressable, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome"
import { styles } from "./styles";

type Props = {
  task: {
    name: string;
    finished: boolean;
  },
  onFinished: () => void;
  onRemove: () => void;
}

export function TaskCard({ task, onFinished, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onFinished}>
        {
          task.finished ? 
          (
            <Icon name="check-circle" color="#8284FA" size={25} />
            ) : 
            (
            <Icon name="circle-o" color="#4EA8DE" size={25} />
          )
        }
      </TouchableOpacity>
      <Text
        style={[styles.taskText, task.finished ? styles.taskFinished : styles.taskNotFinished]}
      >
        {task.name}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Icon name="trash-o" color="#808080" size={25} />
      </TouchableOpacity>
    </View>
  )
}