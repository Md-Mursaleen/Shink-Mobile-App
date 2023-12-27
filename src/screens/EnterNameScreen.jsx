/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../components/ProgressBar';

const EnterNameScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');

    const handleNextButtonPressed = () => {
        navigation.navigate('EnterBirthday');
    };

    const buttonTextStyle = {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        lineHeight: 23.4,
        opacity: name !== '' ? 1 : 0.5,
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ProgressBar progress={0.5} />
            <Text style={styles.titleTextStyle}>Enter Your Name</Text>
            <TextInput placeholder="Enter your name"
                placeholderTextColor={'#979797'}
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.textInputStyle} />
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity onPress={() => handleNextButtonPressed()}
                    style={[styles.buttonContainer,
                    { backgroundColor: name ? '#9d4edd' : '#e0e0e0' }]}
                    disabled={!name}>
                    <Text style={buttonTextStyle}>Next</Text>
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
    titleTextStyle: {
        marginTop: 10,
        marginLeft: 16,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
    },
    textInputStyle: {
        padding: 10,
        marginTop: 23,
        width: '91%',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Bold',
        color: '#000000',
        lineHeight: 24,
        borderWidth: 1.6,
        borderColor: '#979797',
        borderRadius: 5,
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

export default EnterNameScreen;
