import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function PlugSpace({ selectedLocation }) {
    const [freeCount, setFreeCount] = useState(0);

    useEffect(() => {
        const fetchFreeCount = async () => {
            try {
                const response = await fetch(`http://localhost:3000/sijainnit/${encodeURIComponent(selectedLocation.nimi)}`);
                const data = await response.json();
                const count = data[3];
                console.log(selectedLocation.nimi)
                setFreeCount(count);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (selectedLocation) {
            fetchFreeCount();
        }
    }, [selectedLocation]);

    return (
        <View style={styles.innerContainer}>
            <Icon name="charging-station" size={45} color="black" />
            <Text style={styles.header}>{freeCount}</Text>
        </View>
    );
}

// Define your styles here
const styles = StyleSheet.create({
    innerContainer: {
        marginLeft: 142,
        zIndex: 110,
        top: -10.5,
        width: 430,
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    textContainer: {
        zIndex: 110,
        flex: 1,
    },
    header: {
        zIndex: 110,
        fontSize: 51,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 1,
        color: 'green',
    },
    smallText: {
        zIndex: 110,
        fontSize: 18,
        marginLeft: 20,
        color: 'gray',
    },
});
