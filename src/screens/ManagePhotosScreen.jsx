/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ImageContextProvider, useImageContext } from '../contexts/ImageContext';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import RNFS from 'react-native-fs';

const defaultProfileImage = '../assets/images/profile-image.jpg';

const ManagePhotosScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { selectedImages, setSelectedImages } = useImageContext();
    const [savedImages, setSavedImages] = useState([]);
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        if (route.params && route.params.selectedImages) {
            setSelectedImages(route.params.selectedImages);
        }
    }, [route.params, setSelectedImages]);

    // Updated dummy data for testing
    const publicCardData = [
        { id: 1, date: '0', view: 120, time: '0' },
        { id: 2, date: '0', view: 150, time: '0' },
        { id: 3, date: '0', view: 200, time: '0' },
        { id: 4, date: '0', view: 180, time: '0' },
        { id: 5, date: '0', view: 160, time: '0' },
        { id: 6, date: '0', view: 160, time: '0' },
    ];

    const handleImageUpload = (index) => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then((image) => {
                setSelectedImages((prevImages) => {
                    const newImages = [...prevImages];
                    newImages[index] = image.path;
                    console.log('Selected Images: ', newImages); // Add this line for debugging
                    return newImages;
                });
            })
            .catch((error) => {
                console.log('ImagePicker Error: ', error);
            });
    };

    const handleDeleteImage = (index) => {
        const newImages = [...selectedImages];
        newImages.splice(index, 1);
        setSelectedImages(newImages);
        // Check if the deleted image is the current profile picture
        if (profilePic && profilePic.uri === selectedImages[index]) {
            // Set the profile picture to the default image
            setProfilePic(require(defaultProfileImage));
        }
    };

    const handleSaveButton = async () => {
        // Save the uploaded images to the dynamic state variable array
        setSavedImages(selectedImages);
        // Save the first selected image as the profile picture
        if (selectedImages.length > 0) {
            try {
                const profileImagePath = await saveImage(selectedImages[0], 'profile_image.jpg');
                setProfilePic({ uri: `file://${profileImagePath}` });
            } catch (error) {
                console.error('Error saving profile image: ', error);
            }
        }
        // Call saveImage for each selected image
        selectedImages.forEach((image, index) => {
            saveImage(image, `image_${index}.jpg`);
        });
    };

    const saveImage = async (imageUri, filename) => {
        try {
            const path = `${RNFS.DocumentDirectoryPath}/${filename}`;
            await RNFS.copyFile(imageUri, path);
            console.log('Image saved successfully: ', path);
            return path;
        } catch (error) {
            throw new Error('Error saving image: ', error);
        }
    };

    // <Image source={{ uri: `file://${savedImagePath}` }} you can thus access the saved photos later in other codes

    return (
        <ImageContextProvider>
            <View style={styles.container}>
                {/* Apply linear gradient to the Purple Bar */}
                <LinearGradient start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#c680b2', '#9e5594', '#7b337e']}
                    style={styles.purpleBarStyle}>
                    {/* Back Button and Title Text */}
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        style={styles.rowContainer}>
                        <Image source={require('../assets/images/white-left-arrow.png')}
                            style={styles.backImageStyle} />
                        <Text style={styles.titleTextStyle}>My Pics</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* Heading Container */}
                <View style={styles.headingContainer}>
                    <Text style={styles.headingTextStyle}>Add up to 6 photos</Text>
                </View>
                <ScrollView style={{ backgroundColor: '#f5f7f9' }}>
                    {/* Additional Container */}
                    <View style={styles.additionalContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#c680b2', '#9e5594', '#7b337e']}
                            style={styles.additionalGradientStyle}>
                            <Text style={styles.additionalTextStyle}>Your Profile Has Reached Top 10%</Text>
                        </LinearGradient>
                        <Text style={styles.additionalSubTextStyle}>These 6 photos are public</Text>
                    </View>
                    {/* PublicCard Component */}
                    <View style={styles.publicCardContainer}>
                        {publicCardData.map((item, index) => (
                            <View key={item.id} style={styles.cardContainer}>
                                {/* Grey square for displaying the selected image */}
                                <TouchableOpacity onPress={() => handleImageUpload(index)}
                                    style={styles.plusSignContainer}>
                                    {selectedImages[index] ? (
                                        <Image source={{ uri: selectedImages[index] }}
                                            style={styles.selectedImageStyle} />
                                    ) : (
                                        <Text style={styles.plusSignStyle}>+</Text>
                                    )}
                                </TouchableOpacity>
                                {/* Child Section */}
                                <View style={styles.childSectionStyle}>
                                    <Text style={styles.textStyle}>Date: <Text style={[styles.textStyle
                                        , { color: '#354e66' }]}>{item.date}</Text></Text>
                                    <Text style={styles.textStyle}>Views: <Text style={[styles.textStyle
                                        , { color: '#354e66' }]}>{item.view}</Text></Text>
                                    <Text style={styles.textStyle}>Time: <Text style={[styles.textStyle
                                        , { color: '#354e66' }]}>{item.time}</Text></Text>
                                </View>
                                {/* Delete Icon */}
                                <TouchableOpacity onPress={() => handleDeleteImage(index)}
                                    style={styles.deleteIconContainer}>
                                    <Image source={require('../assets/images/delete-icon.jpg')}
                                        style={styles.deleteIconStyle} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                {/* Save Button with Linear Gradient */}
                <LinearGradient start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#c680b2', '#9e5594', '#7b337e']}
                    style={styles.saveButtonContainer}>
                    <TouchableOpacity onPress={() => handleSaveButton()}
                        style={styles.saveButtonSubContainer}>
                        <Text style={styles.saveButtonTextStyle}>Save</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </ImageContextProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 120,
        flexGrow: 1,
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
    backImageStyle: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
    },
    titleTextStyle: {
        marginLeft: 13,
        fontSize: 23.5,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Regular',
        color: '#ffffff',
        lineHeight: 32,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headingContainer: {
        padding: 15,
        backgroundColor: '#ffffff',
    },
    headingTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#282C3F',
        lineHeight: 21,
    },
    publicCardContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
        marginBottom: 60,
    },
    cardContainer: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginBottom: 10,
        width: '100%', // Take full width
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        gap: 10,

    },
    plusSignContainer: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },
    plusSignStyle: {
        fontSize: 25,
        fontWeight: '400',
        color: '#282c3f',
    },
    childSectionStyle: {
        flex: 1,
        padding: 5,
    },
    textStyle: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'AvenirNext-Regular',
        color: '#282c3f',
        lineHeight: 18,
    },
    deleteIconContainer: {
        position: 'absolute',
        right: 8,
    },
    deleteIconStyle: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    additionalContainer: {
        paddingHorizontal: 15,
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
    },
    additionalGradientStyle: {
        paddingVertical: 5,
        marginBottom: 8,
        width: 'auto',
        borderRadius: 8,
        overflow: 'hidden',
    },
    additionalTextStyle: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Regular',
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 16,
    },
    additionalSubTextStyle: {
        paddingVertical: 5,
        fontSize: 12.4,
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular',
        color: '#9e5594',
        textAlign: 'center',
        lineHeight: 16,
    },
    saveButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 680,
        height: 48,
        marginTop: 11,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        zIndex: 1,
    },
    saveButtonSubContainer: {
        paddingLeft: 150,
        paddingRight: 150,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    saveButtonTextStyle: {
        fontSize: 16.5,
        fontWeight: 'bold',
        color: '#ffffff',
        lineHeight: 24,
    },
    selectedImageStyle: {
        width: 80,
        height: 80,
        resizeMode: 'cover', // Add this line
        borderRadius: 5,
    },
});

export default ManagePhotosScreen;
