import React from "react";
import {StyleSheet,Text, View, TextInput} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function Navbar() {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "space-between"}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    placeholder="Search"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 100,
        position: 'absolute',
        top: 110,
        backgroundColor: "white",
        padding: 30,
        width: "90%",
        height: 50,
        borderRadius: 40,
        alignSelf: 'center', // This will center the navbar in the parent container
        borderColor: "black",
        borderWidth: 0.5,
    },
    text: {
        color: "black",
        fontSize: 25,
    },
});