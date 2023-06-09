import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../features/ProfileView/screens/ProfileScreen';
import DummyScreen from '../features/ProfileView/screens/DummyScreen';
import DashboardScreen from '../features/Dashboard/screens/DashboardScreen';
import OpeningScreen from '../features/AppAccess/screens/OpeningScreen';
import LoginScreen from '../features/AppAccess/screens/LoginScreen';
import SendResetPasswordScreen from '../features/AppAccess/screens/SendResetPasswordScreen';

const Stack = createStackNavigator();

const NavigationStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="SendResetPasswordScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="DummyScreen" component={DummyScreen} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="OpeningScreen" component={OpeningScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="SendResetPasswordScreen"
        component={SendResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
