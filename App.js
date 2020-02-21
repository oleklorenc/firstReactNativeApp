import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  function SetCounterHandler(counter, x) {
    setCounter(counter + x);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>HELLO REACT NATIVE</Text>
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.buttons}>
        <Button
          title="increment"
          onPress={() => {
            SetCounterHandler(counter, 1);
          }}
        />
        <Button
          title="decrement"
          onPress={() => {
            SetCounterHandler(counter, -1);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    marginTop: 30
  },
  counter: {
    fontSize: 20,
    margin: 100
  },
  buttons:{
    flexDirection: "row",
  }
});
