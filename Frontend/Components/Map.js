import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Import Marker from react-native-maps
import * as Location from 'expo-location';
import Navbar from "./Navbar";

export default function MapComponent() {
    const [locations, setLocations] = useState([]); // Changed to an array to hold multiple locations
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0592,
        longitudeDelta: 0.0021,
    });

    useEffect(() => {
        fetch("http://localhost:3000/sijainnit")
            .then(response => response.json())
            .then(data => {
                setLocations(data);
            })
            .catch(error => console.error("Failed to fetch location data:", error));
    }, []);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setRegion(prevRegion => ({
                ...prevRegion,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            }));
        })();
    }, []);

    return (
        <MapView
            style={styles.map}
            region={region}
            showsUserLocation={true}>
            <Navbar />
            {locations.map((loc, index) => (
                <Marker
                    key={index}
                    coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                />
            ))}
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
