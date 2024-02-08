import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PlugLocation from "./PlugLocation";

export default function Type({name, address, postalCode, city,}) {

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{name}</Text>
            <Text style={styles.header2Text}>{`${address} ${postalCode} ${city}`}</Text>
            <Text style={styles.header2Text}>Choose Charging Type:</Text>
            <PlugLocation name="Type 2" address="AC 22kW" postalCode="2" city="Espoo" />
            <PlugLocation name="Type 2" address="DC 50kW" postalCode="2" city="Espoo" />
            <PlugLocation name="Type 2" address="DC 150kW" postalCode="2" city="Espoo" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 100,
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        width: "100%",
        height: "55%",
        borderRadius: 50,
    },
    placename: {
        flex: 1,
        backgroundColor: '#FDF6E9',
        justifyContent: 'center',
    },
    address: {
        top: 260,
        fontSize: 20,
        zIndex: 110,
    },
    headerText: {
        zIndex: 110,
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 1,
        marginLeft: 30,
        marginTop: 450,
    },
    header2Text: {
        zIndex: 110,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30,
        marginBottom: 30,
    },
});
