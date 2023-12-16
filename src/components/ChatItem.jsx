/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const items = {
    user1: require('../../src/assets/images/user1.png'),
    user2: require('../../src/assets/images/user2.png'),
    user3: require('../../src/assets/images/user3.png'),
    user4: require('../../src/assets/images/user4.png'),
    user5: require('../../src/assets/images/user5.png'),
};

const ChatItem = ({ item }) => {
    const { userId, name, type, message, status, category, message_received, message_sent } = item;

    return (
        <View style={styles.container}>
            <Image source={items[userId]} style={[styles.imageStyle, name === 'Deleted User' &&
                { width: 45, height: 45 }]} />
            <View style={styles.subContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.userNameTextStyle, type === 'deleted' && { top: 5 }]}>{name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {(status === 'read' && message_received === false && message_sent === true) && (
                            <Image source={require('../assets/images/read-line-duotone.png')}
                                style={styles.iconStyle} />
                        )}
                        <Text style={category === 'new-match' && { color: '#9d4edd' }}>{message}</Text>
                    </View>
                </View>
                {category === 'new-match' && (
                    <View style={styles.newMatchContainer}>
                        <Text style={styles.newMatchTextStyle}>New Match</Text>
                    </View>
                )}
                {(category === 'old-match' && message_received === true && message_sent === false) && (
                    <View style={styles.yourTurnContainer}>
                        <Text style={styles.yourTurnTextStyle}>Your Turn</Text>
                    </View>
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderBottomWidth: 2,
        borderBottomColor: '#f2f2f2',
    },
    imageStyle: {
        width: 46,
        height: 46,
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 13,
        flexDirection: 'column',
    },
    userNameTextStyle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1a1a1a',
        lineHeight: 21,
    },
    newMatchContainer: {
        padding: 2,
        marginLeft: 'auto',
        width: 68,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9d4edd',
        borderRadius: 50,
    },
    newMatchTextStyle: {
        fontSize: 10.5,
        fontWeight: '400',
        color: '#ffffff',
        lineHeight: 16,
    },
    yourTurnContainer: {
        padding: 3,
        marginLeft: 'auto',
        marginRight: 2,
        width: 60,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0e4fa',
        borderRadius: 50,
    },
    yourTurnTextStyle: {
        fontSize: 10.5,
        fontWeight: '400',
        color: '#9e5594',
        lineHeight: 16,
    },
});

export default ChatItem;