import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, deleteTodo }) {
  return (
    <TouchableOpacity
      key={item.key}
      style={styles.todoItem}
    >
      <Text style={styles.todoItemText}>{item.todo}</Text>
      <MaterialIcons onPress={() => deleteTodo(item.key)} name="delete" size={24} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
    backgroundColor: "pink"
  },
  todoItemText: {
    color: "#000",
    fontSize: 18
  }
})