import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useTranslation } from 'react-i18next';


export default function PlugLocation({ name, address, postalCode, city, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
            <View style={styles.innerContainer}>
                <Icon name="charging-station" size={45} color="black" />
                <View style={styles.textContainer}>
                    <Text style={styles.header}>{name}</Text>
                    <Text style={styles.smallText}>{`${address} ${postalCode} ${city}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableContainer: {
        width: '100%',
    },
    innerContainer: {
        zIndex: 110,
        top: -10.5,
        width: 430,
        backgroundColor: 'white',
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
