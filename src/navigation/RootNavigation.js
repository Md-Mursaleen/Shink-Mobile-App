/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AgreementScreen from '../screens/AgreementScreen';
import ChatScreen from '../screens/ChatScreen';
import YourInterestScreen from '../screens/YourInterestScreen';
import FlagTypeSelectionScreen from '../screens/FlagTypeSelectionScreen';
import GenderSelectionScreen from '../screens/GenderSelectionScreen';
import SexualityScreen from '../screens/SexualityScreen';
import FinalGenderSelectionScreen from '../screens/FinalGenderSelectionScreen';
import NextGenderSelectionScreen from '../screens/NextGenderSelectionScreen';
import DatePreferenceScreen from '../screens/DatePreferenceScreen';
import RelationshipPreferenceScreen from '../screens/RelationshipPreferenceScreen';
import YourRelationshipScreen from '../screens/YourRelationshipScreen';
import MyFlagsScreen from '../screens/MyFlagsScreen';
import ReceivedFlagsScreen from '../screens/ReceivedFlagsScreen';
import GivenFlagsScreen from '../screens/GivenFlagsScreen';

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
            <BottomTab.Screen name="Explore" component={HomeScreen} options={{
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/bi_search-heart.png')}
                    width={size} height={size} tintColor={color} />,
            }} />
            <BottomTab.Screen name="See likes" component={HomeScreen} options={{
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/material-heart.png')}
                    width={size} height={size} tintColor={color} />,
            }} />
            <BottomTab.Screen name="Connection" component={HomeScreen} options={{
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/solid_circular-connection.png')}
                    width={size} height={size} tintColor={color} />,
            }} />
            <BottomTab.Screen name="Chat" component={ChatScreen} options={{
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/bi_chat-heart.png')}
                    width={size} height={size} tintColor={color} />,
            }} />
            <BottomTab.Screen name="Profile" component={HomeScreen} options={{
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
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GenderSelection">
                <Stack.Screen name="Agreement" component={AgreementScreen} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
                <Stack.Screen name="FlagTypeSelection" component={FlagTypeSelectionScreen} />
                <Stack.Screen name="GenderSelection" component={GenderSelectionScreen} />
                <Stack.Screen name="NextGenderSelection" component={NextGenderSelectionScreen} />
                <Stack.Screen name="Sexuality" component={SexualityScreen} />
                <Stack.Screen name="FinalGenderSelection" component={FinalGenderSelectionScreen} />
                <Stack.Screen name="DatePreference" component={DatePreferenceScreen} />
                <Stack.Screen name="RelationshipPreference" component={RelationshipPreferenceScreen} />
                <Stack.Screen name="YourRelationship" component={YourRelationshipScreen} />
                <Stack.Screen name="YourInterest" component={YourInterestScreen} />
                <Stack.Screen name="MyFlags" component={MyFlagsScreen} />
                <Stack.Screen name="ReceivedFlags" component={ReceivedFlagsScreen} />
                <Stack.Screen name="GivenFlags" component={GivenFlagsScreen} />
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
