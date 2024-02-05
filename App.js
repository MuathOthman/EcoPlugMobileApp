import {StyleSheet, View, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from "react";
import WelcomePage from "./Pages/WelcomePage";
import Reservation from "./Components/Reservation";
import MapView from "react-native-maps";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import SearchPage from "./Pages/SearchPage";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setShowWelcome(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, [fadeAnim]);

  return (
      <View style={styles.container}>
        {showWelcome && (
            <Animated.View style={[styles.fadeContainer, {opacity: fadeAnim}]}>
              <WelcomePage />
            </Animated.View>
        )}
        {!showWelcome &&
            //<Map />
            //<SearchPage />
            <Reservation />
        }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadeContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
