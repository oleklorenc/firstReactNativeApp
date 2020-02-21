import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import QUESTIONS from "../data/dummy-questions";
let score=0

const GameScreen = props => {
  const [index, setIndex] = useState(0);

  function setIndexHandler(buttonNum) {
    if (
      (buttonNum == 1 &&
        QUESTIONS[index].answer1 == QUESTIONS[index].correctAnswer) ||
      (buttonNum == 2 &&
        QUESTIONS[index].answer2 == QUESTIONS[index].correctAnswer) ||
      (buttonNum == 3 &&
        QUESTIONS[index].answer3 == QUESTIONS[index].correctAnswer) ||
      (buttonNum == 4 &&
        QUESTIONS[index].answer4 == QUESTIONS[index].correctAnswer)
    ) score++;
    console.log(score);
    
    if (index == 2) setIndex(0);
    else setIndex(index + 1);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, height: "50%", backgroundColor: "powderblue" }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              title={QUESTIONS[index].answer1.toString()}
              onPress={() => {
                setIndexHandler(1);
              }}
            />
            <Button
              title={QUESTIONS[index].answer2.toString()}
              onPress={() => {
                setIndexHandler(2);
              }}
            />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              title={QUESTIONS[index].answer3.toString()}
              onPress={() => {
                setIndexHandler(3);
              }}
            />
            <Button
              title={QUESTIONS[index].answer4.toString()}
              onPress={() => {
                setIndexHandler(4);
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "skyblue",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 20, padding: 10, color: "red" }}>
          {QUESTIONS[index].question}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    backgroundColor: "red"
  },
  inside: {
    backgroundColor: "blue"
  }
});

export default GameScreen;
