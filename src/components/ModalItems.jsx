/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const items = {
    smart: require('../../src/assets/icons/smart.png'),
    funny: require('../../src/assets/icons/funny.png'),
    sexy: require('../../src/assets/icons/sexy.png'),
    cute: require('../../src/assets/icons/cute.png'),
    honest: require('../../src/assets/icons/honest.png'),
    kind: require('../../src/assets/icons/kind.png'),
    polite: require('../../src/assets/icons/polite.png'),
    generous: require('../../src/assets/icons/generous.png'),
    ghoster: require('../../src/assets/icons/ghoster.png'),
    catfish: require('../../src/assets/icons/catfish.png'),
    badpicsender: require('../../src/assets/icons/bad-pic-sender.png'),
    pottiemouth: require('../../src/assets/icons/pottie-mouth.png'),
    stalker: require('../../src/assets/icons/stalker.png'),
    fakeprofile: require('../../src/assets/icons/fake-profile.png'),
    scammer: require('../../src/assets/icons/scammer.png'),
    married: require('../../src/assets/icons/married.png'),
};

const data = [
    {
        id: 'smart',
        type: 'green',
        count: '10',
        flagName: 'Smart',
    },
    {
        id: 'funny',
        type: 'green',
        count: '10',
        flagName: 'Funny',
    },
    {
        id: 'sexy',
        type: 'green',
        count: '10',
        flagName: 'Sexy',
    },
    {
        id: 'cute',
        type: 'green',
        count: '10',
        flagName: 'Cute',
    },
    {
        id: 'honest',
        type: 'green',
        count: '10',
        flagName: 'Honest',
    },
    {
        id: 'kind',
        type: 'green',
        count: '10',
        flagName: 'Kind',
    },
    {
        id: 'polite',
        type: 'green',
        count: '10',
        flagName: 'Polite',
    },
    {
        id: 'generous',
        type: 'green',
        count: '10',
        flagName: 'Generous',
    },
    {
        id: 'ghoster',
        type: 'red',
        count: '10',
        flagName: 'Ghoster',
    },
    {
        id: 'catfish',
        type: 'red',
        count: '10',
        flagName: 'Catfish',
    },
    {
        id: 'badpicsender',
        type: 'red',
        count: '10',
        flagName: 'Bad Pic Sender',
    },
    {
        id: 'pottiemouth',
        type: 'red',
        count: '10',
        flagName: 'Pottie Mouth',
    },
    {
        id: 'stalker',
        type: 'red',
        count: '10',
        flagName: 'Stalker',
    },
    {
        id: 'fakeprofile',
        type: 'red',
        count: '10',
        flagName: 'Fake Profile',
    },
    {
        id: 'scammer',
        type: 'red',
        count: '10',
        flagName: 'Scammer',
    },
    {
        id: 'married',
        type: 'red',
        count: '10',
        flagName: 'Married',
    },
];

const ModalItems = () => {

    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <View style={[styles.modalItemStyle,
                item.type === 'green' ? { borderWidth: 1.2, borderColor: '#34a853' }
                    : { borderWidth: 1.2, borderColor: '#eb4335' }]} key={index}>
                    <Image source={items[item.id]} style={styles.imageStyle} />
                    <Text style={styles.textStyle}>{item.count}</Text>
                    <Text style={styles.textStyle}>{item.flagName}</Text>
                </View>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalItemStyle: {
        padding: 12,
        marginHorizontal: 8,
        marginVertical: 8,
        width: 98,
        height: 98,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: 8,
        gap: 8,
    },
    imageStyle: {
        width: 25,
        height: 25,
        alignSelf: 'center',
    },
    textStyle: {
        fontSize: 13,
        color: '#343434',
        textAlign: 'center',
        lineHeight: 16,
    },
});

export default ModalItems;