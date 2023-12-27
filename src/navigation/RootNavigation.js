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
import LoginScreen from '../screens/LoginScreen';
import EnterNameScreen from '../screens/EnterNameScreen';
import EnterBirthdayScreen from '../screens/EnterBirthdayScreen';
import Under18AgeScreen from '../screens/Under18AgeScreen';
import EnterPhoneNumberScreen from '../screens/EnterPhoneNumberScreen';
import LocationAccessScreen from '../screens/LocationAccessScreen';
import NotificationsAccessScreen from '../screens/NotificationsAccessScreen';
import OTPConfirmationScreen from '../screens/OTPConfirmationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ManagePhotosScreen from '../screens/ManagePhotosScreen';

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
            <BottomTab.Screen name="Profile" component={ProfileScreen} options={{
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
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="EnterName" component={EnterNameScreen} />
                <Stack.Screen name="EnterBirthday" component={EnterBirthdayScreen} />
                <Stack.Screen name="EnterPhoneNumber" component={EnterPhoneNumberScreen} />
                <Stack.Screen name="Under18Age" component={Under18AgeScreen} />
                <Stack.Screen name="LocationAccess" component={LocationAccessScreen} />
                <Stack.Screen name="NotificationsAccess" component={NotificationsAccessScreen} />
                <Stack.Screen name="OTPConfirmation" component={OTPConfirmationScreen} />
                <Stack.Screen name="ManagePhotos" component={ManagePhotosScreen} />
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
