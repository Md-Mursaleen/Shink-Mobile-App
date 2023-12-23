/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RelationshipPreferenceScreen = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionButtonPressed = (option) => {
        setSelectedOption(option);
    };

    const handlePreviousButtonPressed = () => {
        navigation.goBack();
    };

    const handleNextButtonPressed = () => {
        if (selectedOption) {
            navigation.navigate('YourRelationship', { selectedOption });
        }
    };

    const buttonTextStyle = {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        lineHeight: 23.4,
        opacity: selectedOption ? 1 : 0.5,
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTextStyle}>What Are You Looking For?</Text>
                </View>
                {renderOption('Something Casual')}
                {renderOption('Relationship')}
                {renderOption('Not Sure Yet')}
                {renderOption('Marriage')}
                {renderOption('Friendship')}
            </ScrollView>
            <View style={styles.headerButtonContainer}>
                <TouchableOpacity onPress={() => handlePreviousButtonPressed()}
                    style={styles.previousButtonContainer}>
                    <Image source={require('../assets/images/left-arrow.png')}
                        style={styles.imageStyle} />
                </TouchableOpacity>
                <View style={styles.lineStyle} />
            </View>
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

    function renderOption(option) {
        return (
            <TouchableOpacity onPress={() => handleOptionButtonPressed(option)}
                style={styles.optionItemStyle}>
                <Text style={{ color: '#000000' }}>{option}</Text>
                <View style={styles.radioButtonContainer}>
                    <View style={styles.radioButtonSubContainer}>
                        {selectedOption === option &&
                            <View style={styles.innerCircleStyle} />}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
};

// Use the same styles from DatePreference
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    contentContainer: {
        paddingBottom: 80,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerContainer: {
        marginTop: 50,
        marginBottom: 20,
        width: '100%',
        flexDirection: 'column',
    },
    headerTextStyle: {
        marginTop: 30,
        marginLeft: 16,
        width: '90%',
        height: 84,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
    },
    headerButtonContainer: {
        position: 'absolute',
        padding: 5,
        top: 0,
        left: 0,
        right: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f7f9',
    },
    previousButtonContainer: {
        padding: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
    },
    imageStyle: {
        width: 18,
        height: 18,
        tintColor: '#000000',
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
        marginRight: 10,
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 12,
    },
    innerCircleStyle: {
        height: 12,
        width: 12,
        backgroundColor: 'grey',
        borderRadius: 6,
    },
    lineStyle: {
        marginRight: 'auto',
        top: 18,
        height: 3,
        width: '40%',
        backgroundColor: '#9d4edd',
        opacity: 0.8,
    },
});

export default RelationshipPreferenceScreen;
