import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import BackButton from "../Components/BackButton";
import PlugLocation from "../Components/PlugLocation";

export default function SearchPage() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/sijainnit")
            .then(response => response.json())
            .then(data => setLocations(data))
            .catch(error => console.error("Failed to fetch location data:", error));
    }, []);

    return (
        <View style={styles.containers}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <BackButton />
                    <Text style={styles.text}>Charging Stations</Text>
                    <TextInput style={styles.field} placeholder="Search for charging stations"/>
                    {locations.map((loc, index) => (
                        <PlugLocation
                            key={index}  // Ideally, use a unique id from loc if available
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
        padding: 30,
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
        height: 50,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
    },
});
