import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function PlugSpace() {
    return (
        <View style={styles.innerContainer}>
            <Icon name="charging-station" size={45} color="black" />
        </View>
    );
}

// Define your styles here
const styles = StyleSheet.create({
    innerContainer: {
        zIndex: 110,
        top: -10.5,
        width: 430,
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    textContainer: {
        zIndex: 110,
        flex: 1,
    },
    header: {
        zIndex: 110,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 1,
    },
    smallText: {
        zIndex: 110,
        fontSize: 18,
        marginLeft: 20,
        color: 'gray',
    },
});