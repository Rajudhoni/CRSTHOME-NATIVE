/* eslint-disable */

import React from 'react';
import {  Text, View, SafeAreaView } from 'react-native';
import MainNavigation from './src/Navigation/MainNavigation';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
const App = () => {
  return (
    <>
      <PaperProvider>
         <MainNavigation />
      </PaperProvider>

      
    </>
  )
}

export default App


