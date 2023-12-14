/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import { data } from '../data/ChatData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ChatItem from '../components/ChatItem';

const swipeListViewButton = () => {
    return (
        <View style={styles.swipeButtonsContainer}>
            <Pressable style={[styles.swipeButtonContainer,
            { backgroundColor: '#9d4edd' }]}>
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
    );
};

const ChatScreen = () => {
    const navigation = useNavigation();

    return (
        <SwipeListView data={data}
            renderItem={({ item }) => <ChatItem item={item} />}
            rightOpenValue={-300}
            disableRightSwipe
            keyExtractor={({ id }, index) => `${id}${index}`}
            renderHiddenItem={() => swipeListViewButton()}
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
                        <View style={styles.TopTabSubContainer}>
                            <Text>All</Text>
                        </View>
                        <View style={styles.TopTabSubContainer}>
                            <Text>Your Turn</Text>
                        </View>
                        <View style={styles.TopTabSubContainer}>
                            <Text>New Match's</Text>
                        </View>
                        <View style={styles.TopTabSubContainer} >
                            <Text>Deactivated</Text>
                        </View>
                    </View>
                </>
            }
            ListFooterComponent={
                <>
                </>
            } />
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
        backgroundColor: '#9E5594',
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

    },
    TopTabSubContainer: {

    },
});

export default ChatScreen;
