import React from "react";
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import Navbar from "../Navigation/Navbar";


export default function Main() {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
            latitude: 60.223590,
            longitude: 25.067770,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>
        <Navbar />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        zIndex: 1,
        width: '100%',
        height: '100%',
    },
});