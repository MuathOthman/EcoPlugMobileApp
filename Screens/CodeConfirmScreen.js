import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';


export default function CodeConfirmScreen() {
    const { t } = useTranslation();
    const route = useRoute();
    const navigator = useNavigation();
    const [latausID, setLatausID] = useState();
    const [loading, setLoading] = useState(false); // Add loading state
    const { park, lable, name, id, phoneNumber, latauspisteID, sahkonhinta } = route.params;
    const [verificationCode, setVerificationCode] = useState('');
    const inputs = useRef(Array.from({ length: 4 }, () => React.createRef()));

    const handleCodeChange = (index, value) => {
        const newCode = [...verificationCode];
        if (/^\d+$/.test(value) || value === '') {
            newCode[index] = value;
            setVerificationCode(newCode.join(''));
            if (value && index < inputs.current.length - 1) {
                inputs.current[index + 1].current.focus();
            }
        }
    };

    const handleBackspace = (index, event) => {
        if (event.nativeEvent.key === 'Backspace' && index >= 0) {
            const newCode = [...verificationCode];
            newCode[index] = '';
            setVerificationCode(newCode.join(''));
            if (index > 0) {
                inputs.current[index - 1].current.focus();
            }
        }
    };
    const reserveParkingSpot = () => {
        fetch(`http://localhost:3002/sijainnit/reserve/${latauspisteID}`, {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Parking spot reserved successfully:', data);
            })
            .catch(error => console.error('Failed to reserve parking spot:', error));
    };

    const handleContinuePress = () => {
        console.log('Verification Code:', verificationCode);

        if (!verificationCode || !phoneNumber) {
            console.error('Verification code or phone number is missing.');
            return;
        }

        reserveParkingSpot();

        fetch('http://localhost:3002/otp/verify-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "otp": verificationCode, phoneNumber }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Success:', data);
                if (data.message === "approved") {
                    navigator.navigate('Charging', {
                        park,
                        lable,
                        id,
                        latausID,
                        latauspisteID,
                        phoneNumber,
                        sahkonhinta,
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <TouchableWithoutFeedback onPress={
            () => {
                Keyboard.dismiss();
            }
        }>
            <View style={styles.containers}>
                    <View style={styles.codeConfirm}>
                        <Text style={styles.confirmationText}>{t('Confirmation')}</Text>
                        <Text style={styles.headerText}>{name}</Text>
                        <View style={styles.header}>
                            <Text style={styles.additionalText1}>{lable}</Text>
                            <Text style={styles.additionalText}>{park}</Text>
                        </View>
                        <Text style={styles.verificationText}>{t('VerificationSent')}</Text>
                        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
                        <View style={styles.codeInputContainer}>
                            {[0, 1, 2, 3].map((index) => (
                                <TextInput
                                    key={index}
                                    ref={inputs.current[index]}
                                    style={styles.codeInput}
                                    maxLength={1}
                                    value={verificationCode[index]}
                                    keyboardType="phone-pad"
                                    onChangeText={(value) => handleCodeChange(index, value)}
                                    onKeyPress={(event) => handleBackspace(index, event)}
                                />
                            ))}
                        </View>

                        <TouchableOpacity
                            style={styles.continueButton}
                            onPress={handleContinuePress}
                            disabled={verificationCode.length < 4}
                        >
                            <Text style={styles.buttonText}>{t('StartCharging')}</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    );

}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: '#FDF6E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmationText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 55,
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    additionalText: {
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    additionalText1: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    verificationText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 80,
    },
    phoneNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    codeInput: {
        width: 60,
        height: 60,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 200,
        backgroundColor: 'white',

    },
    continueButton: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: -1,
        width: 350,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
});
