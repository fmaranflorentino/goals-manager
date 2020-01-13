import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItems}>
            <Text>{props.title}</Text>
        </View>
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