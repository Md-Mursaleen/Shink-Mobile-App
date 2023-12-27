/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppProvider } from './src/contexts/AppContext';
import RootNavigation from './src/navigation/RootNavigation';
import { ImageContextProvider } from './src/contexts/ImageContext';

LogBox.ignoreAllLogs();


function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppProvider>
          <ImageContextProvider>
            <RootNavigation />
          </ImageContextProvider>
        </AppProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
