import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BackButton from "./BackButton";

export default function ParkingScreen({ id }) {
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
        if (parkings[rowIndex] && parkings[rowIndex][colIndex]) {
            return parkings[rowIndex][colIndex].parkki + ' ' + parkings[rowIndex][colIndex].tila;
        }
        return '';
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.subText}>CHOOSE AVAILABLE PARKING</Text>
            <View style={styles.tableContainer}>
                {[...Array(8)].map((_, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        <View style={styles.tableRow}>
                            <View style={styles.columnItem}>
                                <Text style={[styles.cellText]}>
                                    {getCellText(rowIndex, 0)}
                                </Text>
                            </View>
                            <View style={styles.columnSeparator}/>
                            <View style={styles.columnItem}>
                                <Text style={[styles.cellText]}>
                                    {getCellText(rowIndex, 1)}
                                </Text>
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
        marginBottom: 5,
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
        paddingVertical: 10,
    },
    columnSeparator: {
        height: '200%',
        width: 4,
        backgroundColor: 'black',
    },
    rowSeparator: {
        height: 4,
        width: '80%',
        backgroundColor: 'black',
        marginVertical: 5,
    },
    cellText: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: 0,
        color: 'green',
    },
});
