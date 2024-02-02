import React from "react";
import {StyleSheet,Text, View, Image} from "react-native";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Image
                style={{width: 300, height: 300}}
                source={require('../assets/Logo.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6E9',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
});