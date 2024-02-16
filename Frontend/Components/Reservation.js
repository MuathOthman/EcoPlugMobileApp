import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import BackButton from "./BackButton";
import {useNavigation} from "@react-navigation/native";

export default function Reservation() {
    const navigator = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    };

    const handleContinuePress = () => {
        console.log('Phone Number:', phoneNumber);
        fetch('http://localhost:3000/otp/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
        })
        navigator.navigate('Verify');
    };

    return (
        <View style={styles.containers}>
            <BackButton />
            <View style={styles.reservation}>
                <Text style={styles.confirmationText}>Confirmation</Text>
                <Text style={styles.headerText}>Sellon Parkki</Text>
                <View style={styles.header}>
                    <Text style={styles.additionalText}>Address: 123 Main St</Text>
                    <Text style={styles.additionalText}>1234</Text>
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.field}
                        placeholder="Enter your phone number (+358)"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={handlePhoneNumberChange}
                    />

                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={handleContinuePress}
                        disabled={!phoneNumber}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    confirmationText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 50,
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    additionalText: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems:"center",
    },
    field: {
        padding: 20,
        paddingLeft: 38,
        paddingRight: 38,
        marginBottom: 200,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        fontSize: 18,
        marginTop: 200,
        backgroundColor: 'white',

    },
    continueButton: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 90,
        marginBottom: 120,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    },
    reservation: {
        marginTop: 65,
    },
    containers: {
        flex: 1,
        backgroundColor: '#FDF6E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});