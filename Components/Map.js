import React, { useEffect, useState } from "react";
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import Navbar from "./Navbar";

export default function Map() {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0092,
        longitudeDelta: 0.0021,
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
            setRegion({
                ...region,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        })();
    }, []);

    return (
        <MapView
            style={styles.map}
            region={region}
            showsUserLocation={true}>
            <Navbar/>
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
