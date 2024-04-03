// App.js (or your main entry point)
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './Components/Map';
import SearchScreen from './Screens/SearchScreen';
import ParkingScreen from './Screens/ParkingScreen';
import ReservationScreen from './Screens/ReservationScreen';
import CodeConfirmScreen from "./Screens/CodeConfirmScreen";
import ChargingScreen from "./Screens/ChargingScreen";
import WelcomeScreen from './Screens/WelcomeScreen';
import ReceiptScreen from "./Screens/ReceiptScreen";
import {LogBox} from "react-native";
import {I18nextProvider} from "react-i18next";
import i18next from './il8n';




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
        <I18nextProvider i18n={i18next}>
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
        </I18nextProvider>
    );
};

export default App;
