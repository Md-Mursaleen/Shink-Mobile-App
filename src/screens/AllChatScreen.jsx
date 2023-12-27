/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView, Image } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import { data } from '../data/ChatData';
import { Modalize } from 'react-native-modalize';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChatItem from '../components/ChatItem';
import ModalGreenFlagItems from '../components/ModalGreenFlagItems';
import ModalRedFlagItems from '../components/ModalRedFlagItems';
import ModalReportItems from '../components/ModalReportItems';
import ReportItems from '../components/ReportItems';

const AllChatScreen = () => {
    const navigation = useNavigation();
    const greenFlagModalizeRef = useRef(null);
    const redFlagModalizeRef = useRef(null);
    const reportModalizeRef = useRef(null);
    const reportItemsModalizeRef = useRef(null);
    const [isGreenFlagModalOpened, setIsGreenFlagModalOpened] = useState(false);
    const [isRedFlagModalOpened, setIsRedFlagModalOpened] = useState(false);
    const [isReportModalOpened, setIsReportModalOpened] = useState(false);
    const [isReportItemsModalOpened, setIsReportItemsModalOpened] = useState(false);
    const [isReportItemsSelected, setIsReportItemsSelected] = useState(false);
    const [selectedGreenFlags, setSelectedGreenFlags] = useState([]);
    const [selectedRedFlags, setSelectedRedFlags] = useState([]);
    const [messageText, setMessageText] = useState('');
    const [chatData, setChatData] = useState(data);

    const onFlagButtonPressed = (item) => {
        if (item.category !== 'new-match') {
            navigation.navigate('FlagTypeSelection', {
                setIsGreenFlagModalOpened: setIsGreenFlagModalOpened,
                setIsRedFlagModalOpened: setIsRedFlagModalOpened,
                editing: false,
            });
        }
    };

    const onReportButtonPressed = () => {
        console.log('pressed');
        setIsReportModalOpened(true);
    };

    useEffect(() => {
        if (isGreenFlagModalOpened === true) {
            greenFlagModalizeRef.current?.open();
        }
        if (isRedFlagModalOpened === true) {
            redFlagModalizeRef.current?.open();
        }
        if (isReportModalOpened === true) {
            reportModalizeRef.current?.open();
        }
        if (isReportItemsModalOpened === true) {
            reportItemsModalizeRef.current?.open();
        }
    }, [isGreenFlagModalOpened, isRedFlagModalOpened, isReportModalOpened, isReportItemsModalOpened]);

    useEffect(() => {
        if (isReportModalOpened === false) {
            reportModalizeRef.current?.close();
        }
    }, [isReportModalOpened]);

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

    const reportDataItems = [
        {
            id: '1',
            name: 'Fake profile, Seems like scammer',
        },
        {
            id: '2',
            name: 'Fake profile, Seems like scammer',
        },
        {
            id: '3',
            name: 'Fake profile, Seems like scammer',
        },
        {
            id: '4',
            name: 'Fake profile, Seems like scammer',
        },
        {
            id: '5',
            name: 'Fake profile, Seems like scammer',
        },
    ];

    const reportItemsDataItems = [
        {
            id: '1',
            name: 'Using photo from someone I know',
        },
        {
            id: '2',
            name: 'Using my photo',
        },
        {
            id: '3',
            name: 'Using photo from someone famous',
        },
        {
            id: '4',
            name: 'Fake location',
        },
        {
            id: '5',
            name: 'Limited information',
        },
        {
            id: '6',
            name: 'Other',
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

    const deletingChatItem = async (chatItem) => {
        const newChatItems = chatData.filter((item, index) =>
            item.userId !== chatItem.userId);
        setChatData(newChatItems);
    };

    return (
        <>
            <Modalize ref={reportItemsModalizeRef}
                snapPoint={465}
                onClose={() => setIsReportItemsModalOpened(false)}
                onBackButtonPressed={() => setIsReportItemsModalOpened(false)}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}>
                <ScrollView style={styles.modalContainer}>
                    <View style={styles.modalSubContainer}>
                        <View style={styles.modalHeaderButtonContainer}>
                            <Entypo name="chevron-small-left" size={25} color={'#cfd3d6'} />
                            <AntDesign name="closecircleo" size={17} color={'#cfd3d6'} />
                        </View>
                        <Text style={styles.reportItemsModalTitleTextStyle}>Report</Text>
                        {reportItemsDataItems.map((item, index) => (
                            <ReportItems key={index}
                                item={item} setIsReportItemsSelected={setIsReportItemsSelected} />
                        ))}
                        <View style={styles.bottomContainer}>
                            <Pressable style={[styles.buttonContainer,
                            isReportItemsSelected === true ?
                                { backgroundColor: '#9d4edd' } :
                                { backgroundColor: '#e0e0e0' }]}
                                onPress={() => onRedFlagSubmitButtonPressed()}>
                                <Text style={styles.buttonTextStyle}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </Modalize>
            <Modalize ref={reportModalizeRef}
                snapPoint={385}
                onClose={() => setIsReportModalOpened(false)}
                onBackButtonPressed={() => setIsReportModalOpened(false)}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}>
                <ScrollView style={styles.modalContainer}>
                    <View style={styles.modalSubContainer}>
                        <View style={styles.modalHeaderButtonContainer}>
                            <Entypo name="chevron-small-left" size={25} color={'#cfd3d6'} />
                            <AntDesign name="closecircleo" size={17} color={'#cfd3d6'} />
                        </View>
                        <Text style={styles.reportModalTitleTextStyle}>Report</Text>
                        <Text style={styles.reportModalSubTitleTextStyle}>Your report will be kept private</Text>
                        {reportDataItems.map((item, index) => (
                            <ModalReportItems key={index}
                                item={item} setIsReportModalOpened={setIsReportModalOpened}
                                isReportItemsModalOpened={isReportItemsModalOpened}
                                setIsReportItemsModalOpened={setIsReportItemsModalOpened} />
                        ))}
                    </View>
                </ScrollView>
            </Modalize>
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
            <SwipeListView data={chatData}
                renderItem={({ item }) => (
                    <>
                        <ChatItem item={item} />

                    </>
                )}
                rightOpenValue={-355}
                disableRightSwipe
                keyExtractor={({ id }, index) => `${id}${index}`}
                renderHiddenItem={({ item }) => (
                    item.type === 'deleted' || item.type === 'banned' ||
                        item.type === 'blocked' ? (
                        item.type === 'blocked' ? (
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
                                { backgroundColor: '#eb4335' }]}
                                    onPress={() => onReportButtonPressed()}>
                                    <Text style={styles.swipeButtonContainerTextStyle}>Report</Text>
                                </Pressable>
                                <Pressable style={[styles.swipeButtonContainer, {
                                    backgroundColor: '#ffc1bc',
                                }]}
                                    onPress={() => deletingChatItem(item)}>
                                    <Image source={require('../assets/images/delete-button.png')}
                                        style={styles.deleteButtonImageStyle} />
                                    <Text style={styles.deleteTextStyle}>Delete</Text>
                                </Pressable>
                            </View>
                        ) : (
                            <Pressable style={styles.deleteButtonContainer}
                                onPress={() => deletingChatItem(item)}>
                                <Image source={require('../assets/images/delete-button.png')}
                                    style={styles.deleteButtonImageStyle} />
                                <Text style={styles.deleteTextStyle}>Delete</Text>
                            </Pressable>
                        )
                    ) : (
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
                            { backgroundColor: '#eb4335' }]}
                                onPress={() => onReportButtonPressed()}>
                                <Text style={styles.swipeButtonContainerTextStyle}>Report</Text>
                            </Pressable>
                        </View>
                    )
                )}
                style={styles.container}
                ListHeaderComponent={
                    <>
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
        fontSize: 23.5,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Regular',
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
        width: 90,
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
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 10,
        width: '78%',
        height: 42,
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
        color: '#9d4edd',
        lineHeight: 21,
    },
    deleteButtonContainer: {
        flex: 1,
        marginLeft: 'auto',
        width: 90,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc1bc',
    },
    deleteTextStyle: {
        marginTop: 2.5,
        fontSize: 10.5,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Regular',
        color: '#eb4335',
        textAlign: 'center',
        lineHeight: 16,
    },
    deleteButtonImageStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    reportModalTitleTextStyle: {
        marginTop: 10,
        marginBottom: 7,
        marginLeft: 15,
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Bold',
        color: '#000000',
        lineHeight: 32,
    },
    reportModalSubTitleTextStyle: {
        marginBottom: 12,
        marginLeft: 15,
        fontSize: 12.5,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#979797',
        lineHeight: 16,
    },
    reportItemsModalTitleTextStyle: {
        marginTop: 10,
        marginBottom: 7,
        marginLeft: 15,
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Bold',
        color: '#000000',
        lineHeight: 32,
    },
});

export default AllChatScreen;
