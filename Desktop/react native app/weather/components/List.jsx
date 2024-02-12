import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function List(props) {
    return (
        <View style={styles.card}>
            <View style={styles.date}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.tempContainer}>
                <Text style={styles.temp}>MIN {parseInt(props.minTemp - 273)}</Text>
                <Text style={styles.temp}>Max {parseInt(props.maxTemp - 273)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderRadius: 10,
        margin: 4,
        backgroundColor: '#0077b6',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '95%',
    },
    date: {
        justifyContent: 'center',
    },
    title: {
        margin: 5,
        color: '#fff',
    },
    tempContainer: {
        marginVertical: 5,
    },
    temp: {
        margin: 5,
        color: '#fff',
    },
});

export default List;
