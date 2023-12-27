/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useImageContext } from '../contexts/ImageContext';
import LinearGradient from 'react-native-linear-gradient';

const defaultProfileImage = '../assets/images/profile-image.jpg';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [bio, setBio] = useState('');
    const maxCharacterLimit = 100;
    const [isEditing, setIsEditing] = useState(false);
    const [showBioBar, setShowBioBar] = useState(false);
    const isOverLimit = bio.length > maxCharacterLimit;
    const [profilePic, setProfilePic] = useState(require('../assets/images/profile-image.jpg'));
    const { selectedImages } = useImageContext();

    useEffect(() => {
        if (route.params && route.params.selectedProfileImage) {
            setProfilePic({ uri: route.params.selectedProfileImage });
        } else if (selectedImages.length > 0) {
            // Use the first selected image as the profile picture
            setProfilePic({ uri: selectedImages[0] });
        } else {
            // If no selected profile image, set it to the default image
            setProfilePic(require(defaultProfileImage));
        }
    }, [route.params, selectedImages]);

    const handleSaveBio = () => {
        // Save the bio or perform any other action
        console.log('Saved bio: ', bio);
        setShowBioBar(false);
        setIsEditing(false);
    };

    const handleCloseBioBar = () => {
        setShowBioBar(false);
        setIsEditing(false);
    };

    const handleBioContainerClick = () => {
        setShowBioBar(true);
        setIsEditing(true);
    };

    return (
        <View style={styles.container}>
            {/* Purple Bar */}
            {!showBioBar ? (
                <LinearGradient start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#c680b2', '#9e5594', '#7b337e']}
                    style={styles.purpleBarStyle}>
                    {/* Back Button and Username */}
                    <View style={styles.rowContainer}>
                        <Image source={require('../assets/images/white-left-arrow.png')}
                            style={styles.backImageStyle} />
                        <Text style={styles.usernameTextStyle}>Sana</Text>
                    </View>
                    {/* Settings Icon */}
                    <TouchableOpacity onPress={() => console.log('Settings clicked')}>
                        <Image source={require('../assets/images/setting-icon.png')}
                            style={styles.settingsImageStyle} />
                    </TouchableOpacity>
                </LinearGradient>
            ) : (
                // New Purple Bar for Bio Container
                <LinearGradient start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#c680b2', '#9e5594', '#7b337e']}
                    style={styles.purpleBarStyle}>
                    <TouchableOpacity onPress={() => handleCloseBioBar()}>
                        <Image source={require('../assets/images/close-icon.png')}
                            style={styles.settingsImageStyle} />
                    </TouchableOpacity>
                    <Text style={styles.usernameTextStyle}>{/* You can customize the text here */}</Text>
                    <TouchableOpacity onPress={() => handleSaveBio()}>
                        <Text style={styles.saveTextStyle}>Save</Text>
                    </TouchableOpacity>
                </LinearGradient>
            )}
            {/* Profile Strength Container */}
            <View style={styles.profileStrengthContainer}>
                <Image source={require('../assets/images/info-icon.png')}
                    style={styles.infoIconStyle} />
                <Text style={styles.profileStrengthTextStyle}>Profile Strength <Text
                    style={[styles.profileStrengthTextStyle, { color: '#9e5594' }]}> 20%</Text></Text>
            </View>
            {/* Photo Container */}
            {/* Photo Container */}
            <TouchableOpacity onPress={() => navigation.navigate('ManagePhotos')}
                style={styles.photoContainer}>
                <View style={styles.profilePicContainer}>
                    <Image source={profilePic.uri ? profilePic : require(defaultProfileImage)}
                        style={styles.profilePicStyle} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.myPicsTitle}>My Pics</Text>
                    <LinearGradient start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#c680b2', '#9e5594', '#7b337e']}
                        style={styles.purpleBoxStyle}>
                        <Text style={styles.purpleBoxTextStyle}>Your Profile Has Reached Top 10%</Text>
                    </LinearGradient>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ManagePhotos')}
                    style={styles.arrowIconStyle}>
                    <Image source={require('../assets/images/right-arrow.png')}
                        style={styles.forwardButtonImageStyle} />
                </TouchableOpacity>
            </TouchableOpacity>
            {/* Bio Container */}
            <TouchableOpacity onPress={() => handleBioContainerClick()}
                style={styles.bioContainer}>
                <Text style={styles.sectionTitleTextStyle}>My Bio</Text>
                <TextInput
                    style={[
                        styles.bioTextInputStyle,
                        isOverLimit && { borderColor: '#eb4335' }, // Apply styles conditionally
                    ]}
                    placeholder="Type your bio"
                    multiline
                    numberOfLines={5}
                    value={bio}
                    onChangeText={(text) => setBio(text)}
                    editable={isEditing} />
                {/* Character count display inside TextInput */}
                <Text
                    style={[
                        styles.characterCountTextStyle,
                        isOverLimit ? { color: '#eb4335' } : { color: '#000000' },
                    ]}>
                    {bio.length}/{maxCharacterLimit} characters
                </Text>
            </TouchableOpacity>
            {/* Buttons Container */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonTextStyle}>Verify my profile</Text>
                    <Image source={require('../assets/images/right-arrow.png')}
                        style={styles.arrowIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonTextStyle}>My interests</Text>
                    <Image source={require('../assets/images/right-arrow.png')}
                        style={styles.arrowIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonTextStyle}>About me</Text>
                    <Image source={require('../assets/images/right-arrow.png')}
                        style={styles.arrowIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonTextStyle}>My info</Text>
                    <Image source={require('../assets/images/right-arrow.png')}
                        style={styles.arrowIconStyle} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
