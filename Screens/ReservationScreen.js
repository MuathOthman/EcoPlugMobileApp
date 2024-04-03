import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import BackButton from "../Components/BackButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';


export default function ReservationScreen() {
    const { t } = useTranslation();
    const navigator = useNavigation();
    const route = useRoute();
    const { park, lable, name, id, latauspisteID, sahkonhinta } = route.params;
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    };

    const handleContinuePress = async () => {
        try {
            console.log('Phone Number:', phoneNumber);

            const response = await fetch('http://localhost:3002/otp/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber }),
            });

            const data = await response.json();
            console.log('Success:', data);

            navigator.navigate('Verify', {
                park,
                lable,
                name,
                id,
                phoneNumber,
                latauspisteID,
                sahkonhinta,
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={
            () => {
                Keyboard.dismiss();
            }
        }>
            <View style={styles.containers}>
                <BackButton />
                <View style={styles.reservation}>
                    <Text style={styles.confirmationText}>{t('Confirmation')}</Text>
                    <Text style={styles.headerText}>{name}</Text>
                    <View style={styles.header}>
                        <Text style={styles.additionalText1}>{lable}</Text>
                        <Text style={styles.additionalText}>{park}</Text>
                    </View>

                    <View style={styles.container}>
                        <TextInput
                            style={styles.field}
                            placeholder={t('EnterPhoneNumber')}
                            keyboardType="phone-pad"
                            value={phoneNumber}
                            onChangeText={handlePhoneNumberChange}
                        />

                        <TouchableOpacity
                            style={styles.continueButton}
                            onPress={handleContinuePress}
                            disabled={!phoneNumber}
                        >
                            <Text style={styles.buttonText}>{t('Continue')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    confirmationText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 130,
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    additionalText1: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    additionalText: {
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 30,
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
        position: 'absolute',
        padding: 20,
        width: 345,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        fontSize: 18,
        top: 90,
        backgroundColor: 'white',
    },
    continueButton : {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 371,
        width: 350,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
    containers: {
        flex: 1,
        backgroundColor: '#FDF6E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});