import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function App() {

  const [entredtext, setEntredText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(text){
    setEntredText(text)
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseList)=>
      [...currentCourseList, entredtext]
    )
    console.log(courseGoals)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder='Your Course Goal !' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  inputText:{
    borderWidth: 1,
    borderColor:'#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer:{
    flex: 5
  }

});
