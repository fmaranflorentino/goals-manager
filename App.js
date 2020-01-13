import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goal => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }]);
  }

  const removeGoalHandle = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>

      <Text style={styles.pageTitle}>
        Manage your daily goals
      </Text>

      <GoalInput addGoal={addGoalHandler} />


      <FlatList
        style={styles.listContainer}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} id={itemData.item.id} deleteGoal={removeGoalHandle} />}
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
  listContainer: {
    marginTop: 30,
  },
});
