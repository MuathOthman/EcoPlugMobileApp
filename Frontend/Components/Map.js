import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import Type from "./Type";

export default function Map() {
    const mapRef = useRef(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [locations, setLocations] = useState([]);
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0592,
        longitudeDelta: 0.0021,
    });
    const [isTypeVisible, setIsTypeVisible] = useState(true); // New state for Type visibility

    const pressHandler = (loc) => {
        console.log("Marker pressed");
        console.log(loc);
        setSelectedLocation(loc);
        setIsTypeVisible(true); // Set Type visibility to true when a marker is pressed
        const newRegion = {
            latitude: loc.latitude - 0.0005,
            longitude: loc.longitude,
            latitudeDelta: 0.0032,
            longitudeDelta: 0.0021,
        };
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
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                ref={mapRef}
                mapType={'satellite'}
                style={styles.map}
                region={region}
                showsUserLocation={true}
            >
                {locations.map((loc, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                        onPress={() => pressHandler(loc)}
                    >
                        <Image
                            source={require('../assets/Green_Dot.png')}
                            style={{ width: 20, height: 20 }}
                            resizeMode="contain"
                        />
                    </Marker>
                ))}
            </MapView>
            {selectedLocation && isTypeVisible && (
                <Type
                    name={selectedLocation.nimi}
                    address={selectedLocation.osoite}
                    city={selectedLocation.kaupunki}
                    postalCode={selectedLocation.postinumero}
                    setIsVisible={setIsTypeVisible} // Pass setIsVisible to Type component
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
    },
    map: {
        flex: 1,
    },
});
