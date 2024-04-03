import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function BackButton() {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={26} color="black" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 60,
        left: 20,
        zIndex:10000
    }
});

export default BackButton;
