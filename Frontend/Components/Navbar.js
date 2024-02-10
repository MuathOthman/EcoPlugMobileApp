import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
    const navigation = useNavigation();
    const [activeIcon, setActiveIcon] = useState(0);

    const handleIconPress = (index) => {
        setActiveIcon(index);

        switch (index) {
            case 0:
                navigation.navigate("Home");
                break;
            case 1:
                navigation.navigate("CarSport");
                break;
            case 2:
                navigation.navigate("Reservation");
                break;
            case 3:
                navigation.navigate("Availability");
                break;
            default:
                break;
        }
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
        position: "absolute",
        bottom: 60,
        backgroundColor: "white",
        width: "90%",
        height: 78,
        borderRadius: 50,
        alignSelf: "center",
    },
    iconContainer: {
        padding: 21,
        borderRadius: 30,
    },
    activeIcon: {
        backgroundColor: "#F0F0F0",
    },
});
