/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import { data } from '../data/ChatData';
import { Modalize } from 'react-native-modalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChatItem from '../components/ChatItem';
import ModalGreenFlagItems from '../components/ModalGreenFlagItems';
import ModalRedFlagItems from '../components/ModalRedFlagItems';

const ChatScreen = () => {
    const navigation = useNavigation();
    const greenFlagModalizeRef = useRef(null);
    const redFlagModalizeRef = useRef(null);
    const [isGreenFlagModalOpened, setIsGreenFlagModalOpened] = useState(false);
    const [isRedFlagModalOpened, setIsRedFlagModalOpened] = useState(false);
    const [selectedGreenFlags, setSelectedGreenFlags] = useState([]);
    const [selectedRedFlags, setSelectedRedFlags] = useState([]);
    const [messageText, setMessageText] = useState('');

    const onFlagButtonPressed = (item) => {
        if (item.category !== 'new-match') {
            navigation.navigate('FlagTypeSelection', {
                setIsGreenFlagModalOpened: setIsGreenFlagModalOpened,
                setIsRedFlagModalOpened: setIsRedFlagModalOpened,
            });
        }
    };
    useEffect(() => {
        if (isGreenFlagModalOpened === true) {
            greenFlagModalizeRef.current?.open();
        }
        if (isRedFlagModalOpened === true) {
            redFlagModalizeRef.current?.open();
        }
    }, [isGreenFlagModalOpened, isRedFlagModalOpened]);

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
            id: 'honest',
            type: 'green',
            flagName: 'Honest',
        },
        {
            id: 'kind',
            type: 'green',
            flagName: 'Kind',
        },
        {
            id: 'polite',
            type: 'green',
            flagName: 'Polite',
        },
        {
            id: 'generous',
            type: 'green',
            flagName: 'Generous',
        },
    ];

    const redFlagDataItems = [
        {
            id: 'ghoster',
            type: 'red',
            flagName: 'Ghoster',
        },
        {
            id: 'catfish',
            type: 'red',
            flagName: 'Catfish',
        },
        {
            id: 'badpicsender',
            type: 'red',
            flagName: 'Bad Pic Sender',
        },
        {
            id: 'pottiemouth',
            type: 'red',
            flagName: 'Pottie Mouth',
        },
        {
            id: 'stalker',
            type: 'red',
            flagName: 'Stalker',
        },
        {
            id: 'fakeprofile',
            type: 'red',
            flagName: 'Fake Profile',
        },
        {
            id: 'scammer',
            type: 'red',
            flagName: 'Scammer',
        },
        {
            id: 'married',
            type: 'red',
            flagName: 'Married',
        },
    ];
    console.log(selectedGreenFlags);
    const onRedFlagSubmitButtonPressed = () => {
        redFlagModalizeRef.current?.close();
        setMessageText('Thank you for submitting.');
        setTimeout(() => {
            setMessageText('');
        }, 2000);
    };
    const onGreenFlagSubmitButtonPressed = () => {
        greenFlagModalizeRef.current?.close();
        setMessageText('Thank you for submitting.');
        setTimeout(() => {
            setMessageText('');
        }, 2000);
    };

    return (
        <>
            <Modalize ref={redFlagModalizeRef}
                snapPoint={535}
                onClose={() => setIsRedFlagModalOpened(false)}
                onBackButtonPressed={() => setIsRedFlagModalOpened(false)}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}>
                <ScrollView style={styles.modalContainer}>
                    <View style={styles.modalSubContainer}>
                        <View style={styles.modalHeaderButtonContainer}>
                            <Entypo name="chevron-small-left" size={25} color={'#cfd3d6'} />
                            <AntDesign name="closecircleo" size={17} color={'#cfd3d6'} />
                        </View>
                        <Text style={styles.modalTitleTextStyle}>Red Flags</Text>
                        {redFlagDataItems.map((item, index) => (
                            <ModalRedFlagItems key={index}
                                item={item} selectedRedFlags={selectedRedFlags}
                                setSelectedRedFlags={setSelectedRedFlags} />
                        ))}
                        <View style={styles.bottomContainer}>
                            <Pressable style={[styles.buttonContainer,
                            selectedRedFlags?.length >= 1 ?
                                { backgroundColor: '#9d4edd' } :
                                { backgroundColor: '#e0e0e0' }]}
                                onPress={() => onRedFlagSubmitButtonPressed()}>
                                <Text style={styles.buttonTextStyle}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </Modalize>
            <Modalize ref={greenFlagModalizeRef}
                snapPoint={535}
                onClose={() => setIsGreenFlagModalOpened(false)}
                onBackButtonPressed={() => setIsGreenFlagModalOpened(false)}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}>
                <ScrollView style={styles.modalContainer}>
                    <View style={styles.modalSubContainer}>
                        <View style={styles.modalHeaderButtonContainer}>
                            <Entypo name="chevron-small-left" size={25} color={'#cfd3d6'} />
                            <AntDesign name="closecircleo" size={17} color={'#cfd3d6'} />
                        </View>
                        <Text style={styles.modalTitleTextStyle}>Green Flags</Text>
                        {greenFlagDataItems.map((item, index) => (
                            <ModalGreenFlagItems key={index}
                                item={item} selectedGreenFlags={selectedGreenFlags}
                                setSelectedGreenFlags={setSelectedGreenFlags} />
                        ))}
                        <View style={styles.bottomContainer}>
                            <Pressable style={[styles.buttonContainer,
                            selectedGreenFlags?.length >= 1 ?
                                { backgroundColor: '#9d4edd' } :
                                { backgroundColor: '#e0e0e0' }]}
                                onPress={() => onGreenFlagSubmitButtonPressed()}>
                                <Text style={styles.buttonTextStyle}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </Modalize>
            <SwipeListView data={data}
                renderItem={({ item }) => <ChatItem item={item} />}
                rightOpenValue={-300}
                disableRightSwipe
                keyExtractor={({ id }, index) => `${id}${index}`}
                renderHiddenItem={({ item }) => (
                    <View style={styles.swipeButtonsContainer}>
                        <Pressable style={[styles.swipeButtonContainer,
                        item.category === 'new-match' ?
                            { backgroundColor: '#f2f2f2' } : { backgroundColor: '#9d4edd' }]}
                            onPress={() => onFlagButtonPressed(item)}>
                            <Text style={styles.swipeButtonContainerTextStyle}>Flag</Text>
                        </Pressable>
                        <Pressable style={[styles.swipeButtonContainer,
                        { backgroundColor: '#e0e0e0' }]}>
                            <Text style={[styles.swipeButtonContainerTextStyle,
                            { color: '#000000' }]}>Unmatch</Text>
                        </Pressable>
                        <Pressable style={[styles.swipeButtonContainer,
                        { backgroundColor: '#eb4335' }]}>
                            <Text style={styles.swipeButtonContainerTextStyle}>Report</Text>
                        </Pressable>
                    </View>
                )}
                style={styles.container}
                ListHeaderComponent={
                    <>
                        <View style={styles.headerContainer}>
                            <View style={styles.headerSubContainer}>
                                <Ionicons name="arrow-back" size={22} color={'#ffffff'}
                                    onPress={() => navigation.goBack()} />
                                <Text style={styles.titleTextStyle}>Message</Text>
                            </View>
                            <Entypo name="dots-three-vertical" size={22} color={'#ffffff'}
                                style={{ marginRight: 10 }} />
                        </View>
                        <View style={styles.TopTabContainer}>
                            <View style={[styles.TopTabSubContainer,
                            { borderBottomWidth: 2, borderBottomColor: '#9e5594' }]}>
                                <Text style={[styles.topTabLabelTextStyle,
                                { color: '#000000', fontWeight: '500' }]}>All</Text>
                            </View>
                            <View style={styles.TopTabSubContainer}>
                                <Text style={[styles.topTabLabelTextStyle, { color: '#979797' }]}>Your Turn</Text>
                            </View>
                            <View style={styles.TopTabSubContainer}>
                                <Text style={[styles.topTabLabelTextStyle, { color: '#979797' }]}>New Match's</Text>
                            </View>
                            <View style={styles.TopTabSubContainer} >
                                <Text style={[styles.topTabLabelTextStyle, { color: '#979797' }]}>Un Shink</Text>
                            </View>
                        </View>
                    </>
                }
                ListFooterComponent={
                    <>
                        {messageText !== '' && (
                            <View style={styles.messageTextContainer}>
                                <Text style={styles.messageTextStyle}>{messageText}</Text>
                            </View>
                        )}
                    </>
                } />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
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
        fontSize: 22.5,
        fontWeight: '500',
        color: '#ffffff',
        lineHeight: 32,
    },
    swipeButtonsContainer: {
        flex: 1,
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    swipeButtonContainer: {
        width: 100,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    swipeButtonContainerTextStyle: {
        fontSize: 10,
        fontWeight: '400',
        color: '#ffffff',
        lineHeight: 16,
    },
    TopTabContainer: {
        width: '100%',
        height: 58,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ebeef2',
    },
    TopTabSubContainer: {
        width: 80,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topTabLabelTextStyle: {
        fontSize: 12.5,
        textAlign: 'center',
        lineHeight: 16,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(53, 78, 102, 0.1)',
    },
    modalSubContainer: {
        marginTop: 'auto',
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    modalHeaderButtonContainer: {
        marginTop: 6,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalTitleTextStyle: {
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 15,
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Regular',
        color: '#666666',
        lineHeight: 21,
    },
    bottomContainer: {
        marginTop: 'auto',
        padding: 13,
        borderWidth: 1,
        borderColor: '#f4f4f4',
    },
    buttonContainer: {
        padding: 6.5,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonTextStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        lineHeight: 23.4,
    },
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
    messageTextContainer: {
        marginTop: '30%',
        width: '78%',
        height: 42,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#f0e4fa',
        borderRadius: 8,
    },
    messageTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#9D4EDD',
        lineHeight: 21,
    },
});

export default ChatScreen;
