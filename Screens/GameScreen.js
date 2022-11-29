import React, { useState, useEffect } from 'react'
import { Text, Image, Alert, StyleSheet, View, TouchableOpacity } from 'react-native'
import logo from '../assets/logo.jpg'

import { Questions } from './questions'


function GameScreen({ navigation }) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)


  // restart game prompt
  const finishGame = () => {
    Alert.alert("Προσοχή!", "Το σκόρ σου θα χαθεί , θέλεις να αρχίσεις απο την αρχή ?", [
      {
        text: "Ακυρο",
        onPress: () => null,
        style: "cancel"
      },
      { text: "ΝΑΙ", onPress: () => setScore(0) & setCurrentQuestion(0) }
    ]);
    return true;
  }

  const submitAnswer = (answer) => {

    if (currentQuestion === Questions.length - 1) {

      if (score > 30) {
        alert("Κάτι έκανες μπράβο...")
      } else {
        alert("Χμμμ δεν την έβλεπες την σειρά ε ?")
      }
    }
    else {
      if (answer === Questions[currentQuestion].correct) {

        setScore(score + Questions[currentQuestion].points);
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }


  };



  return (
    <View style={styles.container}>


      <View style={styles.question}>
        <Text style={styles.questTitle}>{Questions[currentQuestion].question}</Text>
      </View>



      <View style={styles.answers}>

        <TouchableOpacity style={styles.answerBtn} onPress={() => submitAnswer(1)}>
          <Text style={styles.answerText}> {Questions[currentQuestion].options[1]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answerBtn} onPress={() => submitAnswer(2)}>
          <Text style={styles.answerText}> {Questions[currentQuestion].options[2]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answerBtn} onPress={() => submitAnswer(3)}>
          <Text style={styles.answerText}> {Questions[currentQuestion].options[3]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answerBtn} onPress={() => submitAnswer(4)}>
          <Text style={styles.answerText}> {Questions[currentQuestion].options[4]}</Text>
        </TouchableOpacity>

      </View>


      <View style={styles.actions}>

        <View style={styles.score}>
          <Text style={{ color: '#fff' }}>Το Σκόρ σου είναι:</Text>
          <Text style={{ color: '#fff', fontWeight: '800', marginTop: 10, fontSize: 22 }}>{score}</Text>
        </View>

        <TouchableOpacity style={styles.terminate} onPress={() => finishGame()}>
          <Text style={{ color: '#ffffff', fontSize: 22, fontWeight: '800' }}>Τερματισμός</Text>
        </TouchableOpacity>

      </View>
    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  question: {
    width: '100%',
    height: 200,
    top: 33,
    position: 'absolute',
    backgroundColor: '#16b9e4',

    justifyContent: 'center',
    alignItems: 'center'
  },
  questTitle: {
    fontSize: 18,
    color: '#ffffff',
    lineHeight: 40,
    padding: 20,
    fontWeight: '600'
  },
  answers: {
    marginTop: 100
  },
  answerBtn: {
    width: 350,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  answerText: {
    color: '#fff'
  },
  actions: {
    width: '100%',
    height: 100,
    position: 'absolute',
    flexDirection: 'row',
    bottom: 10,

  },
  score: {
    width: '50%',
    height: '100%',
    backgroundColor: '#00983c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  terminate: {
    width: '50%',
    height: '100%',
    backgroundColor: '#980000',
    justifyContent: 'center',
    alignItems: 'center'
  }


})




export default GameScreen
