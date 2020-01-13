import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your goal"
          style={styles.input} />
        <Button title="ADD" />
      </View>

      <View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  input: {
    borderBottomColor: 'black', borderBottomWidth: 2, width: '85%', padding: 10
  }
});
