import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export default function WelcomePage() {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 2000);

        return () => clearTimeout(timer);
    }, [fadeAnim]);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <Image
                style={{ width: 300, height: 300 }}
                source={require("../assets/Logo.png")}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF6E9",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
});
