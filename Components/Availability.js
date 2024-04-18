import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome6";
import { useTranslation } from 'react-i18next';
import i18n from "i18next";



const windowWidth = Dimensions.get('window').width;
export default function Availability({ id, name, address, postalCode, city, setIsVisible }) {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [freeCount, setFreeCount] = useState(0);

    const textAlign = i18n.dir() === 'rtl' ? { textAlign: 'right', marginRight: windowWidth * 0.05 } : { textAlign: 'left' };
    const buttonAlign = i18n.dir() === 'rtl' ? { left: windowWidth * 0.05 } : { right: windowWidth * 0.05 };


    useEffect(() => {
        const fetchFreeCount = async () => {
            try {
                const response = await fetch(`http://localhost:3002/sijainnit/specific/${id}`);
                const data = await response.json();
                if (i18n.dir() === 'rtl') {
                    setFreeCount(arabicNumbers(data[0].count));
                } else {
                    setFreeCount(data[0].count);
                }
            } catch (error) {
                console.error("Failed to fetch free count:", error);
            }
        };

        fetchFreeCount();
    }, [id]);

    const arabicNumbers = (number) => {
        if (i18n.dir() === 'rtl') {
            return number.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
        }
        return number;
    };

    const handleButtonPress = () => {
        setIsVisible(false);
        navigation.navigate('ParkingScreen', { id, name });
    };

    const handleClose = () => {
        setIsVisible(false);
        console.log("Closed");
    };

    const countTextColor = freeCount <= 5 ? 'red' : 'green';

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.closeButton, buttonAlign]}
                onPress={handleClose}
            >
                <Text style={[styles.closeButtonText]}>x</Text>
            </TouchableOpacity>
            <Text style={[styles.headerText, textAlign]}>{name}</Text>
            <Text style={[styles.header2Text, textAlign]}>{`${address} ${postalCode} ${city}`}</Text>
            <Text style={styles.header3Text}>{t('Availability')}</Text>
            <View style={styles.innerContainer}>
                <Icon name="charging-station" size={windowWidth * 0.2} color="black" />
                <Text style={[styles.countnumber, { color: countTextColor }]}>{freeCount}</Text>
            </View>
            <TouchableOpacity style={styles.stopChargingButton} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>{t('Continue')}</Text>
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
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    closeButton: {
        position: "absolute",
        borderRadius: 20,
        top: windowWidth * 0.02,
        padding: windowWidth * 0.02,
    },
    closeButtonText: {
        fontSize: windowWidth * 0.09,
        fontWeight: "bold",
        color: "black",
    },
    headerText: {
        zIndex: 110,
        fontSize: windowWidth * 0.08,
        fontWeight: "bold",
        marginBottom: windowWidth * 0.01,
        marginLeft: windowWidth * 0.05,
        marginTop: windowWidth * 0.1,
    },
    header2Text: {
        zIndex: 110,
        fontSize: windowWidth * 0.05,
        fontWeight: "bold",
        marginLeft: windowWidth * 0.05,
        marginBottom: windowWidth * 0.15,
    },
    header3Text: {
        zIndex: 110,
        fontSize: windowWidth * 0.07,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: windowWidth * 0.05,

    },
    stopChargingButton: {
        backgroundColor: 'black',
        paddingVertical: windowWidth * 0.05,
        paddingHorizontal: windowWidth * 0.1,
        borderRadius: windowWidth * 0.1,
        alignItems: 'center',
        marginTop: windowWidth * 0.04,
        width: windowWidth * 0.8,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: windowWidth * 0.05,
    },
    innerContainer: {
        marginLeft: windowWidth * 0.32,
        zIndex: 110,
        top: -windowWidth * 0.015,
        width: windowWidth * 0.85,
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        padding: windowWidth * 0.04,
    },
    countnumber: {
        zIndex: 110,
        fontSize: windowWidth * 0.12,
        fontWeight: 'bold',
        marginLeft: windowWidth * 0.03,
        marginBottom: windowWidth * 0.007,
    },
});
