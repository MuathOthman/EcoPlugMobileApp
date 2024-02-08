import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {View} from "react-native";

function BackButton() {
    const goBack = () => {
        console.log("Going back");
    }
    return (
        <View>
            <Ionicons style={styles.backButton} name="arrow-back-outline" size={26} color="black" onPress={goBack}/>
        </View>
    );
}

const styles = {
    backButton: {
        position: "absolute",
        top: 40,
        left: 20,
    }
}

export default BackButton;