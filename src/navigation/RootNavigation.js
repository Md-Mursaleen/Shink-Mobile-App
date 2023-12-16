/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Users from '../screens/Users';
import AgreementScreen from '../screens/AgreementScreen';
import ChatScreen from '../screens/ChatScreen';
import YourInterestScreen from '../screens/YourInterestScreen';
import FlagTypeSelectionScreen from '../screens/FlagTypeSelectionScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false, // This hides the header
            tabBarStyle: styles.tabBarStyle,
            tabBarActiveTintColor: '#c680b2', // Active tab color
            tabBarInactiveTintColor: '#979797', // Inactive tab color
        }} initialRouteName="Explore">
            <BottomTab.Screen name="Explore" component={Users} options={{
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/bi_search-heart.png')}
                    width={size} height={size} tintColor={color} />,
            }} />
            <BottomTab.Screen name="See likes" component={YourInterestScreen} options={{
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/material-heart.png')}
                    width={size} height={size} tintColor={color} />,
            }} />
            <BottomTab.Screen name="Connection" component={Users} options={{
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/solid_circular-connection.png')}
                    width={size} height={size} tintColor={color} />,
            }} />
            <BottomTab.Screen name="Chat" component={ChatScreen} options={{
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/bi_chat-heart.png')}
                    width={size} height={size} tintColor={color} />,
            }} />
            <BottomTab.Screen name="Profile" component={Users} options={{
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/mingcute_user.png')}
                    width={size} height={size} tintColor={color} />,
            }} />
        </BottomTab.Navigator>
    );
};

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Agreement">
                <Stack.Screen name="Agreement" component={AgreementScreen} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
                <Stack.Screen name="FlagTypeSelection" component={FlagTypeSelectionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 52,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    tabBarLabelStyle: {
        paddingBottom: 2,
        fontSize: 11.5,
        fontWeight: '400',
    },
});
