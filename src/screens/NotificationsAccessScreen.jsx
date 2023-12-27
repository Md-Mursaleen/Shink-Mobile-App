/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    Image, PermissionsAndroid, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { normalize } from '../components/theme';
import ProgressBar from '../components/ProgressBar';

const NotificationsAccessScreen = () => {
    const navigation = useNavigation();

    const handleAllowButtonPressed = async () => {
        if (Platform.OS === 'android') {
            // try {
            //     await PermissionsAndroid.request(
            //         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            //     );
            navigation.navigate('EnterName');
            // } catch (error) {
            //     console.log(error);
            // }
        }
    };

    const buttonTextStyle = {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 23.4,
    };

    return (
        <View style={styles.container}>
            <ProgressBar progress={0.4} navigation={navigation} />
            <Image source={require('../assets/images/notifications-image.png')}
                style={styles.imageStyle} />
            <Text style={styles.titleTextStyle}>Notifications</Text>
            <Text style={styles.subTitleTextStyle}>
                We will notify you when you receive new matches or messages.
            </Text>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity onPress={() => handleAllowButtonPressed()}
                    style={[styles.buttonContainer, { backgroundColor: '#9d4edd' }]}>
                    <Text style={[buttonTextStyle, { color: '#ffffff' }]}>Allow</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EnterName')}
                style={[styles.buttonContainer, { backgroundColor: '#ffffff' }]}>
                <Text style={[buttonTextStyle, { color: '#282C3F' }]}>Not Now</Text>
            </TouchableOpacity>
        </View>
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
        marginTop: normalize(38),
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
        borderRadius: 5,
    },
});

export default NotificationsAccessScreen;
