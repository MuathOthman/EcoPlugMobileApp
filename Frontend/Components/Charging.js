import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from "./BackButton";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Charging() {
    const route = useRoute();
    const navigator = useNavigation();
    const { park, lable, latauspisteID, phoneNumber } = route.params;

    const [latausID, setLatausID] = useState(null);

    useEffect(() => {
        const fetchLatausID = async () => {
            try {
                const response = await fetch('http://localhost:3000/user/get-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        phoneNumber,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch latausID');
                }

                const data = await response.json();
                setLatausID(data.latausId);

                console.log('LatausID:', data.latausId);

                // Call setReserved inside the then block
                setReserved(data.latausId);

            } catch (error) {
                console.error('Error fetching latausID:', error);
            }
        };

        fetchLatausID();

    }, [phoneNumber]);

    const setReserved = (fetchedLatausID) => {
        if (fetchedLatausID) {
            fetch('http://localhost:3000/charging/start-charging', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    latauspisteID,
                    latausID: fetchedLatausID,
                }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to start charging');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Charging started successfully:', data);
                })
                .catch(error => {
                    console.error('Error starting charging:', error);
                });
        } else {
            console.warn('LatausID is not available yet.');
        }
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.text}>CHARGING</Text>
            <View style={styles.whiteBox}>
                <Text style={styles.nameText}>{lable}</Text>
                <Text style={styles.name1Text}>{park}</Text>
                <View style={styles.progressCircle}>
                    <Ionicons name="flash-sharp" size={40} color="black" style={styles.lightningIcon} />
                    <Text style={styles.circleText}>{`${Math.floor(Math.random() * 40) + 1}%`}</Text>
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