/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppProvider } from './src/contexts/AppContext';
import RootNavigation from './src/navigation/RootNavigation';

LogBox.ignoreAllLogs();


function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppProvider>
          <RootNavigation />
        </AppProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
