import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import BackButton from "./BackButton";

export default function ParkingScreen({id, name, address, zipcode, city}) {
    const [parkings, setParkings] = useState(0);
    const fetchFreeCount = async () => {
        try {
            const response = await fetch(`http://localhost:3000/sijainnit/parkings/${id}`);
            const data = await response.json();
            setParkings(data);
        }
        catch (error) {
            console.error("Failed to fetch free count:", error);
        }
    }

    fetchFreeCount();
    return (
        <View style={styles.container}>
                <BackButton />
            <Text style={styles.subText}>CHOOSE AVAILABLE PARKING</Text>
            <View style={styles.tableContainer}>
                {[...Array(8)].map((_, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        <View style={styles.tableRow}>
                            <View style={styles.columnItem}>
                                <Text style={[styles.cellText, {color: getCellTextColor(rowIndex, 0)}]}>
                                    {getCellText(rowIndex, 0)}
                                </Text>
                            </View>
                            <View style={styles.columnSeparator}/>
                            <View style={styles.columnItem}>
                                <Text style={[styles.cellText, {color: getCellTextColor(rowIndex, 1)}]}>
                                    {getCellText(rowIndex, 1)}
                                </Text>
                            </View>
                        </View>
                        {rowIndex < 8 && <View style={styles.rowSeparator} />}
                    </React.Fragment>
                ))}
            </View>
        </View>
    );
}

const getCellText = (rowIndex, colIndex) => {
    const cellTexts = [
        ['', ''],
        [`     ${"A502"}`,'B509     '],
        [`     ${"A502"}`,'B510     '],
        [`     ${"A502"}`,'B511     '],
        [`     ${"A502"}`,'B512     '],
        [`     ${"A502"}`,'B513     '],
        [`     ${"A502"}`,'B514     '],
        [`     ${"A502"}`,'B515     '],
    ];
    return cellTexts[rowIndex][colIndex];
};
const getCellTextColor = (rowIndex, colIndex) => {
    const cellTextColors = [
        ['', ''],
        ['green', 'red'],
        ['red', 'red'],
        ['red', 'red'],
        ['green', 'red'],
        ['green', 'green'],
        ['red', 'green'],
        ['red', 'red'],
    ];
    return cellTextColors[rowIndex][colIndex];
};

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
        margin:0,
        color: 'green',
    },
});