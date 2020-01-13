import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onLongPress={props.deleteGoal.bind(this, props.id)}
        >
            <View style={styles.listItems}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ccc',
    },
});

export default GoalItem;