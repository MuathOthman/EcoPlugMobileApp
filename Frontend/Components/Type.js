import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome6";

export default function Type({ id, name, address, postalCode, city, setIsVisible }) {
    const navigation = useNavigation();
    const [freeCount, setFreeCount] = useState(0);

    useEffect(() => {
        const fetchFreeCount = async () => {
            try {
                const response = await fetch(`http://localhost:3000/sijainnit/specific/${id}`);
                const data = await response.json();
                setFreeCount(data[0].count);
            } catch (error) {
                console.error("Failed to fetch free count:", error);
            }
        };

        fetchFreeCount();
    }, [id]);

    const handleButtonPress = () => {
        setIsVisible(false);
        navigation.navigate('ParkingScreen', { id });
    };

    const handleClose = () => {
        setIsVisible(false);
        console.log("Closed");
    };

    const countTextColor = freeCount <= 5 ? 'red' : 'green';

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
            <View style={styles.innerContainer}>
                <Icon name="charging-station" size={45} color="black" />
                <Text style={[styles.countnumber, { color: countTextColor }]}>{freeCount}</Text>
            </View>
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
        fontSize: 33,
        fontWeight: "bold",
        color: "black",
    },
    headerText: {
        zIndex: 110,
        fontSize: 33,
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
        marginTop: 17,
        width: 350,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
    innerContainer: {
        marginLeft: 142,
        zIndex: 110,
        top: -10.5,
        width: 430,
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    countnumber: {
        zIndex: 110,
        fontSize: 51,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 1,
    },
});
