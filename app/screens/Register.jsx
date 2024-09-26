import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import theme from "../style/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import TextInputComponent from '../components/TextInput/TextInputComponent';
import PhoneInputComponent from '../components/TextInput/PhoneInputComponent';
import DetailAppBarComponent from '../components/AppBar/DetailAppBarComponent';
import DividerComponent from '../components/Divider/DividerComponent';
import DefaultButtonComponent from "../components/Button/DefaultButtonComponent";
import { CommonStyles } from '../style/CommonStyles';

const Register = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [refferCode, setRefferCode] = useState();
    const [showLoading, setShowLoading] = useState(false);
    
  
    // Check token valid
    useEffect(() => {
      const checkToken = async () => {
        const isValid = await AccessTokenService._TokenValidation();
        if (isValid) {
          navigation.navigate('TabStack');
        } else {
          navigation.navigate('Login');
        }
      }
      // checkToken();
    }, []);
  
    const handleLogin = () => {
      setShowLoading(true);
      // Basic validation
      if (username === '' || password === '') {
        Alert.alert('Error', 'Please enter both username and password.');
        setShowLoading(false);
        return;
      }
      LoginService({ username, password }, navigation, setShowLoading);
    };
  
    const isButtonDisabled = username === '' || password === '';
  
    return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView style={CommonStyles.container} >
          <DetailAppBarComponent 
            title='Register'
            navigation={navigation} 
          />
          <DividerComponent />

          <View style={CommonStyles.scrollViewContainer}>
            <Image source={require('../assets/images/login.png')} resizeMode="cover" style={{width:'100%',height:223}} alt="Login image" />
            <View style={{width:'100%'}}>

              <TextInputComponent
                label='Username'
                placeholder='Username...'
                value={username} 
                onChangeText={setUsername}
                keyboardType='' 
                isSecure={false}
              />

              <TextInputComponent
                label='Email'
                placeholder='Email...'
                value={email} 
                onChangeText={setEmail}
                keyboardType='email-address' 
                isSecure={false}
              />
              <PhoneInputComponent
                label='Phone'
                value={phone}
                onChange={setPhone}
              />

              <TextInputComponent
                label='Create Pin'
                placeholder='Enter 4 digit pin...'
                value={password} 
                onChangeText={setPassword}
                keyboardType='' 
                isSecure={false}
              />

              <TextInputComponent
                label='Refferal code'
                placeholder='Refferal code...'
                value={refferCode} 
                onChangeText={setRefferCode}
                keyboardType='numeric' 
                isSecure={false}
              />

                <Text style={[styles.createAccountText,{marginBottom:10,alignSelf:'flex-end'}]}>
                  Already have an account?
                  <TouchableOpacity 
                    onPress={() => navigation.push('LoginScreen')}
                  >
                    <Text style={styles.signUpText}>Sign In</Text>
                  </TouchableOpacity>
                </Text>
              
              {/* <TouchableOpacity
                disabled={isButtonDisabled || showLoading}
                style={[styles.button,{borderRadius:9}, (isButtonDisabled || showLoading) && styles.buttonDisabled]}
                // onPress={handleLogin}
                onPress={() => navigation.push('OtpVerificationScreen')}
              >
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity> */}

              <DefaultButtonComponent 
                title='Register'
                backgroundColor={theme.colors.primary}
                onPress={() => {navigation.push('OtpVerificationScreen')}}
                color={theme.colors.textLight}
                otherStyle={{width:370,height:60,marginBottom:20}}
                otherTextStyle={{fontSize:22}}
                disable={isButtonDisabled || showLoading}
              />

              {showLoading && <ActivityIndicator size='large' />}
              
              
              
              

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    logo: {
      marginBottom: 24,
    },
    card: {
      marginTop: -40,
      width: '100%',
      padding: 30,
      borderRadius: 8,
      backgroundColor: theme.colors.textLight,
      shadowColor: theme.colors.textDark,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.colors.borderColor,
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 16,
      paddingHorizontal: 8,
      backgroundColor: theme.colors.inputBackgroundColor,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 50, // Increase the height of the TextInput
      color: theme.colors.textDark,
    },
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 15, // Increase the vertical padding
      paddingHorizontal: 25, // Increase the horizontal padding
      borderRadius: 30, // Increase the border radius
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonDisabled: {
      backgroundColor: theme.colors.borderColor,
    },
    buttonText: {
      color: theme.colors.textLight,
      fontSize: 18, // Increase the font size
    },
    forgetPasswordText: {
      color: theme.colors.primary,
      textDecorationLine: 'underline',
      textAlign: 'center',
      marginTop: 10,
      fontWeight:'bold'
    },
    createAccountText: {
      color: theme.colors.infoText,
      textAlign: 'center',
      marginTop: 10,
    },
    signUpText: {
      color:theme.colors.primary,
      textDecorationLine: 'underline',
      textAlign: 'center',
      marginTop: 5,
      fontWeight:'bold'
    },
    inputTitle : {alignSelf:'flex-start',color: theme.colors.textDark, fontWeight: 'bold',marginBottom:20}
  });
  
  export default Register;