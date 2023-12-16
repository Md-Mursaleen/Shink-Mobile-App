/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const FlagTypeSelectionScreen = ({ route }) => {
    const navigation = useNavigation();
    const [greenFlagButtonPressed, setGreenFlagButtonPressed] = useState(false);
    const [redFlagButtonPressed, setRedFlagButtonPressed] = useState(false);
    const { setIsGreenFlagModalOpened, setIsRedFlagModalOpened } = route?.params;
    useEffect(() => {
        if (redFlagButtonPressed === true) {
            setIsRedFlagModalOpened(true);
        }
        if (greenFlagButtonPressed === true) {
            setIsGreenFlagModalOpened(true);
        }

    }, [greenFlagButtonPressed, redFlagButtonPressed,
        setIsGreenFlagModalOpened, setIsRedFlagModalOpened]);

    const onGreenFlagButtonPressed = () => {
        setGreenFlagButtonPressed(true);
        navigation.goBack();
    };

    const onRedFlagButtonPressed = () => {
        setRedFlagButtonPressed(true);
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../assets/images/background-image.png')}
                style={styles.imageStyle} />
            <Image source={require('../assets/images/user-image.png')}
                style={styles.userImageStyle} />
            <Text style={styles.titleTextStyle}>Red Flags and Green Flags</Text>
            <View style={styles.flagButtonsContainer}>
                <Pressable style={[styles.flagButtonContainer, { borderColor: '#34a853' }]}
                    onPress={() => onGreenFlagButtonPressed()}>
                    <View style={styles.flagButtonSubContainer}>
                        <Image source={require('../assets/images/green-flag.png')}
                            style={{ resizeMode: 'contain' }} />
                        <Text style={styles.textStyle}>Green Flags</Text>
                    </View>
                    <Entypo name="chevron-small-right" size={25} color={'#cfd3d6'} />
                </Pressable>
                <Pressable style={[styles.flagButtonContainer, { borderColor: '#eb4335' }]}
                    onPress={() => onRedFlagButtonPressed()}>
                    <View style={styles.flagButtonSubContainer}>
                        <Image source={require('../assets/images/red-flag.png')}
                            style={{ resizeMode: 'contain' }} />
                        <Text style={styles.textStyle}>Red Flags</Text>
                    </View>
                    <Entypo name="chevron-small-right" size={25} color={'#cfd3d6'} />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    userImageStyle: {
        position: 'absolute',
        marginTop: '30%',
        width: 80,
        height: 80,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    titleTextStyle: {
        position: 'absolute',
        marginTop: '66%',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Regular',
        color: '#ffffff',
        lineHeight: 21,
    },
    flagButtonsContainer: {
        position: 'absolute',
        marginTop: '88%',
        width: '91%',
        alignSelf: 'center',
    },
    flagButtonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginVertical: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 8,
    },
    flagButtonSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        marginLeft: 9,
        fontSize: 12.5,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#000000',
        lineHeight: 16,
    },
});

export default FlagTypeSelectionScreen;
