/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AgreementScreen = () => {
    const navigation = useNavigation();
    const [isEndReached, setIsEndReached] = useState(false);
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 15;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };
    const onPressAgree = () => {
        if (isEndReached) {
            navigation.navigate("BottomTab");
        }
    };

    return (
        <>
            <View style={styles.container}>
                {/* <Text style={styles.titleTextStyle}>Flag your matches. It helps everyone</Text> */}
                <ScrollView style={styles.contentContainer}
                    onScroll={({ nativeEvent }) => {
                        if (isCloseToBottom(nativeEvent)) {
                            setIsEndReached(true);
                        }
                    }}
                    scrollEventThrottle={400} showsVerticalScrollIndicator={false}>
                    <Text style={styles.textStyle}>{`*Shink Dating App Privacy Policy and Guidelines*\n\nLast Updated: [Date]\n\nThank you for choosing Shink, a platform designed to connect people in meaningful ways. We are committed to protecting your privacy and providing a secure environment for you to build relationships. This Privacy Policy outlines our practices regarding the collection, use, and sharing of your personal information when you use the Shink dating app.
                    \n*1. Information We Collect:*\n\na. *Registration Information:*\n    - When you create a Shink account, we collect your email address, phone number, and create a unique user ID.
                    \nb. *Profile Information:*\n    - Users have the option to provide additional information such as photos, location, interests, and preferences to enhance their profiles.
                    \nc. *Usage Information:*\n    - We collect data on how you interact with the app, including likes, messages, matches, and other activities.
                    \nd. *Device Information:*\n    - We may collect information about the device you use to access Shink, including device type, operating system, and unique device identifiers.
                    \n*2. How We Use Your Information:*\n\na. *Matchmaking:*\n    - We use the information you provide to match you with potential partners based on compatibility.
                    \nb. *Communication:*\n    - Your email address and phone number are used for account verification and communication purposes.
                    \nc. *Personalization:*\n    - We personalize your experience by using your preferences and usage patterns to suggest relevant matches.
                    \nd. *Analytics:*\n    - We analyze user data to improve our app's functionality, user experience, and overall performance.
                    \n*3. Information Sharing:*\n\na. *Consent:*\n    - We will not share your information with third parties without your explicit consent.
                    \nb. *Service Providers:*\n    - We may share information with third-party service providers to perform functions on our behalf, such as hosting, data analysis, and customer service.
                    \n*4. Security Measures:*\n\na. *Data Security:*\n    - We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction.
                    \nb. *Encryption:*\n    - All data transmitted between your device and our servers is encrypted using SSL/TLS protocols.
                    \n*5. User Guidelines:*\n\na. *Respect and Consent:*\n    - Users are expected to treat each other with respect and obtain consent before initiating any form of communication.
                    \nb. *Report and Block:*\n    - Shink encourages users to report any inappropriate behavior and provides tools to block and filter unwanted contacts.
                    \nc. *Authenticity:*\n    - Users are expected to provide accurate and truthful information in their profiles.
                    \n*6. Changes to Privacy Policy:*\n\na. *Notification:*\n    - Users will be notified of any changes to the Privacy Policy through the app or via email.
                    \nb. *Review:*\n    - Users are encouraged to review the Privacy Policy regularly to stay informed about how their information is being handled.
                    \nBy using Shink, you agree to the terms outlined in this Privacy Policy. If you have any questions or concerns, please contact us at [contact@shinkdating.com].
                    \nThank you for choosing Shink. We wish you a delightful experience in finding meaningful connections.
                    \nNote: This is a general template, and it's crucial to consult legal professionals to ensure compliance with specific regulations and laws.`}</Text>
                </ScrollView>
            </View>
            <View style={styles.bottomContainer}>
                <Pressable style={[styles.buttonContainer,
                isEndReached ?
                    { backgroundColor: "#9d4edd" } :
                    { backgroundColor: "#e0e0e0" }]} onPress={() => onPressAgree()}>
                    <Text style={styles.buttonTextStyle}>I agree</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        // paddingTop: 45,
        paddingTop: 40, //newly added
    },
    titleTextStyle: {
        width: 325,
        fontSize: 32,
        fontWeight: "600",
        color: "#000000",
        lineHeight: 41.6,
    },
    contentContainer: {
        // marginTop: 10,
        width: "auto",
        // height: 525,
        height: 630, //newly added
        alignContent: 'flex-start',
        borderWidth: 1.3,
        borderColor: '#cfd3d6',
        borderRadius: 8,
    },
    textStyle: {
        marginVertical: 15,
        marginLeft: 14,
        width: 305,
        fontSize: 14.5,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Regular',
        color: '#354e66',
        textAlign: 'left',
        lineHeight: 21,
    },
    bottomContainer: {
        marginTop: 'auto',
        padding: 8,
        borderWidth: 1,
        borderColor: "#f2f2f2",
    },
    buttonContainer: {
        padding: 13,
        marginBottom: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    buttonTextStyle: {
        fontSize: 16,
        fontWeight: "600",
        color: "white",
        lineHeight: 23.4,
    },
    selectedInterestsLengthTextStyle: {
        fontSize: 16,
        fontWeight: "600",
        color: "white",
        lineHeight: 23.4,
    },
});

export default AgreementScreen;
