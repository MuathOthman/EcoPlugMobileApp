import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import BackButton from "./BackButton";

export default function ParkingScreen() {
    return (
        <View style={styles.container}>
                <BackButton />
            <Text style={styles.headerText}>Sellon Parkki</Text>
            <Text style={styles.header2Text}>Hevosenkenkä 4, 02600 Espoo</Text>
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
        ['     A502','B509     '],
        ['     A503','B510     '],
        ['     A504','B511     '],
        ['     A505','B512     '],
        ['     A506','B513     '],
        ['     A507','B514     '],
        ['     A508','B515     '],
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
    headerText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 1,
        marginLeft: 20,
        marginTop: 20,
    },
    header2Text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 30,
    },
    subText: {
        textAlign: "center",
        fontSize: 20,
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