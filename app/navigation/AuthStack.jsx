import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/Register';
import OtpVerification from '../screens/OtpVerification';
import ForgetPassword from '../screens/ForgetPassword';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='WelcomeScreen'>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false }} />      
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: true, title:'Login' }} />      
      <Stack.Screen name='RegisterScreen' component={Register} options={{ headerShown: true, title:'Register' }} />
      <Stack.Screen name='OtpVerificationScreen' component={OtpVerification} options={{ headerShown: true, title:'Otp Verification' }} />
      <Stack.Screen name='ForgetPasswordScreen' component={ForgetPassword} options={{ headerShown: true, title:'Forget Password' }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
