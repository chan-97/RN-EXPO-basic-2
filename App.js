import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoValue) => {
    const todo = { key: Math.random(), todo: todoValue };
    setTodoList((prev) => {
      return [...prev, todo];
    })
  }

  const deleteTodo = (todoKey) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.key !== todoKey);
    })
  }

  return ( 
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <Header />
        <TodoForm addTodo={addTodo} />
        <FlatList
          data={todoList}
          renderItem={({ item }) => <TodoItem item={item} deleteTodo={deleteTodo} />}
        />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
