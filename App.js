import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.screen}>

      <Text style={styles.pageTitle}>
        Manage your daily goals
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />

        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <FlatList
        style={styles.listContainer}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItems}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />

      {/* <ScrollView style={styles.listContainer}>
        {courseGoals.map((goal) =>
          <View key={goal} style={styles.listItems}>
            <Text>{goal}</Text>
          </View>
        )}
      </ScrollView> */}
      {/* <scroll view is used for small lists, flatList for big lists> */}


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50
  },

  pageTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  input: {
    borderBottomColor: 'black', borderBottomWidth: 2, width: '85%', padding: 10
  },

  listContainer: {
    marginTop: 30,
  },

  listItems: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ccc',
  },
});
