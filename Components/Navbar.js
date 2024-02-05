import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Navbar() {
    const [activeIcon, setActiveIcon] = useState(null);

    const handleIconPress = (index) => {
        setActiveIcon(index);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.iconContainer, activeIcon === 0 && styles.activeIcon]}
                onPress={() => handleIconPress(0)}
            >
                <Ionicons name="home-outline" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.iconContainer, activeIcon === 1 && styles.activeIcon]}
                onPress={() => handleIconPress(1)}
            >
                <Ionicons name="car-sport-outline" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.iconContainer, activeIcon === 2 && styles.activeIcon]}
                onPress={() => handleIconPress(2)}
            >
                <Ionicons name="settings-outline" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.iconContainer, activeIcon === 3 && styles.activeIcon]}
                onPress={() => handleIconPress(3)}
            >
                <Ionicons name="person-outline" size={25} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 100,
        position: "absolute",
        bottom: 75,
        backgroundColor: "#F0F0F0",
        width: "90%",
        height: 78,
        borderRadius: 40,
        alignSelf: "center",
    },
    iconContainer: {
        padding: 20,
        borderRadius: 30,
    },
    activeIcon: {
        backgroundColor: "white",
    },
});
