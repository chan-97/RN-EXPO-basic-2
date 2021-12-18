import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>TODO LIST</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "coral"
  },
  headerText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#fff"
  }
})