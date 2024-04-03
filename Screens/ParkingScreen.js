import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackButton from '../Components/BackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export default function ParkingScreen() {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const route = useRoute();
    const { id, name } = route.params;
    const [parkings, setParkings] = useState([]);

    useEffect(() => {
        const fetchParkings = async () => {
            try {
                const response = await fetch(`http://localhost:3000/sijainnit/parkings/${id}`);
                const data = await response.json();
                setParkings(data);
                console.log(data);
            } catch (error) {
                console.error("Failed to fetch parkings:", error);
            }
        };

        fetchParkings();
    }, [id]);

    const getCellText = (rowIndex, colIndex) => {
        const parkingIndex = rowIndex * 2 + colIndex;
        const parking = parkings[parkingIndex];

        if (parking) {
            const textColor = parking.tila === 0 ? 'green' : 'red';
            const parkingTypeLabel = colIndex === 0 ? 'Type 2' : 'CCS';

            const handlePress = () => {
                if (parking.tila !== 1) {
                    navigation.navigate('Reservation', {
                        id: id,
                        park: parking.parkki,
                        lable: parkingTypeLabel,
                        name: name,
                        sahkonhinta: parking.sahkonhinta,
                        latauspisteID: parking.latauspisteID,
                    });
                }
            };

            return (
                <TouchableOpacity
                    onPress={handlePress}
                    key={parkingIndex}
                    disabled={parking.tila === 1}
                >
                    <View style={styles.cellContainer}>
                        <Text style={styles.cellTypeText}>{parkingTypeLabel}</Text>
                        <Text style={[styles.cellText, { color: textColor }]}>
                            {parking.parkki}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }

        return null;
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.subText}>{t('AvailableParking')}</Text>
            <View style={styles.tableContainer}>
                {[...Array(9)].map((_, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        <View style={styles.tableRow}>
                            <View style={styles.columnItem}>
                                {getCellText(rowIndex, 0)}
                            </View>
                            <View style={styles.columnSeparator}/>
                            <View style={styles.columnItem}>
                                {getCellText(rowIndex, 1)}
                            </View>
                        </View>
                        {rowIndex < 7 && <View style={styles.rowSeparator} />}
                    </React.Fragment>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6E9',
        justifyContent: 'center',
    },
    subText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 60,
    },
    tableContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    columnItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
    },
    columnSeparator: {
        height: '100%',
        width: 4,
        backgroundColor: 'black',
    },
    rowSeparator: {
        height: 4,
        width: '80%',
        backgroundColor: 'black',
        marginVertical: 5,
    },
    cellContainer: {
        alignItems: 'center',
    },
    cellTypeText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    cellText: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: 0,
    },
});
