import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import BackButton from "../Components/BackButton";

export default function SearchPage() {
    return (
        <View style={styles.containers}>
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.text}>Charging Stations</Text>
            <TextInput style={styles.field} placeholder="Search for charging stations"/>
            <View style={{backgroundColor: "white", top: 80, width: "150%"}}>
                <Text>Search</Text>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: "#FDF6E9",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        position: 'absolute',
        top: 40,
        padding: 30,
        width: "100%",
        height: 120,
        borderRadius: 40,
        alignSelf: 'center'
    },
    text: {
        top: 40,
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    },
    field: {
        top: 60,
        padding: 20,
        width: "100%",
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: "black",
        borderWidth: 1,
    },
});