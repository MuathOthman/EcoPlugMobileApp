import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PlugLocation from "./PlugLocation";
import PlugSpace from "./PlugSpace";

export default function Type({ name, address, postalCode, city, setIsVisible }) {
    const handleClose = () => {
        setIsVisible(false);
        console.log("Closed");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={handleClose}
            >
                <Text style={styles.closeButtonText}>x</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>{name}</Text>
            <Text style={styles.header2Text}>{`${address} ${postalCode} ${city}`}</Text>
            <Text style={styles.header2Text}>Choose Charging Type:</Text>
            <PlugSpace />
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
    closeButton: {
        position: "absolute",
        borderRadius: 20,
        top: 10,
        right: 30,
        padding: 10,
    },
    closeButtonText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
    },
    headerText: {
        zIndex: 110,
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 1,
        marginLeft: 30,
        marginTop: 60,
    },
    header2Text: {
        zIndex: 110,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 30,
        marginBottom: 30,
    },
});
