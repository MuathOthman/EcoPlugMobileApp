import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BackButton() {
    const navigation = useNavigation();

    const goBack = () => {
        console.log("Going back");
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
        top: 80,
        left: 40
    }
});

export default BackButton;
