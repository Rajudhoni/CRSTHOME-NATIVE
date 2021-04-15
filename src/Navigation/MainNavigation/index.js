
/* eslint-disable */

import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from '../BottomNavigation';
import ListItem from '../../components/ListItem';


const Stack = createStackNavigator();
const  MainNavigation = () =>  {
  return (
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}}>
                 <Stack.Screen name="Home"
                              component={BottomTabs} 
                              options={{
                                headerShown: false,
                                title: 'HomeScreen'
                            }}
                />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;