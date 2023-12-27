/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { normalize } from '../components/theme';
import { getCurrentUser, signInWithRedirect, signOut } from 'aws-amplify/auth';
import { Hub } from '@aws-amplify/core';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [customState, setCustomState] = useState(null);

    useEffect(() => {
        const unsubscribe = Hub.listen('auth', ({ payload }) => {
            console.log(payload);
            switch (payload.event) {
                case 'signInWithRedirect':
                    getUser();
                    break;
                case 'signInWithRedirect_failure':
                    setError('An error has ocurred during the OAuth flow.');
                    break;
                case 'customOAuthState':
                    setCustomState(payload.data); // this is the customState provided on signInWithRedirect function
                    break;
            }
        });
        getUser();
        return unsubscribe;
    }, []);

    const getUser = async () => {
        try {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
            console.log('User: ', currentUser);
            navigation.navigate('EnterPhoneNumber');
        } catch (err) {
            console.log('Not signed in');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/shink-logo.png')}
                style={styles.shinkLogoImageStyle} />
            <Text style={styles.titleTextStyle}>Date Safe</Text>
            <View style={styles.SignInOptionsContainer}>
                <TouchableOpacity style={styles.SignInOptionContainer}>
                    <Image source={require('../assets/phone-logo.png')}
                        style={styles.SignInLogoImageStyle} />
                    <Text style={styles.SignInOptionTextStyle}>Sign in with Phone Number</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SignInOptionContainer}
                    onPress={() => signInWithRedirect({
                        provider: 'Google',
                    })}>
                    <Image source={require('../assets/google-logo.png')}
                        style={styles.SignInLogoImageStyle} />
                    <Text style={styles.SignInOptionTextStyle}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SignInOptionContainer}
                    onPress={() => signInWithRedirect({
                        provider: 'Facebook',
                    })}>
                    <Image source={require('../assets/facebook-logo.png')}
                        style={styles.SignInLogoImageStyle} />
                    <Text style={styles.SignInOptionTextStyle}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.textStyle}>
                    By choosing “Sign In” or “Create Account” you agree to our {''}
                    <Text style={styles.subTextStyle}>Terms of Service</Text>.
                    Learn about how we handle your data in our {''}
                    <Text style={styles.subTextStyle}>Privacy Policy</Text> and {''}
                    <Text style={styles.subTextStyle}>Cookies Policy</Text>.
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    shinkLogoImageStyle: {
        marginTop: normalize(60),
        width: normalize(218),
        height: normalize(218),
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    titleTextStyle: {
        marginTop: normalize(32),
        fontSize: normalize(28),
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#7b337e',
        textAlign: 'center',
        lineHeight: 40,
    },
    SignInOptionsContainer: {
        marginTop: normalize(70),
        width: '100%',
        alignItems: 'center',
    },
    SignInOptionContainer: {
        paddingVertical: normalize(12),
        paddingHorizontal: 16,
        marginTop: normalize(12),
        width: normalize(340),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eef1f8',
        borderRadius: normalize(5),
    },
    SignInLogoImageStyle: {
        marginRight: normalize(12.5),
        width: normalize(22),
        height: normalize(22),
    },
    SignInOptionTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#757575',
        lineHeight: 22,
    },
    textStyle: {
        marginTop: normalize(30),
        width: normalize(290),
        fontSize: normalize(12),
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#959595',
        textAlign: 'justify',
        lineHeight: 18,
    },
    subTextStyle: {
        fontSize: normalize(12),
        fontWeight: '500',
        fontFamily: 'AvenirNext-Bold',
        color: '#59a0ff',
        textDecorationLine: 'underline',
        lineHeight: 18,
        overflow: 'hidden',
    },
});

export default LoginScreen;
