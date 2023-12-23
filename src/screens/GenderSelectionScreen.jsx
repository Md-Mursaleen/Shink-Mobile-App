/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GenderSelectionScreen = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionButtonPressed = (option) => {
        setSelectedOption(option);
        if (option === 'Other') {
            navigation.navigate('FinalGenderSelection', { selectedOption: 'Other' });
        }
    };

    const handlePreviousButtonPressed = () => {
        navigation.goBack();
    };

    const handleNextButtonPressed = () => {
        if (selectedOption) {
            if (selectedOption === 'Other') {
                navigation.navigate('NextGenderSelection', { selectedOption });
            } else {
                navigation.navigate('Sexuality', { selectedOption });
            }
        }
    };

    const buttonTextStyle = {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        lineHeight: 23.4,
        opacity: selectedOption ? 1 : 0.5,
    };

    const renderOption = (option) => {
        return (
            <TouchableOpacity onPress={() => handleOptionButtonPressed(option)}
                style={styles.optionItemStyle}>
                <Text style={{ color: '#000000' }}>{option}</Text>
                {option === 'Other' ? (
                    <View style={{ marginLeft: 'auto' }}>
                        <Text style={{ color: '#000000' }}>{'>'}</Text>
                    </View>
                ) : (
                    <View style={styles.radioButtonContainer}>
                        <View style={styles.radioButtonSubContainer}>
                            {selectedOption === option &&
                                <View style={styles.innerCircleStyle} />}
                        </View>
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerSubContainer}>
                    <TouchableOpacity onPress={() => handlePreviousButtonPressed()}
                        style={styles.previousButtonContainer}>
                        <Image source={require('../assets/images/left-arrow.png')}
                            style={styles.imageStyle} />
                    </TouchableOpacity>
                    <View style={[styles.lineStyle, { right: 0 }]} />
                </View>
            </View>
            <Text style={styles.titleTextStyle}>What Is Your Gender?</Text>
            {renderOption('Man')}
            {renderOption('Woman')}
            {renderOption('Transgender')}
            {renderOption('Non Binary')}
            {renderOption('Non Gender Confirmist')}
            {renderOption('Other')}
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity onPress={() => handleNextButtonPressed()}
                    style={[styles.buttonContainer,
                    { backgroundColor: selectedOption ? '#9d4edd' : '#e0e0e0' }]}
                    disabled={!selectedOption}>
                    <Text style={buttonTextStyle}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        width: '100%',
        backgroundColor: '#f5f7f9',
    },
    headerSubContainer: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lineStyle: {
        marginRight: 'auto',
        width: '40%',
        height: 3,
        backgroundColor: '#9d4edd',
        opacity: 0.8,
    },
    imageStyle: {
        width: 18,
        height: 18,
        tintColor: 'black',
    },
    previousButtonContainer: {
        padding: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
    },
    buttonContainer: {
        padding: 13,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonNextContainer: {
        marginLeft: 'auto',
        backgroundColor: 'grey',
    },
    genderSignImageStyle: {
        marginTop: 70,
        marginBottom: 0,
        width: 42,
        height: 42,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    genderSigns: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: '400',
    },
    titleTextStyle: {
        marginTop: 30,
        marginBottom: 20,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
    },
    optionItemStyle: {
        padding: 10,
        marginVertical: 5,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 6,
    },
    radioButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    radioButtonSubContainer: {
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'grey',
    },
    innerCircleStyle: {
        height: 10,
        width: 10,
        backgroundColor: 'grey',
        borderRadius: 6,
    },
    bottomButtonContainer: {
        paddingHorizontal: 20,
        marginTop: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default GenderSelectionScreen;
