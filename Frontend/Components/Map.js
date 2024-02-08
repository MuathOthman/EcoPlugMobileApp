import React, {useEffect, useRef, useState} from "react";
import {Image, StyleSheet} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // Import Marker from react-native-maps
import * as Location from 'expo-location';
import Navbar from "./Navbar";
import Type from "./Type";
import {useNavigation} from "@react-navigation/native";

export default function MapComponent() {
    const mapRef = useRef(null);
    const [navbar, setNavbar] = useState(true); // Changed to a boolean to hold the state of the Navbar component
    const [selectedLocation, setSelectedLocation] = useState(null); // Changed to a single location to hold the selected location
    const [locations, setLocations] = useState([]); // Changed to an array to hold multiple locations
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0592,
        longitudeDelta: 0.0021,
    });

    const pressHandler = (loc) => {
        console.log("Marker pressed");
        console.log(loc);
        setSelectedLocation(loc);
        setNavbar(!navbar)
        const newRegion = {
            latitude: loc.latitude - 0.0005,
            longitude: loc.longitude,
            latitudeDelta: 0.0032,
            longitudeDelta: 0.0021,
        }
        mapRef.current?.animateToRegion(newRegion, 1000);
    };

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
            provider={PROVIDER_GOOGLE}
            ref={mapRef}
            mapType={'satellite'}
            style={styles.map}
            region={region}
            showsUserLocation={true}>
            {!navbar && <Type name={selectedLocation.nimi} address={selectedLocation.osoite} city={selectedLocation.kaupunki} postalCode={selectedLocation.postinumero}/>}
            {locations.map((loc, index) => (
                <Marker
                    key={index}
                    coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                    onPress={() => pressHandler(loc)}>
                    <Image
                        source={require('../assets/Green_Dot.png')}
                        style={{ width: 20, height: 20 }} // Set the desired size here
                        resizeMode="contain">
                    </Image>
                </Marker>
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
