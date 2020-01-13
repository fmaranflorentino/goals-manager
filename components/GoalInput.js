import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Add your goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal} />

            <Button title="ADD" onPress={props.addGoal.bind(this, enteredGoal)} />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: 'black', borderBottomWidth: 2, width: '85%', padding: 10
    },
});

export default GoalInput;