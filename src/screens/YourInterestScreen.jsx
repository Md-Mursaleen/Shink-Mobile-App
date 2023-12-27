/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable eol-last */
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import { data } from '../data/UserInterestData';
import { useNavigation } from '@react-navigation/native';

const YourInterestScreen = () => {
    const navigation = useNavigation();
    const [selectedInterests, setSelectedInterest] = useState([]);
    const onPressInterestItem = (item) => {
        if (selectedInterests.includes(item.text)) {
            setSelectedInterest(
                selectedInterests.filter(interest => interest !== item.text)
            );
        } else {
            setSelectedInterest([...selectedInterests, item.text]);
        }
    };
    const handleOnPress = () => {
        if (selectedInterests.length >= 1) {
            navigation.navigate('Agreement');
        }
    };

    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.titleTextStyle}>Your Interest</Text>
                <View style={styles.contentContainer}>
                    {data.map((item, index) => (
                        <Pressable key={index}
                            style={[styles.itemContainer, selectedInterests.includes(item.text) ?
                                { backgroundColor: "#f0e4fa", borderColor: "#9d4edd" } :
                                { backgroundColor: "#ffffff", borderColor: "#b3b3b3" }]}
                            onPress={() => onPressInterestItem(item)}>
                            <Text style={styles.itemTextStyle}>{item.text}</Text>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <Pressable style={[styles.buttonContainer,
                selectedInterests.length >= 1 ?
                    { backgroundColor: "#9d4edd" } :
                    { backgroundColor: "#e0e0e0" }]}
                    onPress={() => handleOnPress()}>
                    <Text style={styles.buttonTextStyle}>Continue</Text>
                    {/* <Text>{" "}</Text>
                    <Text style={styles.selectedInterestsLengthTextStyle}>{selectedInterests.length}</Text>
                    <Text style={styles.selectedInterestsLengthTextStyle}>{"/10"}</Text> */}
                </Pressable>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingTop: 48,
        backgroundColor: '#ffffff',
    },
    titleTextStyle: {
        fontSize: 32,
        fontWeight: "600",
        color: "#000000",
        lineHeight: 41.6,
    },
    contentContainer: {
        marginTop: 15,
        marginBottom: '16%',
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    itemContainer: {
        marginVertical: 6.5,
        marginHorizontal: 3,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 25,
    },
    itemTextStyle: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: "#000000",
        textAlign: "center",
    },
    bottomContainer: {
        paddingVertical: 3,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#f2f2f2',
    },
    buttonContainer: {
        padding: 13,
        marginTop: 5,
        marginBottom: 10, //can be changed
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    buttonTextStyle: {
        fontSize: 16,
        fontWeight: "600",
        color: "white",
        lineHeight: 23.4,
    },
    selectedInterestsLengthTextStyle: {
        fontSize: 16,
        fontWeight: "600",
        color: "white",
        lineHeight: 23.4,
    },
});

export default YourInterestScreen;