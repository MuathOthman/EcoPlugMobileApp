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
        zIndex: 100,
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#F6F6F6",
        padding: 30,
        width: "100%",
        height: 120,
        borderRadius: 40,
        alignSelf: 'center', // This will center the navbar in the parent container
    },
    text: {
        color: "white",
        fontSize: 25,
    },
});