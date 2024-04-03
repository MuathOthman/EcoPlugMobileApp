import React from "react";
import {StyleSheet,Text, View, TextInput} from "react-native";
import { useTranslation } from 'react-i18next';


export default function Navbar() {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "space-between"}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    placeholder={t('Search')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 100,
        position: 'absolute',
        top: 110,
        backgroundColor: "white",
        padding: 30,
        width: "90%",
        height: 50,
        borderRadius: 40,
        alignSelf: 'center',
        borderColor: "black",
        borderWidth: 0.5,
    },
    text: {
        color: "black",
        fontSize: 25,
    },
});