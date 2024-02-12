import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PlugLocation from "./PlugLocation";
import PlugSpace from "./PlugSpace";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export default function Type({name, address, postalCode, city, setIsVisible }) {
    const navigation = useNavigation(); // Use useNavigation hook

    const handleButtonPress = () => {
        navigation.navigate("ParkingScreen"); // Navigate to ParkingScreen
    }

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
            <Text style={styles.header3Text}>Available Charging Stations</Text>
            <PlugSpace />
            <TouchableOpacity style={styles.StopChargingButton} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
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
        marginBottom: 5,
        marginLeft: 30,
        marginTop: 60,
    },
    header2Text: {
        zIndex: 110,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 30,
        marginBottom: 60,
    },
    header3Text: {
        zIndex: 110,
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 30,
        marginBottom: 20,
    },
    StopChargingButton: {
        backgroundColor: 'black',
        padding: 17,
        borderRadius: 40,
        alignItems: 'center',
        marginLeft: 40,
        marginTop: 25,
        marginBottom: 210,
        width: 350,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    }
});
