// App.js (or your main entry point)
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './Components/Map'; // Replace with your actual screen components
import SearchScreen from './Screens/SearchScreen'; // Replace with your actual screen components
import ParkingScreen from './Screens/ParkingScreen'; // Replace with your actual screen components
import ReservationScreen from './Screens/ReservationScreen'; // Replace with your actual screen components
import CodeConfirmScreen from "./Screens/CodeConfirmScreen";
import ChargingScreen from "./Screens/ChargingScreen";
import WelcomeScreen from './Screens/WelcomeScreen';
import ReceiptScreen from "./Screens/ReceiptScreen";
import {LogBox} from "react-native";



const Stack = createStackNavigator();
LogBox.ignoreAllLogs(true);

const App = () => {
    const [showWelcomePage, setShowWelcomePage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomePage(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={showWelcomePage ? 'Welcome' : 'Map'}>
                {showWelcomePage && (
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{ headerShown: false }}
                    />
                )}
                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen
                    name="SearchPage"
                    component={SearchScreen}
                    options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen
                    name="Receipt"
                    component={ReceiptScreen}
                    options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen
                    name="ParkingScreen"
                    component={ParkingScreen}
                    options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen
                    name="Reservation"
                    component={ReservationScreen}
                    options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen
                    name="Verify"
                    component={CodeConfirmScreen}
                    options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen
                    name="Charging"
                    component={ChargingScreen}
                    options={{ tabBarLabel: '', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
