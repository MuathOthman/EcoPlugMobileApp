import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from './BackButton';
import { useRoute } from '@react-navigation/native';  // Import useRoute hook

export default function ParkingScreen() {
    const route = useRoute();  // Use useRoute hook to get route object
    const { id } = route.params;  // Extract id from route parameters
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
            return (
                <View style={styles.cellContainer}>
                    <Text style={styles.cellTypeText}>{parkingTypeLabel}</Text>
                    <Text style={[styles.cellText, { color: textColor }]}>
                        {parking.parkki}
                    </Text>
                </View>
            );
        }

        return null;
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.subText}>CHOOSE AVAILABLE PARKING</Text>
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
