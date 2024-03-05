import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import { StyleSheet, Text} from 'react-native';
import BackButton from "./BackButton";

const ChargingSummaryScreen = ({ route }) => {
    const { chargingTime, totalCost } = route.params;

    return (
        <View style={styles.container}>
            <BackButton />
            <View style={styles.header}>
                <Text style={styles.title}>Charging Summary</Text>
            </View>
            <View style={styles.batterycharge}>
                <Text style={styles.title2}>Battery level</Text>
                <Text style={styles.battery}>..90..%</Text>
            </View>
            <View style={styles.chargingtime}>
                <Text style={styles.text}>Charging Time:</Text>
                <Text style={styles.chargingtime2}>{chargingTime}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Total Cost:</Text>
                <Text style={styles.totalcosttext}>{totalCost}</Text>
            </View>
            <TouchableOpacity style={styles.StopChargingButton} onPress={"Close"}>
                <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FDF6E9',
    },
    header: {
        marginTop: 70,
    },
    closebox: {
        backgroundColor: '#ffffff',
        borderRadius: 40,
        width: 300,
        marginBottom: 10,
        marginTop: 80,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    closetext: {
       fontSize: 20,
    },
    battery: {
       fontSize: 40,
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
    },
    chargingtime2: {
        fontSize: 30,
        marginTop: 20,
    },
    batterycharge: {
        backgroundColor: '#ffffff',
        borderRadius: 40,
        width: 300,
        marginTop: 60,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    title2: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 35,
    },
    box: {
        backgroundColor: '#ffffff',
        borderRadius: 40,
        width: 300,
        marginBottom: 10,
        marginTop: 40,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    chargingtime: {
        backgroundColor: '#ffffff',
        borderRadius: 40,
        width: 300,
        marginBottom: 10,
        marginTop: 40,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    totalcosttext: {
        marginTop: 40,
        fontSize: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
    StopChargingButton: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 50,
        width: 350,
    },
});
export default ChargingSummaryScreen;