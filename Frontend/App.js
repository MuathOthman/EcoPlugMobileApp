// App.js (or your main entry point)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './Components/Map'; // Replace with your actual screen components
import SearchPage from './Pages/SearchPage'; // Replace with your actual screen components
import ParkingScreen from './Components/ParkingScreen'; // Replace with your actual screen components
import ReservationScreen from './Components/Reservation'; // Replace with your actual screen components
import CodeConfirm from "./Components/CodeConfirm";
import Availability from "./Components/Availability";


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Map">
                <Stack.Screen name="Map" component={MapScreen} options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen name="SearchPage" component={SearchPage} options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen name="ParkingScreen" component={ParkingScreen} options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen name="Reservation" component={ReservationScreen}  options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen name={"Verify"} component={CodeConfirm} options={{ tabBarLabel: '', headerShown: false }}
                />
                <Stack.Screen name={"Charging"} component={Availability} options={{ tabBarLabel: '', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
