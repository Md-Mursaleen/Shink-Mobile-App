/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Modal,
    TextInput, KeyboardAvoidingView, Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { normalize } from '../components/theme';
import ProgressBar from '../components/ProgressBar';

const EnterBirthdayScreen = () => {
    const navigation = useNavigation();
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [borderColor, setBorderColor] = useState('#979797');

    useEffect(() => {
        if (showPopup) {
            Keyboard.dismiss();
        }
    }, [showPopup]);

    const handleConfirmButtonPressed = () => {
        setShowPopup(false);
        if (age < 18) {
            navigation.navigate('Under18Age');
        } else {
            navigation.navigate('GenderSelection');
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleNextButtonPressed = () => {
        if (day === '' || month === '' || year === '') {
            setBorderColor('rgba(256, 0, 0, 0.5)');
            return;
        }
        setBorderColor('#979797');
        const currentDate = new Date();
        const calculatedage = currentDate.getFullYear() - parseInt(year, 10);
        setAge(calculatedage);
        setShowPopup(true);
    };

    const buttonTextStyle = {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        lineHeight: 23.4,
        opacity: age !== '' ? 1 : 0.5,
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ProgressBar progress={0.6} />
            <View style={styles.contentContainer}>
                <Text style={styles.titleTextStyle}>When's Your Birthday?</Text>
                <Text style={styles.subTextStyle}>
                    Shink shares ONLY your age. Birthdays can not be changed once
                    confirmed.
                </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputSubContainer}>
                        <TextInput placeholder="DD"
                            keyboardType="numeric"
                            maxLength={2}
                            value={day}
                            onChangeText={(text) => setDay(text)}
                            style={[styles.textInputStyle, { borderColor: borderColor }]} />
                        <TextInput placeholder="MM"
                            keyboardType="numeric"
                            maxLength={2}
                            value={month}
                            onChangeText={(text) => setMonth(text)}
                            style={[styles.textInputStyle, { borderColor: borderColor }]} />
                    </View>
                    <TextInput placeholder="YYYY"
                        keyboardType="numeric"
                        maxLength={4}
                        value={year}
                        onChangeText={(text) => setYear(text)}
                        style={[styles.textInputStyle, { borderColor: borderColor }]} />
                </View>
            </View>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity onPress={() => handleNextButtonPressed()}
                    style={[styles.buttonContainer,
                    {
                        backgroundColor: (day !== '' || month !== '' || year !== '') ?
                            '#9d4edd' : '#e0e0e0',
                    }]}
                    disabled={(day === '' || month === '' || year === '')}>
                    <Text style={buttonTextStyle}>Next</Text>
                </TouchableOpacity>
            </View>
            <Modal animationType="slide"
                transparent={true}
                visible={showPopup}
                onRequestClose={() => setShowPopup(false)}>
                <View style={styles.popupContainer}>
                    <View style={styles.popupContentContainer}>
                        <Text style={styles.popupTitleTextStyle}>Are you {age}?</Text>
                        <Text style={styles.popupSubtitleTextStyle}>
                            Again - once locked in, this cannot be changed.
                        </Text>
                        <View style={styles.popupButtonsContainer}>
                            <TouchableOpacity onPress={() => handleClosePopup()}
                                style={styles.popupChangeButtonContainer}>
                                <Text style={styles.popupChangeButtonTextStyle}>Change</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleConfirmButtonPressed()}
                                style={styles.popupButtonContainer}>
                                <Text style={styles.popupButtonTextStyle}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    contentContainer: {
        marginTop: 10,
        marginHorizontal: 15,
        alignItems: 'flex-start',
    },
    titleTextStyle: {
        marginTop: 10,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
    },
    subTextStyle: {
        marginTop: 12,
        marginBottom: 12,
        fontSize: 14,
        fontFamily: 'AvenirNext-Regular',
        color: '#282C3F',
        textAlign: 'left',
        lineHeight: 21,
    },
    inputContainer: {
        marginTop: normalize(10),
        width: '80%',
        flexDirection: 'row',
        gap: normalize(10),
    },
    inputSubContainer: {
        width: '50%',
        flexDirection: 'row',
        gap: normalize(10),
    },
    textInputStyle: {
        flex: 1,
        marginRight: normalize(5),
        paddingLeft: normalize(15),
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Bold',
        color: '#000000',
        lineHeight: 24,
        borderWidth: 1.6,
        borderRadius: 5,
    },
    popupContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(53, 78, 102, 0.5)',
    },
    popupContentContainer: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        width: '90%',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        borderRadius: 8,
    },
    popupTitleTextStyle: {
        marginBottom: 5,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
    },
    popupSubtitleTextStyle: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#666666',
        textAlign: 'left',
        lineHeight: 21,
    },
    popupButtonsContainer: {
        marginTop: normalize(28),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    popupChangeButtonContainer: {
        paddingVertical: normalize(12),
        paddingHorizontal: normalize(16),
        marginRight: normalize(15),
        backgroundColor: 'transparent',
        borderRadius: normalize(5),
    },
    popupButtonContainer: {
        paddingVertical: normalize(13),
        paddingHorizontal: normalize(18),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9d4edd',
        borderRadius: 5,
    },
    popupChangeButtonTextStyle: {
        fontSize: normalize(14),
        fontWeight: '500',
        fontFamily: 'AvenirNext-Bold',
        color: '#000000',
        textAlign: 'center',
        lineHeight: 16,
    },
    popupButtonTextStyle: {
        fontSize: normalize(13.5),
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 16,
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

export default EnterBirthdayScreen;
