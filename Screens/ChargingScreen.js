import React, { useEffect, useState, useMemo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import ConfirmationPopup from '../Components/ConfirmationPopup';

export default function ChargingScreen() {
    const route = useRoute();
    const navigator = useNavigation();
    const { park, lable, latauspisteID, phoneNumber, sahkonhinta } = route.params;

    const [latausID, setLatausID] = useState(null);
    const [chargingTime, setChargingTime] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [randomPercentage, setRandomPercentage] = useState(0);
    const [isConfirmationModalVisible, setIsConfirmationModalVisible] = useState(false);

    useEffect(() => {
        const fetchLatausID = async () => {
            try {
                const response = await fetch('http://172.20.10.7:3002/user/get-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        phoneNumber,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch latausID');
                }

                const data = await response.json();

                const kokonaisaika = Number(data.kokonaisaika);

                if (!isNaN(kokonaisaika)) {
                    setChargingTime(kokonaisaika);
                } else if (data.kokonaisaika !== null && data.kokonaisaika !== undefined) {
                    console.warn('Invalid value for charging time:', data.kokonaisaika);
                }

                setLatausID(data.latausId);

                let costPerMinute;
                if (sahkonhinta === 0.22) {
                    costPerMinute = (sahkonhinta * 12) / 60;
                } else if (sahkonhinta === 0.5) {
                    costPerMinute = (sahkonhinta * 50) / 60;
                } else {
                    costPerMinute = 0;
                }

                setTotalCost((costPerMinute * Math.floor(chargingTime / 60)).toFixed(2));

                const timerInterval = setInterval(() => {
                    setChargingTime(prevTime => prevTime + 60);
                    setTotalCost(prevCost => (parseFloat(prevCost) + costPerMinute).toFixed(2));
                }, 60000);

                return () => clearInterval(timerInterval);
            } catch (error) {
                console.error('Error fetching latausID:', error);
            }
        };

        fetchLatausID();
    }, [phoneNumber, sahkonhinta]);



    const setReserved = (fetchedLatausID) => {
        if (fetchedLatausID) {
            fetch('http://172.20.10.7:3002/charging/start-charging', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    latauspisteID,
                    latausID: fetchedLatausID,
                }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to start charging');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('ChargingScreen started successfully:', data);
                })
                .catch(error => {
                    console.error('Error starting charging:', error);
                });
        } else {
            console.warn('LatausID is not available yet.');
        }
    };

    const startTimer = () => {
        const timerInterval = setInterval(() => {
            setChargingTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(timerInterval);
    };

    const stopCharging = () => {
        setIsConfirmationModalVisible(true);
    };

    const handleConfirmStopCharging = async () => {
        try {
            const chargingTimeInMinutes = Math.floor(chargingTime / 60);

            await fetch('http://172.20.10.7:3002/user/update-user', {
             method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                 },
              body: JSON.stringify({
                  latausID,
                  chargingTime,
                  totalCost,
                  phoneNumber,
               }),
             });

            await fetch('http://172.20.10.7:3002/user/free-latauspiste', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    latauspisteID,
                }),
            });

            setIsConfirmationModalVisible(false);
            console.log(latausID, chargingTime, totalCost);
            navigator.navigate('Receipt', { chargingTime: chargingTimeInMinutes, totalCost });
        } catch (error) {
            console.error('Error stopping charging:', error);
        }
    };

    const randomColor = useMemo(() => {
        if (typeof randomPercentage === 'number') {
            return randomPercentage < 40 ? '#EF0107' : randomPercentage < 60 ? 'yellow' : '#03C03C';
        }
        return 'black';
    }, [randomPercentage]);


    const handleCancelStopCharging = () => {
        setIsConfirmationModalVisible(false);
    };

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    };

    useEffect(() => {
        const newRandomPercentage = Math.floor(Math.random() * 80) + 1;
        setRandomPercentage(newRandomPercentage);
    }, [phoneNumber]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{t('CHARGING')}</Text>
            <View style={styles.whiteBox}>
                <Text style={styles.nameText}>{lable}</Text>
                <Text style={styles.name1Text}>{park}</Text>
                <View style={styles.progressCircle}>
                    <View
                        style={[
                            styles.innerCircle,
                            {
                                height: `${randomPercentage}%`,
                                width: '100%',
                                backgroundColor: randomColor,
                            },
                        ]}
                    />
                    <Ionicons name="flash-sharp" size={40} color="black" style={styles.lightningIcon} />
                    <Text style={styles.circleText}>{`${randomPercentage}%`}</Text>
                    <Text style={styles.additionalText}>{`${sahkonhinta * 100}kW`}</Text>
                </View>
                <Text style={styles.bottomText}>{t('BeingCharged')}</Text>
            </View>
            <View style={styles.smallBoxesContainer}>
                <View style={styles.smallBox1}>
                    <Text style={styles.smallBoxText}>{formatTime(chargingTime)}</Text>
                    <Text style={styles.smallBox1SubText}>{t('SinceStarted')}</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.smallBox2}>
                    <Text style={styles.smallBox2Text}>{totalCost ? `${totalCost}€` : '0€'}</Text>
                    <Text style={styles.smallBox2SubText}>{t('TotalCost')}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.StopChargingButton} onPress={stopCharging}>
                <Text style={styles.buttonText}>{t('STOPCHARGING')}</Text>
            </TouchableOpacity>
            <ConfirmationPopup
                visible={isConfirmationModalVisible}
                onConfirm={handleConfirmStopCharging}
                onCancel={handleCancelStopCharging}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6E9',
        alignItems: 'center',
        paddingTop: 90,
    },
    text: {
        fontSize: 29,
        fontWeight: '700',
        marginBottom: 20,
    },
    whiteBox: {
        width: 350,
        height: "auto",
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameText: {
        fontSize: 35,
        fontWeight: '800',
        marginTop: 30,
    },
    name1Text: {
        fontSize: 35,
        fontWeight: '800',
        marginBottom: 25,
    },
    progressCircle: {
        width: 220,
        height: 220,
        borderRadius: 150,
        borderWidth: 7,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    innerCircle: {
        position: 'absolute',
        borderRadius: 10,
        bottom: 0,
        top: 'auto',
    },
    circleText: {
        fontSize: 45,
        fontWeight: '800',
        zIndex: 1,
    },
    lightningIcon: {
        marginTop: 0,
        marginBottom: 10,
        zIndex: 2,
    },
    additionalText: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold"
    },
    bottomText: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20,
        fontWeight: '700'
    },
    smallBoxesContainer: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 10,
    },
    smallBox1: {
        width: 170,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    smallBox2: {
        width: 170,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    separator: {
        width: 15,
    },
    smallBoxText: {
        fontSize: 40,
        fontWeight: '900',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 20,
    },
    smallBox2Text: {
        fontSize: 40,
        fontWeight: '900',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 20,
    },
    smallBox2SubText: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'left',
        textAlignVertical: 'center',
        marginTop: 15,
        marginLeft: 20,
    },
    smallBox1SubText: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'left',
        textAlignVertical: 'center',
        marginTop: 15,
        marginLeft: 25,
    },
    StopChargingButton: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 14,
        width: 350,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
});