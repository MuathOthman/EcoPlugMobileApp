import React, { useState, useCallback } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';


const iconData = [
    { name: "home-outline" },
    { name: "car-sport-outline" },
    { name: "settings-outline" },
    { name: "person-outline" },
];

const screenMapping = {
    "home-outline": "Map",
    "car-sport-outline": "SearchPage",
    "settings-outline": "Map",
    "person-outline": "Map",
};

export default function Navbar() {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [activeIcon, setActiveIcon] = useState(0);

    // Reset active icon to 0 when navigating to Map screen
    useFocusEffect(
        useCallback(() => {
            setActiveIcon(0);
        }, [])
    );

    const handleIconPress = (index) => {
        setActiveIcon(index);
        const { name } = iconData[index];
        const screen = screenMapping[name];

        if (screen) {
            navigation.navigate(screen);
        } else {
            console.warn(`Screen not mapped for icon name: ${name}`);
        }
    };

    return (
        <View style={styles.container}>
            {iconData.map((icon, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.iconContainer, activeIcon === index && styles.activeIcon]}
                    onPress={() => handleIconPress(index)}
                >
                    <Ionicons name={icon.name} size={25} color="black" />
                </TouchableOpacity>
            ))}
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
