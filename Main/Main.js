import React from "react";
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import Navbar from "../Navigation/Navbar";

export default function Main() {
    return (
        <MapView style={styles.map} /> &&
        <Navbar />
    );
}

const styles = StyleSheet.create({
    map: {
        zIndex: 1,
        width: '100%',
        height: '100%',
    },
});