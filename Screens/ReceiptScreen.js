import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function ReceiptScreen({ route }) {
    const navigation = useNavigation();
    const { chargingTime, totalCost } = route.params;

    const handleClosePress = () => {
        navigation.navigate('Map');
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{t('Receipt')}</Text>
            </View>
            <View style={styles.chargingtime}>
                <Text style={styles.text}>{t('ChargingTime')}</Text>
                <Text style={styles.chargingtime2}>{chargingTime} {t('Minutes')}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>{t('TotalCostReceipts')}</Text>
                <Text style={styles.totalcosttext}>{totalCost} €</Text>
            </View>
            <TouchableOpacity style={styles.StopChargingButton} onPress={handleClosePress}>
                <Text style={styles.buttonText}>{t('Close')}</Text>
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
        marginTop: 90,
        marginBottom: 39,
    },
    closebox: {
        backgroundColor: '#ffffff',
        borderRadius: 40,
        width: 300,
        marginBottom: 10,
        marginTop: 40,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    closetext: {
        fontSize: 20,
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
        marginTop: 70,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 45,
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
        marginTop: 20,
        fontSize: 30,
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
        marginTop: 124,
        width: 350,
    },
});
