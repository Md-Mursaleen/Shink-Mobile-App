/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ModalReportItems = ({ item, setIsReportModalOpened, isReportItemsModalOpened, setIsReportItemsModalOpened }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (selectedOption !== null) {
            setIsReportItemsModalOpened(true);
            setIsReportModalOpened(false);
        }
    }, [selectedOption, setIsReportItemsModalOpened, setIsReportModalOpened]);

    const handleOptionButtonPressed = (option) => {
        setSelectedOption(option);
    };

    const renderOption = (option) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => handleOptionButtonPressed(option)}
                    style={styles.optionItemStyle}>
                    <Text style={styles.textStyle}>{option.name}</Text>
                    <View style={styles.radioButtonContainer}>
                        <View style={styles.radioButtonSubContainer}>
                            {selectedOption === option &&
                                <View style={styles.innerCircleStyle} />}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            {renderOption(item)}
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
    optionItemStyle: {
        padding: 10,
        marginVertical: 4.8,
        width: '90%',
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cfd3d6',
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
    textStyle: {
        fontSize: 12.3,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#282c3f',
        lineHeight: 16,
    },
});

export default ModalReportItems;