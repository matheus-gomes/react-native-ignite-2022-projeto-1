import { useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { EmptyList } from "../EmptyList";
import { TaskCard } from "../TaskCard";
import { TaskStatus } from "../TaskStatus";
import { styles } from "./styles";

interface ITask {
  name: string;
  finished: boolean;
}

export function TaskList() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<Array<ITask>>([]);

  function handleTaskAdd() {
    if (!taskName) {
      return Alert.alert('Adicionar Tarefa', 'A tarefa precisa ter um nome')
    }

    const task: ITask = {
      name: taskName,
      finished: false,
    };

    setTasks(prevState => [...prevState, task]);
    setTaskName("");
  }

  function handleTaskRemove(task: ITask) {
    setTasks(prevState => prevState.filter((t) => t.name !== task.name));
  }

  function handleTaskFinished(task: ITask) {
    const tasksNew = [...tasks]
    const taskIndex = tasks.findIndex(t => t.name === task.name);

    tasksNew[taskIndex].finished = !tasksNew[taskIndex].finished;

    setTasks(tasksNew);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma tarefa"
          placeholderTextColor='#808080'
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity onPress={handleTaskAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskStatusContainer}>
        <TaskStatus
          name="Criadas"
          color="#4EA8DE"
          quantity={tasks.length}
        />
        <TaskStatus
          name="Concluídas"
          color="#8284FA"
          quantity={tasks.filter((t) => t.finished).length}
        />
      </View>

      <FlatList
        style={styles.taskList}
        data={tasks}
        renderItem={({ item }) =>
          <TaskCard
            task={item}
            onFinished={() => handleTaskFinished(item)}
            onRemove={() => handleTaskRemove(item)}
            key={item.name}
          />
        }
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />
    </View>
  )
}