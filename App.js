import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomePage from "./Pages/WelcomePage";
import SearchPage from "./Pages/SearchPage";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import Reservation from "./Components/Reservation";
import CodeConfirm from "./Components/CodeConfirm";
import Availability from "./Components/Availability";

const Tab = createBottomTabNavigator();

export default function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
            <NavigationContainer>
                {showWelcome ? (
                    <WelcomePage />
                ) : (
                    <Tab.Navigator tabBar={(props) => <Navbar {...props} />}>
                        <Tab.Screen
                            name="Home"
                            component={Map}
                            options={{ tabBarLabel: '', headerShown: false }}
                        />
                        <Tab.Screen
                            name="CarSport"
                            component={SearchPage}
                            options={{ tabBarLabel: '', headerShown: false }}
                        />
                        <Tab.Screen
                            name="Reservation"
                            component={CodeConfirm}
                            options={{ tabBarLabel: '', headerShown: false }}
                        />
                        <Tab.Screen
                            name="Availability"
                            component={Availability}
                            options={{ tabBarLabel: '', headerShown: false }}
                        />
                    </Tab.Navigator>
                )}
            </NavigationContainer>
    );
}


