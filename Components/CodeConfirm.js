import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import BackButton from "../Components/BackButton";

export default function CodeConfirm() {
    return (
        <View style={styles.containers}>
        <View style={styles.codeConfirm}>
            <BackButton />

            {/* Confirmation Text */}
            <Text style={styles.confirmationText}>Confirmation</Text>

            {/* Main Header */}
            <Text style={styles.headerText}>Sellon Parkki</Text>

            {/* Header */}
            <View style={styles.header}>
                {/* Additional Text Elements */}
                <Text style={styles.additionalText}>Myllypurontie 5 C</Text>
                <Text style={styles.additionalText}>1234</Text>
                <Text style={styles.chargeId}>ABCD</Text>

            </View>

            {/* Verification Text */}
            <Text style={styles.verificationText}>Verification code was sent to</Text>

            {/* Phone Number Display */}
            <Text style={styles.phoneNumber}>+358 123456789</Text>

            {/* Code Input */}
            <View style={styles.codeInputContainer}>
                <TextInput
                    style={styles.codeInput}
                    maxLength={1}
                />
                <TextInput
                    style={styles.codeInput}
                    maxLength={1}
                />
                <TextInput
                    style={styles.codeInput}
                    maxLength={1}
                />
                <TextInput
                    style={styles.codeInput}
                    maxLength={1}
                />
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
        </View>
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
    chargeId: {
        fontSize: 20,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'green',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    verificationText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 100,

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
        marginTop: -10,
        marginBottom: 200,
        backgroundColor: 'white',

    },
    continueButton: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 210,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    codeConfirm: {
        marginTop: 240,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
});