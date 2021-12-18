import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from "react-native";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleChangeText = (value) => setTodo(value);

  const pressAddButton = () => {
    if(todo) {
      addTodo(todo);
      setTodo("");
    } else {
      Alert.alert(
        "Warning",
        "You must type todo!",
        [{ text: "OK", onPress: () => console.log("ok") }]
      );
    }
  }

  return (
    <View style={styles.todoForm}>
      <TextInput 
        style={styles.todoInput}
        placeholder="입력하세요"
        value={todo}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity 
        onPress={pressAddButton}
        style={styles.submitButton}
      >
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  todoForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    paddingHorizontal: 20
  },
  todoInput: {
    width: "80%",
    height: 35,
    borderBottomWidth: 2
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: 35,
    borderRadius: 7,
    backgroundColor: "#000"
  },
  buttonText: {
    color: "#fff"
  }
})