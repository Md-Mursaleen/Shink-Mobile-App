/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Alert,
    Image, PermissionsAndroid, KeyboardAvoidingView,
} from 'react-native';
import { normalize } from '../components/theme';
import { useNavigation } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import ProgressBar from '../components/ProgressBar';

const LocationAccessScreen = () => {
    const navigation = useNavigation();
    const handleNextButtonPressed = async (type) => {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            ]);
            if (
                granted['android.permission.ACCESS_FINE_LOCATION'] ===
                PermissionsAndroid.RESULTS.GRANTED &&
                granted['android.permission.ACCESS_COARSE_LOCATION'] ===
                PermissionsAndroid.RESULTS.GRANTED
            ) {
                Geolocation.getCurrentPosition(
                    (position) => {
                        console.log('Your Location Data:', position);
                        const location = String(position);
                        navigation.navigate('NotificationsAccess', { location: location });
                    },
                    (error) => {
                        console.log('Location Error:', error);
                        Alert.alert('Error getting location');
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            } else {
                console.log('Location permission denied');
                Alert.alert('Shink needs your location to connect you to nearby Shinkers');
            }
        } catch (error) {
            console.warn(error);
        }
    };

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You have the access to the camera');
            } else {
                console.log('camera access denied');
            }
        } catch (error) {
            console.warn(error);
        }
    };

    const buttonTextStyle = {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        lineHeight: 23.4,
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ProgressBar progress={0.3} navigation={navigation} />
            <Image source={require('../assets/images/location-image.png')}
                style={styles.imageStyle} />
            <Text style={styles.titleTextStyle}>Set your location</Text>
            <Text style={styles.subTitleTextStyle}>
                We use your location to connect you to nearby Shinkers
            </Text>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity onPress={() => handleNextButtonPressed()}
                    style={styles.buttonContainer}>
                    <Text style={buttonTextStyle}>Allow</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    imageStyle: {
        marginTop: 10,
        width: 56,
        height: 56,
        alignSelf: 'center',
    },
    titleTextStyle: {
        marginTop: normalize(40),
        marginLeft: 16,
        fontSize: normalize(32),
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
    },
    subTitleTextStyle: {
        marginTop: normalize(14),
        marginLeft: 16,
        fontSize: normalize(14),
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#354E66',
        textAlign: 'left',
        lineHeight: 21,
    },
    bottomButtonContainer: {
        paddingHorizontal: 20,
        marginTop: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        padding: 13,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9d4edd',
        borderRadius: 5,
    },
});
export default LocationAccessScreen;
