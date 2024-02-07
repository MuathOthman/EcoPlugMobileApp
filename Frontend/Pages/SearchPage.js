import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList } from "react-native";
import BackButton from "../Components/BackButton";
import PlugLocation from "../Components/PlugLocation";

export default function SearchPage() {
    const [locations, setLocations] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredLocations, setFilteredLocations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/sijainnit")
            .then(response => response.json())
            .then(data => setLocations(data))
            .catch(error => console.error("Failed to fetch location data:", error));
    }, []);

    const handleSearch = (text) => {
        setSearch(text);
        const filtered = locations.filter(loc =>
            loc.nimi.toLowerCase().includes(text.toLowerCase()) // Corrected the return statement in filter
        );
        setFilteredLocations(filtered);
    };

    return (
        <View style={styles.containers}>
            <BackButton />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
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
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: "#FDF6E9",
        alignItems: "center",
        justifyContent: "center",
    },
    scrollContainer: {
        width: "100%",
    },
    container: {
        marginTop: 40,
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
    },
});
