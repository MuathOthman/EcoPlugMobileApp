import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function PlugLocation() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Icon name="charging-station" size={45} color="black" />
                <View style={styles.textContainer}>
                    <Text style={styles.header}>Sellon Parkki</Text>
                    <Text style={styles.smallText}>Hevosenkenkä 4, 02600 Espoo</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6E9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        backgroundColor:"white",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    textContainer: {
        flex: 1,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 1,
    },
    smallText: {
        fontSize: 18,
        marginLeft: 20,
        color: 'gray',
    },
});
