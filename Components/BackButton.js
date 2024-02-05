import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {View} from "react-native";

function BackButton() {
    const goBack = () => {
        console.log("Going back");
    }
    return (
        <View>
            <Ionicons name="arrow-back-outline" size={26} color="black" onPress={goBack}/>
        </View>
    );
}

export default BackButton;