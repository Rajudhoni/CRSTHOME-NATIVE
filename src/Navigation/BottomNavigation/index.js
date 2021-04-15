/* eslint-disable */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../../screens/Dashboard';


const Tab = createBottomTabNavigator();
const  BottomTabs = ()=> {
    

  return (
    <Tab.Navigator
    tabBarOptions={{
        tabStyle: {
            textAlign: 'center',
            fontSize: 40,
            backgroundColor: 'pink',
            display: 'flex',
            justifyContent: 'center'
        }, 
        labelStyle: {
            fontSize: 14,
            fontWeight: 'bold'
          },
         
        
    }}
    >
      <Tab.Screen  name="Schedule" component={Dashboard} />
      <Tab.Screen name="Products" component={Dashboard} />
      <Tab.Screen name="Notifications" component={Dashboard} />
      <Tab.Screen name="Chat" component={Dashboard} />
    </Tab.Navigator>
  );
}


export default BottomTabs;