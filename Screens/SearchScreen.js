import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BackButton from "../Components/BackButton";
import PlugLocation from "../Components/PlugLocation";

export default function SearchScreen() {
    const [locations, setLocations] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredLocations, setFilteredLocations] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        fetch("http://172.20.10.7:3002/sijainnit")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setLocations(data))
            .catch(error => console.error("Failed to fetch location data:", error));
    }, []);

    const handleSearch = (text) => {
        setSearch(text);
        const filtered = locations.filter(loc =>
            loc.nimi.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredLocations(filtered);
    };

    const navigateToParkingScreen = (location) => {
        navigation.navigate('ParkingScreen', {
            id: location.sijainti_ID,
            name: location.nimi,
        });
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>Charging Stations</Text>
                    <TextInput
                        autoFocus={true}
                        style={styles.field}
                        value={search}
                        placeholder="Search for charging stations"
                        onChangeText={handleSearch}
                    />
                    {filteredLocations.map((loc, index) => (
                        <PlugLocation
                            key={index}
                            name={loc.nimi}
                            address={loc.osoite}
                            postalCode={loc.postinumero}
                            city={loc.kaupunki}
                            onPress={() => navigateToParkingScreen(loc)}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF6E9",
        alignItems: "center",
        justifyContent: "center",
    },
    scrollContainer: {
        width: "100%",
    },
    innerContainer: {
        marginTop: 120,
        width: "100%",
        borderRadius: 40,
        alignItems: 'center',
    },
    text: {
        marginVertical: 20,
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    },
    field: {
        marginVertical: 10,
        padding: 20,
        width: "90%",
        height: 60,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 80,
    },
});
