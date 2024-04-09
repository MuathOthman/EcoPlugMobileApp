import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BackButton from "../Components/BackButton";
import PlugLocation from "../Components/PlugLocation";
import { useTranslation } from 'react-i18next';
import i18n from "i18next";


export default function SearchScreen() {
    const { t } = useTranslation();
    const [locations, setLocations] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredLocations, setFilteredLocations] = useState([]);

    const navigation = useNavigation();

    const textAlign = i18n.dir() === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' };

    useEffect(() => {
        fetch("http://localhost:3000/sijainnit")
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
                    <Text style={styles.text}>{t('ChargingStations')}</Text>
                    <TextInput
                        autoFocus={true}
                        style={[styles.field, textAlign]}
                        value={search}
                        placeholder={t('SearchChargingStations')}
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
