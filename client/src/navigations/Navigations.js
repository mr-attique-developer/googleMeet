import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PrepareMeetScreen from '../screens/PrepareMeetScreen';
import JoinMeetScreen from '../screens/JoinMeetScreen';
import LiveMeetScreen from '../screens/LiveMeetScreen';
import SplashScreen from '../screens/SplashScreen';
import { navigationRef } from '../utils/NavigationUtils';


const stack = createNativeStackNavigator()

const Navigations = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
        <stack.Screen name='HomeScreen' component={HomeScreen}/>
        <stack.Screen name='PrepareMeetScreen' component={PrepareMeetScreen}/>
        <stack.Screen name='JoinMeetScreen' component={JoinMeetScreen}/>
        <stack.Screen name='LiveMeetScreen' component={LiveMeetScreen}/>
        <stack.Screen name='SplashScreen' component={SplashScreen}/>
      </stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigations