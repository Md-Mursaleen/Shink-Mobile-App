/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable eol-last */
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import { data } from '../data/UserInterestData';

const YourInterestScreen = () => {
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
                    { backgroundColor: "#e0e0e0" }]}>
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
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    itemContainer: {
        marginVertical: 6,
        marginHorizontal: 4,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 25,
    },
    itemTextStyle: {
        fontSize: 12,
        color: "#000000",
        textAlign: "center",
    },
    bottomContainer: {
        padding: 8,
        backgroundColor: "#ffffff",
    },
    buttonContainer: {
        padding: 13,
        // marginBottom: 10, //removed
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
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