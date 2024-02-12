// App.js (or your main entry point)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './Components/Map'; // Replace with your actual screen components
import AvailabilityScreen from './Pages/SearchPage'; // Replace with your actual screen components
import ParkingScreen from './Components/ParkingScreen'; // Replace with your actual screen components
import ReservationScreen from './Components/Reservation'; // Replace with your actual screen components
import Navbar from './Components/Navbar';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Map">
                <Stack.Screen name="Map" component={MapScreen} options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen name="Availability" component={AvailabilityScreen} options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen name="ParkingScreen" component={ParkingScreen} options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen name="Reservation" component={ReservationScreen}  options={{ tabBarLabel: '', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;