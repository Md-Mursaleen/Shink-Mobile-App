/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const ReceivedFlagsScreen = () => {
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

    const greenFlagDataItems = [
        {
            id: 'smart',
            type: 'green',
            flagName: 'Smart',
        },
        {
            id: 'funny',
            type: 'green',
            flagName: 'Funny',
        },
        {
            id: 'sexy',
            type: 'green',
            flagName: 'Sexy',
        },
        {
            id: 'cute',
            type: 'green',
            flagName: 'Cute',
        },
        {
            id: 'polite',
            type: 'green',
            flagName: 'Polite',
        },
    ];

    const redFlagDataItems = [
        {
            id: 'fakeprofile',
            type: 'red',
            flagName: 'Fake Profile',
        },
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.totalFlagsHeaderContainer}>
                <Text style={styles.totalTextStyle}>Total</Text>
                <View style={styles.flagsButtonContainer}>
                    <View style={[styles.flagButtonContainer,
                    { backgroundColor: '#34a853' }]}>
                        <Text style={styles.textStyle}>10</Text>
                        <Image source={require('../assets/images/white-flag.png')}
                            style={styles.imageStyle} />
                    </View>
                    <View style={[styles.flagButtonContainer,
                    { backgroundColor: '#eb4335' }]}>
                        <Text style={styles.textStyle}>2</Text>
                        <Image source={require('../assets/images/white-flag.png')}
                            style={styles.imageStyle} />
                    </View>
                </View>
            </View>
            <View style={styles.flagContainer}>
                <View style={styles.flagHeaderContainer}>
                    <View style={styles.flagSubContainer}>
                        <Image source={require('../assets/images/user3.png')}
                            style={styles.userImageStyle} />
                        <Text style={styles.userNameTextStyle}>Swati</Text>
                    </View>
                    <View style={styles.flagSubContainer}>
                        <Text style={{ marginLeft: 0 }}>0</Text>
                        <Image source={require('../assets/images/red-flag.png')}
                            style={[styles.flagImageStyle, { marginLeft: 5 }]} />
                        <Text style={{ marginLeft: 2 }}>5</Text>
                        <Image source={require('../assets/images/green-flag.png')}
                            style={[styles.flagImageStyle, { marginLeft: 5 }]} />
                    </View>
                </View>
                <View style={styles.flagBottomContainer}>
                    <Text style={styles.subTitleTextStyle}>All Flags</Text>
                    <View style={styles.flagItemsContainer}>
                        {greenFlagDataItems.map((item, index) => (
                            <View style={[styles.flagContentContainer,
                            { borderColor: '#34a853' }]} key={index}>
                                <Image source={items[item.id]} style={styles.flagItemImageStyle} />
                                <Text style={styles.flagNameTextStyle}>{item.flagName}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            <View style={styles.flagContainer}>
                <View style={styles.flagHeaderContainer}>
                    <View style={styles.flagSubContainer}>
                        <Image source={require('../assets/images/user1.png')}
                            style={styles.userImageStyle} />
                        <Text style={styles.userNameTextStyle}>Emily</Text>
                    </View>
                    <View style={styles.flagSubContainer}>
                        <Text style={{ marginLeft: 0 }}>1</Text>
                        <Image source={require('../assets/images/red-flag.png')}
                            style={[styles.flagImageStyle, { marginLeft: 5 }]} />
                        <Text style={{ marginLeft: 2 }}>0</Text>
                        <Image source={require('../assets/images/green-flag.png')}
                            style={[styles.flagImageStyle, { marginLeft: 5 }]} />
                    </View>
                </View>
                <View style={styles.flagBottomContainer}>
                    <Text style={styles.subTitleTextStyle}>All Flags</Text>
                    <View style={styles.flagItemsContainer}>
                        {redFlagDataItems.map((item, index) => (
                            <View style={[styles.flagContentContainer,
                            { borderColor: '#eb4335' }]} key={index}>
                                <Image source={items[item.id]} style={styles.flagItemImageStyle} />
                                <Text style={styles.flagNameTextStyle}>{item.flagName}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <Text style={styles.subTitleTextStyle}>Commented</Text>
                <View style={styles.commentContainer}>
                    <Text style={styles.commentTextStyle}>Theooking like Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's stand text of the printing and typesetting text of the printing.
                        Lorem Ipsum has been the industry's stand text of the printing.
                    </Text>
                </View>
                <View style={styles.bottomButtonsContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.agreeTextStyle,
                        { color: '#282c3f' }]}>Do you agree with this</Text>
                        <Text style={[styles.agreeTextStyle,
                        { color: '#eb4335' }]}> Red flag</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.buttonContainer, { marginRight: 13 }]}>
                            <Text style={styles.buttonTextStyle}>Yes</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonTextStyle}>No</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginBottom: 15,
    },
    headerContainer: {
        padding: 8,
        width: 'auto',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#9e5594',
        gap: 8,
    },
    headerSubContainer: {
        marginLeft: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleTextStyle: {
        marginLeft: 12,
        fontSize: 23.5,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Regular',
        color: '#ffffff',
        lineHeight: 32,
    },
    flagsButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flagButtonContainer: {
        marginHorizontal: 11,
        width: 84,
        height: 49,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textStyle: {
        marginRight: 3,
        color: '#ffffff',
    },
    totalTextStyle: {
        marginLeft: 3.5,
        fontSize: 33.5,
        fontWeight: '700',
        fontFamily: 'AvenirNext-Bold',
        color: '#9e5594',
        lineHeight: 42,
    },
    totalFlagsHeaderContainer: {
        paddingHorizontal: 16,
        paddingVertical: 15,
        marginTop: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#cfd3d6',
        borderRadius: 8,
    },
    imageStyle: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    flagContainer: {
        paddingHorizontal: 16,
        paddingVertical: 15,
        marginTop: 13,
        borderWidth: 1,
        borderColor: '#cfd3d6',
        borderRadius: 8,
    },
    flagHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userImageStyle: {
        width: 43,
        height: 43,
        resizeMode: 'contain',
    },
    userNameTextStyle: {
        marginLeft: 13,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Regular',
        color: '#000000',
        lineHeight: 21,
    },
    flagSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagImageStyle: {
        marginHorizontal: 3,
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    subTitleTextStyle: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 6,
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Regular',
        color: '#979797',
        lineHeight: 21,
    },
    flagContentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginHorizontal: 3,
        height: 52,
        flexBasis: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    flagItemImageStyle: {
        width: 23,
        height: 23,
    },
    flagNameTextStyle: {
        fontSize: 11.5,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#000000',
        lineHeight: 16,
    },
    flagBottomContainer: {
        marginTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#f2f2f2',
    },
    flagItemsContainer: {
        marginRight: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    commentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#cfd3d6',
        borderRadius: 8,
    },
    commentTextStyle: {
        fontSize: 12.5,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#282c3f',
        lineHeight: 16,
    },
    bottomButtonsContainer: {
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    agreeTextStyle: {
        fontSize: 12.8,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        lineHeight: 16,
    },
    buttonContainer: {
        paddingVertical: 5,
        paddingHorizontal: 11,
        backgroundColor: '#f0e4fa',
        borderWidth: 1,
        borderColor: '#9d4edd',
        borderRadius: 16,
    },
    buttonTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#9e5594',
        lineHeight: 16,
    },
});

export default ReceivedFlagsScreen;
