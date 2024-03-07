import React from 'react';
import {Marker} from "react-native-maps";

export default function MapMarker(latitude, longitude) {
    return (
        <Marker coordinate={{ latitude, longitude }}>
            onPress={() => console.log("Marker pressed")}
        </Marker>
    );
}