// Styling Section
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    purpleBarStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileStrengthContainer: {
        paddingHorizontal: 20,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    infoIconStyle: {
        marginRight: 9,
        width: 19,
        height: 19,
        resizeMode: 'contain',
    },
    profileStrengthTextStyle: {
        fontSize: 12.5,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Bold',
        color: '#979797',
        lineHeight: 16,
    },
    photoContainer: {
        padding: 12,
        top: 12,
        left: 16,
        width: '90%',
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#cfd3d6',
        borderRadius: 4,
        gap: 12,
    },
    profilePicContainer: {
        width: 80,
        height: 80,
        borderRadius: 10,
        overflow: 'hidden',
    },
    profilePicStyle: {
        width: 78,
        height: 78,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 3,
    },
    myPicsTitle: {
        marginBottom: 7,
        fontSize: 17.3,
        fontWeight: '700',
        fontFamily: 'AvenirNext-Regular',
        color: '#282C3F',
        lineHeight: 21,
    },
    purpleBoxStyle: {
        paddingVertical: 4,
        marginTop: 8,
        width: 'auto',
        backgroundColor: '#9e5594',
        borderRadius: 4,
    },
    purpleBoxTextStyle: {
        fontSize: 10.8,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Regular',
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 16,
    },
    forwardButtonImageStyle: {
        marginLeft: 2,
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    backImageStyle: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
    },
    usernameTextStyle: {
        marginLeft: 13,
        fontSize: 23.5,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Regular',
        color: '#ffffff',
        lineHeight: 32,
    },
    bioContainer: {
        marginTop: 37,
        width: '90%',
        height: 'auto',
        alignSelf: 'center',
        borderColor: '#cfd3d6',
    },
    sectionTitleTextStyle: {
        marginBottom: 13,
        fontSize: 17.3,
        fontWeight: '700',
        fontFamily: 'AvenirNext-Regular',
        color: '#282C3F',
        height: 21,
    },
    bioTextInputStyle: {
        padding: 20,
        width: '100%',
        height: 100,
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Regular',
        color: '#282c3f',
        lineHeight: 16,
        borderWidth: 1,
        borderColor: '#cfd3d6',
        borderRadius: 8,
    },
    characterCountTextStyle: {
        position: 'absolute',
        bottom: 9,
        right: 10,
        fontSize: 11,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Regular',
        color: '#979797',
        lineHeight: 15,
    },
    buttonsContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#cfd3d6',
        borderRadius: 8,
    },
    buttonTextStyle: {
        fontSize: 16.5,
        fontWeight: '700',
        fontFamily: 'AvenirNext-Regular',
        color: '#282C3F',
        lineHeight: 21,
    },
    arrowIconStyle: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingsImageStyle: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    saveTextStyle: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Bold',
        color: '#ffffff',
        lineHeight: 32,
    },
});

export default ProfileScreen;
