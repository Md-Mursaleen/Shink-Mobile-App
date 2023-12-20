/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable, TextInput, ScrollView } from 'react-native';
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

const ModalRedFlagItems = ({ item, selectedRedFlags, setSelectedRedFlags }) => {
    const [redFlagSelected, setRedFlagSelected] = useState(false);
    const [commentText, setCommentText] =
        useState('');
    const onCheckBoxClick = ({ id }) => {
        if (selectedRedFlags.includes(id)) {
            setSelectedRedFlags(
                selectedRedFlags.filter(ID => ID !== id)
            );
        } else {
            setSelectedRedFlags([...selectedRedFlags, id]);
        }
        setRedFlagSelected(!redFlagSelected);
    };

    return (
        <View style={{ flex: 1 }}>
            <Pressable style={[styles.subContainer, selectedRedFlags?.length === 1 ?
                selectedRedFlags[0] === item.id ?
                    { opacity: 1 } : { opacity: 0.3 } : { opacity: 1 }]}>
                <View style={[styles.contentContainer, { borderColor: '#eb4335' }]}>
                    <Image source={items[item.id]} style={styles.imageStyle} />
                    <Text style={styles.flagNameTextStyle}>{item.flagName}</Text>
                </View>
                <CheckBox isChecked={redFlagSelected}
                    onClick={() => onCheckBoxClick({ id: item.id })}
                    checkBoxColor={'#bbb6b6'}
                    checkedCheckBoxColor={'#bebdbd'}
                    style={styles.checkboxStyle} />
            </Pressable>
            {(selectedRedFlags.length === 1 && selectedRedFlags[0] === item.id) && (
                <View style={{ marginHorizontal: 15 }}>
                    <ScrollView style={styles.commentContainer}>
                        <TextInput editable
                            multiline
                            placeholder="Please provide the additional details, Why are you flagging?"
                            placeholderTextColor={'#979797'}
                            value={commentText}
                            onChangeText={text => setCommentText(text)}
                            style={styles.textInputStyle} />
                    </ScrollView>
                </View>
            )}
        </View>
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
    commentContainer: {
        paddingHorizontal: 13,
        marginVertical: 5,
        width: '100%',
        height: 123,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#cfd3d6',
    },
    textInputStyle: {
        width: 295,
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#000000',
        lineHeight: 16,
    },
});

export default ModalRedFlagItems;