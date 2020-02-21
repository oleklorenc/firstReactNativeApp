import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import GameScreen from './components/GameScreen'

export default function App() {
  const [counter, setCounter] = useState(0);
  function SetCounterHandler(counter, x) {
    setCounter(counter + x);
  }

  return (
    <GameScreen/>
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
