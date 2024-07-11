import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistorialScreen from '../screens/HistorialScreen';
import Operaciones from '../screens/Operaciones';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';



// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator  screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Historial" component={HistorialScreen} />
            <Tab.Screen name="Operaciones" component={Operaciones} />
        </Tab.Navigator>
    );
}

// Stack Navigator
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}





export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
