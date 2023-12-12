/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Modalize } from 'react-native-modalize';
import Swiper from 'react-native-deck-swiper';
import Category from '../assets/Category';
import ModalItems from '../components/ModalItems';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';

const Homepage = ({ users }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);
  const modalizeRef = useRef(null);
  const onOpenModal = () => {
    modalizeRef.current?.open();
    setIsModalOpened(true);
  };

  const handleLeftSwipe = () => {
    swiperRef.current.swipeLeft();
    setIndex(index + 1);
  };

  const handleRightSwipe = () => {
    swiperRef.current.swipeRight();
    setIndex(index + 1);
  };

  const closeSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1L1 15M1 1L15 15" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const heartSvg = `
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6454 3.00805C13 0.499836 9.14892 0.594331 6.64792 1.10658C3.24436 1.80346 0.387548 4.87827 0.529486 9.32283C0.679111 14.0075 3.94886 17.4297 7.08511 20.2493C8.65323 21.6589 10.2626 22.9421 11.4556 24.0952C13.8109 26.2241 14.952 29.8681 14.952 29.8681C14.952 29.8681 16.4854 26.1492 18.4484 24.2698C19.6791 23.1011 21.3031 21.7942 22.9061 20.3367C26.1122 17.4215 29.4314 13.8346 29.287 9.23558C29.287 1.59133 21.712 1.67227 18.7943 4.32964C20.002 3.69052 21.3018 3.55483 22.4692 3.81627C24.6127 4.29646 26.3875 6.06221 26.4899 9.32302C26.5875 12.443 24.0468 15.4535 20.983 18.2389C19.4513 19.6314 17.8735 20.8917 16.5253 22.172C15.8093 22.8523 15.479 23.4541 14.9519 24.1592C14.4246 23.4103 14.098 22.7801 13.3786 22.0847C9.91961 18.1499 4.42392 13.9046 4.2043 9.23552C4.1593 5.34677 9.05356 4.27725 11.5 6C14.6454 8 16.0835 9.95914 19.8867 12.3484L14.6454 3.00805Z" fill="url(#paint0_linear_162_620)"/>
<defs>
<linearGradient id="paint0_linear_162_620" x1="6.82635" y1="28.5703" x2="25.5583" y2="-0.0842635" gradientUnits="userSpaceOnUse">
<stop stop-color="#C680B2"/>
<stop offset="0.5111" stop-color="#9E5594"/>
<stop offset="1" stop-color="#7B337E"/>
</linearGradient>
</defs>
</svg>
`;



  const checkmarkSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6069 2.34188C11.716 2.24705 11.8558 2.19482 12.0004 2.19482C12.145 2.19482 12.2847 2.24705 12.3939 2.34188L14.3419 4.03388C14.4025 4.08663 14.4732 4.12665 14.5496 4.15156C14.6261 4.17647 14.7068 4.18576 14.7869 4.17888L17.3589 3.95488C17.5029 3.94251 17.6465 3.98254 17.7633 4.0676C17.8802 4.15267 17.9624 4.27705 17.9949 4.41788L18.5769 6.93188C18.5948 7.01044 18.6284 7.08458 18.6757 7.14987C18.7229 7.21516 18.7829 7.27026 18.8519 7.31188L21.0639 8.64188C21.1876 8.71641 21.2804 8.8331 21.325 8.97051C21.3697 9.10793 21.3632 9.25684 21.3069 9.38988L20.2989 11.7659C20.2675 11.8399 20.2514 11.9195 20.2514 11.9999C20.2514 12.0803 20.2675 12.1599 20.2989 12.2339L21.3069 14.6099C21.3635 14.743 21.3701 14.8922 21.3254 15.0298C21.2808 15.1675 21.1879 15.2843 21.0639 15.3589L18.8519 16.6889C18.783 16.7304 18.7231 16.7853 18.6759 16.8504C18.6286 16.9156 18.595 16.9895 18.5769 17.0679L17.9949 19.5819C17.9624 19.7227 17.8802 19.8471 17.7633 19.9322C17.6465 20.0172 17.5029 20.0572 17.3589 20.0449L14.7869 19.8209C14.7068 19.8139 14.6262 19.823 14.5498 19.8477C14.4733 19.8725 14.4026 19.9123 14.3419 19.9649L12.3929 21.6579C12.2837 21.7527 12.144 21.8049 11.9994 21.8049C11.8548 21.8049 11.715 21.7527 11.6059 21.6579L9.65786 19.9649C9.59711 19.9123 9.52641 19.8725 9.44997 19.8477C9.37353 19.823 9.2929 19.8139 9.21286 19.8209L6.64086 20.0449C6.49686 20.0572 6.35324 20.0172 6.23639 19.9322C6.11955 19.8471 6.03733 19.7227 6.00486 19.5819L5.42286 17.0679C5.40489 16.9893 5.37128 16.9152 5.32403 16.8499C5.27679 16.7846 5.21687 16.7295 5.14786 16.6879L2.93586 15.3579C2.81208 15.2834 2.71936 15.1667 2.67471 15.0292C2.63007 14.8918 2.63652 14.7429 2.69286 14.6099L3.70086 12.2339C3.73222 12.1599 3.74837 12.0803 3.74837 11.9999C3.74837 11.9195 3.73222 11.8399 3.70086 11.7659L2.69286 9.38988C2.63624 9.25672 2.62965 9.10758 2.6743 8.96994C2.71896 8.8323 2.81185 8.71544 2.93586 8.64088L5.14786 7.31088C5.21677 7.26937 5.27662 7.21442 5.32386 7.14932C5.3711 7.08421 5.40477 7.01026 5.42286 6.93188L6.00486 4.41788C6.03733 4.27705 6.11955 4.15267 6.23639 4.0676C6.35324 3.98254 6.49686 3.94251 6.64086 3.95488L9.21286 4.17888C9.29297 4.18576 9.37364 4.17647 9.45008 4.15156C9.52653 4.12665 9.59719 4.08663 9.65786 4.03388L11.6069 2.34188Z" stroke="#4292FF" strokeWidth="1.5"/>
<path d="M9 13L11 15L16 10" stroke="#4292FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`;




  const mySvgString = `
<svg width="178" height="64" viewBox="0 0 178 64" fill="none" xmlns="http://www.w3.org/2000/svg">


<g filter="url(#filter0_dd_162_606)">
<rect x="8" y="6" width="160" height="48" rx="8" fill="white"/>
<path d="M67 8H109" stroke="#9D4EDD" strokeWidth="3" strokeLinecap="round"/>
<rect x="25" y="18.5" width="53" height="23" rx="11.5" fill="white"/>
<rect x="25" y="18.5" width="53" height="23" rx="11.5" stroke="#34A853"/>
<path d="M38.814 31.612H40.242V32.774H38.814V35H37.498V32.774H32.934V31.542L37.148 25.088H38.814V31.612ZM37.498 26.642H37.47L34.334 31.612H37.498V26.642ZM48.5342 35H42.0662V33.698L46.0142 29.778C46.3128 29.47 46.5695 29.148 46.7842 28.812C46.9988 28.476 47.1062 28.098 47.1062 27.678C47.1062 27.4167 47.0595 27.1833 46.9662 26.978C46.8728 26.7633 46.7468 26.5813 46.5882 26.432C46.4295 26.2827 46.2428 26.1707 46.0282 26.096C45.8135 26.012 45.5848 25.97 45.3422 25.97C44.8382 25.97 44.4228 26.1333 44.0962 26.46C43.7695 26.7773 43.5642 27.188 43.4802 27.692L42.1502 27.468C42.2062 27.0947 42.3228 26.7493 42.5002 26.432C42.6868 26.1053 42.9202 25.8253 43.2002 25.592C43.4802 25.3493 43.8022 25.1627 44.1662 25.032C44.5395 24.9013 44.9362 24.836 45.3562 24.836C45.7668 24.836 46.1588 24.8967 46.5322 25.018C46.9148 25.1393 47.2508 25.3167 47.5402 25.55C47.8295 25.7833 48.0582 26.0773 48.2262 26.432C48.4035 26.7867 48.4922 27.1927 48.4922 27.65C48.4922 27.9673 48.4502 28.2613 48.3662 28.532C48.2822 28.8027 48.1655 29.0593 48.0162 29.302C47.8762 29.5447 47.7082 29.778 47.5122 30.002C47.3162 30.2167 47.1108 30.4313 46.8962 30.646L43.6762 33.782H48.5342V35Z" fill="#34A853"/>
<path fillRule="evenodd" clipRule="evenodd" d="M67.8337 31.333C67.9473 31.3329 68.0589 31.3039 68.1581 31.2485C68.2573 31.1932 68.3407 31.1134 68.4005 31.0167C68.4602 30.9201 68.4942 30.8098 68.4993 30.6963C68.5044 30.5829 68.4804 30.47 68.4297 30.3683L67.2457 27.9997L68.4297 25.631C68.4804 25.5294 68.5044 25.4165 68.4993 25.303C68.4942 25.1895 68.4602 25.0792 68.4005 24.9826C68.3407 24.886 68.2573 24.8062 68.1581 24.7508C68.0589 24.6955 67.9473 24.6664 67.8337 24.6663H60.5003V23.9997C60.5003 23.8229 60.4301 23.6533 60.3051 23.5283C60.18 23.4032 60.0105 23.333 59.8337 23.333C59.6568 23.333 59.4873 23.4032 59.3623 23.5283C59.2372 23.6533 59.167 23.8229 59.167 23.9997V35.9997C59.167 36.1765 59.2372 36.3461 59.3623 36.4711C59.4873 36.5961 59.6568 36.6663 59.8337 36.6663C60.0105 36.6663 60.18 36.5961 60.3051 36.4711C60.4301 36.3461 60.5003 36.1765 60.5003 35.9997V31.333H67.8337Z" fill="#34A853"/>
<rect x="90" y="18.5" width="61" height="23" rx="11.5" fill="white"/>
<rect x="90" y="18.5" width="61" height="23" rx="11.5" stroke="#EB4335"/>
<path d="M103.814 31.612H105.242V32.774H103.814V35H102.498V32.774H97.934V31.542L102.148 25.088H103.814V31.612ZM102.498 26.642H102.47L99.334 31.612H102.498V26.642ZM112.54 31.612H113.968V32.774H112.54V35H111.224V32.774H106.66V31.542L110.874 25.088H112.54V31.612ZM111.224 26.642H111.196L108.06 31.612H111.224V26.642ZM122.26 35H115.792V33.698L119.74 29.778C120.039 29.47 120.296 29.148 120.51 28.812C120.725 28.476 120.832 28.098 120.832 27.678C120.832 27.4167 120.786 27.1833 120.692 26.978C120.599 26.7633 120.473 26.5813 120.314 26.432C120.156 26.2827 119.969 26.1707 119.754 26.096C119.54 26.012 119.311 25.97 119.068 25.97C118.564 25.97 118.149 26.1333 117.822 26.46C117.496 26.7773 117.29 27.188 117.206 27.692L115.876 27.468C115.932 27.0947 116.049 26.7493 116.226 26.432C116.413 26.1053 116.646 25.8253 116.926 25.592C117.206 25.3493 117.528 25.1627 117.892 25.032C118.266 24.9013 118.662 24.836 119.082 24.836C119.493 24.836 119.885 24.8967 120.258 25.018C120.641 25.1393 120.977 25.3167 121.266 25.55C121.556 25.7833 121.784 26.0773 121.952 26.432C122.13 26.7867 122.218 27.1927 122.218 27.65C122.218 27.9673 122.176 28.2613 122.092 28.532C122.008 28.8027 121.892 29.0593 121.742 29.302C121.602 29.5447 121.434 29.778 121.238 30.002C121.042 30.2167 120.837 30.4313 120.622 30.646L117.402 33.782H122.26V35Z" fill="#EB4335"/>
<path fillRule="evenodd" clipRule="evenodd" d="M140.834 31.333C140.947 31.3329 141.059 31.3039 141.158 31.2485C141.257 31.1932 141.341 31.1134 141.4 31.0167C141.46 30.9201 141.494 30.8098 141.499 30.6963C141.504 30.5829 141.48 30.47 141.43 30.3683L140.246 27.9997L141.43 25.631C141.48 25.5294 141.504 25.4165 141.499 25.303C141.494 25.1895 141.46 25.0792 141.4 24.9826C141.341 24.886 141.257 24.8062 141.158 24.7508C141.059 24.6955 140.947 24.6664 140.834 24.6663H133.5V23.9997C133.5 23.8229 133.43 23.6533 133.305 23.5283C133.18 23.4032 133.01 23.333 132.834 23.333C132.657 23.333 132.487 23.4032 132.362 23.5283C132.237 23.6533 132.167 23.8229 132.167 23.9997V35.9997C132.167 36.1765 132.237 36.3461 132.362 36.4711C132.487 36.5961 132.657 36.6663 132.834 36.6663C133.01 36.6663 133.18 36.5961 133.305 36.4711C133.43 36.3461 133.5 36.1765 133.5 35.9997V31.333H140.834Z" fill="#EB4335"/>
</g>
<defs>
<filter id="filter0_dd_162_606" x="0" y="-2" width="178" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_606"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_162_606" result="effect2_dropShadow_162_606"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_162_606" result="shape"/>
</filter>
</defs>
</svg>
`;

  function getFileId(driveLink) {
    const match = driveLink.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  }

  return (
    <>
      <Modalize ref={modalizeRef}
        snapPoint={425}
        onClose={() => setIsModalOpened(false)}
        onBackButtonPressed={() => setIsModalOpened(false)}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}>
        <ScrollView style={styles.modalContainer}>
          <View style={styles.modalSubContainer}>
            <FontAwesome5 name="user-circle" size={34} color={'#959595'}
              style={styles.iconStyle} />
            <Text style={styles.userNameTextStyle}>Sana</Text>
            <View style={styles.modalFlagButtonContainer}>
              <View style={[styles.flagButtonContainer,
              { backgroundColor: '#34a853' }]}>
                <Text style={styles.textStyle}>80</Text>
                <Foundation name="flag" size={16} color={'#ffffff'} />
              </View>
              <View style={[styles.flagButtonContainer,
              { backgroundColor: '#eb4335' }]}>
                <Text style={styles.textStyle}>80</Text>
                <Foundation name="flag" size={16} color={'#ffffff'} />
              </View>
            </View>
            <ModalItems />
          </View>
        </ScrollView>
      </Modalize>
      <View style={{ flex: 1 }}>
        <Swiper ref={swiperRef} cards={users} renderCard={(user) => {
          return (
            <>
              <View style={styles.card}>
                <Image source={{ uri: `https://drive.google.com/uc?export=view&id=${getFileId(user.userData.img1)}` }}
                  style={styles.image} />
              </View>
              <View style={{ flex: 1, marginHorizontal: "5%", marginVertical: "-15%", flexDirection: "row", alignItems: "baseline" }}>
                <Text style={{ fontSize: 29, fontWeight: "500", color: "white" }}>{user.userData.name + " "}
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "600", color: "white" }}>{user.userData.age + " "}
                </Text>
                <SvgXml style={{ marginBottom: '2%', alignSelf: 'flex-end' }} xml={checkmarkSvg} width="24" height="24" />
              </View>
            </>
          );
        }}
          onSwipedLeft={(cardIndex) => {
            setIndex(cardIndex + 1);
          }}
          onSwipedRight={(cardIndex) => {
            setIndex(cardIndex + 1);
          }}
          onSwipedAll={() => {
            console.log('All cards have been swiped.');
          }}
          cardIndex={index}
          backgroundColor={'transparent'}
          stackSize={2}
          verticalSwipe={false} // Disable vertical swiping
        // horizontalSwipe={false} // Disable horizontal swiping
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLeftSwipe} style={styles.button}>
            <SvgXml xml={closeSvg} width="50%" height="50%" />
          </TouchableOpacity>
          <SvgXml style={styles.buttonFlag} xml={mySvgString} width="178" height="60" onPress={() => onOpenModal()} />
          <TouchableOpacity onPress={handleRightSwipe} style={styles.button}>
            <SvgXml xml={heartSvg} width="70%" height="70%" />
          </TouchableOpacity>
        </View>
      </View>
      {isModalOpened === false && (
        <View style={{
          marginTop: '12%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          alignItems: 'center',
        }}>
          <View style={{ flex: 1 }} >
            <Category heading={'My Matching Interests'} categories={users[index].matchingInterests} />
            <Category heading={'My Info'} categories={[users[index].userData.status, users[index].userData.location, users[index].userData.for]} />
            <Category heading={'My Interests'} categories={[users[index].userData.inter1, users[index].userData.inter2, users[index].userData.inter3, users[index].userData.inter4, users[index].userData.inter5, users[index].userData.inter6, users[index].userData.inter7, users[index].userData.inter8, users[index].userData.inter9]} />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24, // Example size, adjust as needed
    fontWeight: 'bold', // Makes the name stand out
    color: 'black', // Dark text color for readability
    marginTop: '143%', // Spacing from the top of the card
    textAlign: 'center', // Center-align text
  },
  bio: {
    fontSize: 16, // Smaller text size for the bio
    color: '#666', // Lighter text color for the bio
    marginBottom: 10, // Spacing between the name and bio
    textAlign: 'center', // Center-align text
    paddingHorizontal: 12, // Padding on the sides
  },
  card: {
    height: '80%',
    borderRadius: 12,
    // shadowRadius: 25,
    // shadowColor: 'black',
    // shadowOpacity: 0.08,
    // shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: '155%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  button: {
    width: 42,
    height: 42,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000', // Shadow is black
    shadowOffset: {
      width: 0,
      height: 2, // Shadow is applied to the bottom
    },
    shadowOpacity: 0.1, // Lower opacity for a greyish tone
    shadowRadius: 4, // The blur radius of the shadow
    elevation: 3, // Elevation for Android
  },
  buttonFlag: {
    width: 42,
    height: 42,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000', // Shadow is black
    shadowOffset: {
      width: 0,
      height: 2, // Shadow is applied to the bottom
    },
    shadowOpacity: 0.1, // Lower opacity for a greyish tone
    shadowRadius: 4, // The blur radius of the shadow
    elevation: 2, // Elevation for Android
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
  iconStyle: {
    marginTop: 40,
    alignSelf: 'center',
  },
  userNameTextStyle: {
    marginTop: 15,
    fontSize: 17,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  modalFlagButtonContainer: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagButtonContainer: {
    marginHorizontal: 5,
    width: 82,
    height: 49,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  textStyle: {
    marginRight: 9,
    color: '#ffffff',
  },
});

export default Homepage;
