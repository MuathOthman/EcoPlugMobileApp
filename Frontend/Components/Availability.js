import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from "./BackButton";
export default function Availability() {
    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.text}>CHARGING</Text>
            <View style={styles.whiteBox}>
                <Text style={styles.nameText}>Volkswagen</Text>
                <Text style={styles.name1Text}>ID.3</Text>
                <View style={styles.progressCircle}>
                    <Ionicons name="flash-sharp" size={40} color="black" style={styles.lightningIcon} />
                    <Text style={styles.circleText}>50%</Text>
                    <Text style={styles.additionalText}>22kW</Text>
                </View>
                <Text style={styles.bottomText}>YOUR CAR IS BEING CHARGED</Text>
            </View>
            <View style={styles.smallBoxesContainer}>
                <View style={styles.smallBox1}>
                    <Text style={styles.smallBoxText}>03:50</Text>
                    <Text style={styles.smallBox1SubText}>CHARGING TIME SINCE STARTED</Text>
                </View>
                <View style={styles.separator} />
                <Text style={styles.separatorText}></Text>
                <View style={styles.smallBox2}>
                    <Text style={styles.smallBox2Text}>22€</Text>
                    <Text style={styles.smallBox2SubText}>TOTAL COST ACCURED CHARGE</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.StopChargingButton}>
                <Text style={styles.buttonText}>STOP CHARGING</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6E9',
        alignItems: 'center',
        paddingTop: 120,
    },
    text: {
        fontSize: 29,
        fontWeight: '700',
        marginBottom: 20,
    },
    whiteBox: {
        width: 350,
        height: "auto",
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameText: {
        fontSize: 35,
        fontWeight: '800',
        marginTop: 30,
    },
    name1Text: {
        fontSize: 35,
        fontWeight: '800',
        marginBottom: 25,
    },
    progressCircle: {
        width: 220,
        height: 220,
        borderRadius: 150,
        borderWidth: 7,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    circleText: {
        fontSize: 45,
        fontWeight: '800',
        zIndex: 1,
    },
    lightningIcon: {
        marginTop: 0,
        marginBottom: 10,
        zIndex: 2,
    },
    additionalText: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold"
    },
    bottomText: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20,
        fontWeight: '700'
    },
    smallBoxesContainer: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 10,
    },
    smallBox1: {
        width: 170,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    smallBox2: {
        width: 170,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    separator: {
        width: 15,
    },
    smallBoxText: {
        fontSize: 40,
        fontWeight: '900',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 20,
    },
    smallBox2Text: {
        fontSize: 40,
        fontWeight: '900',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 20,
    },
    smallBox2SubText: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'left',
        textAlignVertical: 'center',
        marginTop: 15,
        marginLeft: 20,
    },
    smallBox1SubText: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'left',
        textAlignVertical: 'center',
        marginTop: 15,
        marginLeft: 25,
    },
    StopChargingButton: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 14,
        width: 350,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
});