import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.addGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.isAddMode} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add your goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} style={styles.buttonLeft} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.cancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        width: '49%',
    },
    input: {
        borderBottomColor: 'black', borderBottomWidth: 2, width: '85%', padding: 10,
        marginBottom: 20,
    },
});

export default GoalInput;