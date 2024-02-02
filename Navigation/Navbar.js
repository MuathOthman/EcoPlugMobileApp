import React from "react";
import {StyleSheet,Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function Navbar() {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 100,            // Make sure the navbar is on top
        position: 'absolute', // Position the navbar absolutely
        bottom: 80,            // At the bottom of the screen
        backgroundColor: "#F6F6F6",
        padding: 30,
        width: "90%",       // Take full width of the screen
        height: 80,         // Set the height
        borderRadius: 40,    // Round the corners
        alignItems: "center",// Center items horizontally
    },
    text: {
        color: "white",
        fontSize: 25,
    },
});