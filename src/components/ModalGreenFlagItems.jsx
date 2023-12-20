/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import CheckBox from 'react-native-check-box';

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

const ModalGreenFlagItems = ({ item, selectedGreenFlags, setSelectedGreenFlags }) => {
    const [greenFlagSelected, setGreenFlagSelected] = useState(false);
    const onCheckBoxClick = ({ id }) => {
        if (selectedGreenFlags?.includes(id)) {
            setSelectedGreenFlags(
                selectedGreenFlags.filter(ID => ID !== id)
            );
        } else {
            setSelectedGreenFlags([...selectedGreenFlags, id]);
        }
        setGreenFlagSelected(!greenFlagSelected);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.subContainer}>
                <View style={[styles.contentContainer,
                { borderColor: '#34a853' }]}>
                    <Image source={items[item.id]} style={styles.imageStyle} />
                    <Text style={styles.flagNameTextStyle}>{item.flagName}</Text>
                </View>
                <CheckBox isChecked={greenFlagSelected}
                    onClick={() => onCheckBoxClick({ id: item.id })}
                    checkBoxColor={'#bbb6b6'}
                    checkedCheckBoxColor={'#bebdbd'}
                    style={styles.checkboxStyle} />
            </View>
        </View >
    );
};
const styles = StyleSheet.create({
    subContainer: {
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentContainer: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginVertical: 5,
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
    },
    imageStyle: {
        width: 23,
        height: 23,
    },
    flagNameTextStyle: {
        marginLeft: 10,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#000000',
        lineHeight: 16,
    },
    checkboxStyle: {
        flex: 1,
        marginLeft: -40,
    },
});

export default ModalGreenFlagItems;