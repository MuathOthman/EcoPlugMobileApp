import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function PlugLocation({ name, address, postalCode, city }) {
    return (
        <View style={styles.innerContainer}>
            <Icon name="charging-station" size={45} color="black" />
            <View style={styles.textContainer}>
                <Text style={styles.header}>{name}</Text>
                <Text style={styles.smallText}>{`${address} ${postalCode} ${city}`}</Text>
            </View>
        </View>
    );
}

// Define your styles here
const styles = StyleSheet.create({
    innerContainer: {
        top: 40,
        width: 430,
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    textContainer: {
        flex: 1,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 1,
    },
    smallText: {
        fontSize: 18,
        marginLeft: 20,
        color: 'gray',
    },
});
