import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import theme from "../style/colors";
import loginImg from '../assets/images/login.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import TextInputComponent from '../components/TextInput/TextInputComponent';
import DetailAppBarComponent from '../components/AppBar/DetailAppBarComponent';
import DividerComponent from '../components/Divider/DividerComponent';
import { CommonStyles } from '../style/CommonStyles';
import DefaultButtonComponent from '../components/Button/DefaultButtonComponent';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('test1@gmail.com');
    const [password, setPassword] = useState(1214);
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
      if (email === '' || password === '') {
        Alert.alert('Error', 'Please enter both email and password.');
        setShowLoading(false);
        return;
      }
      LoginService({ email, password }, navigation, setShowLoading);
    };
  
    const isButtonDisabled = email === '' || password === '';
  
    return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView style={CommonStyles.container} >

          <DetailAppBarComponent 
            title='Login'
            navigation={navigation} 
          />
          <DividerComponent />

          <View style={CommonStyles.scrollViewContainer}>
            <Image source={loginImg} resizeMode="cover" style={{width:'100%',height:223}} alt="Login image" />
            <View >
              

              <TextInputComponent 
                label='Email Address' 
                placeholder='Email address...' 
                value={email} 
                onChangeText={setEmail} 
                keyboardType='email-address'
                isSecure={false}
              />


              <TextInputComponent 
                label='Pin' 
                placeholder='Enter 4 digit pin...' 
                value={password} 
                onChangeText={setPassword} 
                keyboardType='numeric'
                isSecure={true}
              />

              <TouchableOpacity style={{alignSelf: 'flex-end',marginBottom:20}}
                onPress={() => navigation.push('ForgetPasswordScreen')}
              >
                <Text style={styles.forgetPasswordText}>Forgot Pin</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                disabled={isButtonDisabled || showLoading}
                style={[styles.button,{borderRadius:9}, (isButtonDisabled || showLoading) && styles.buttonDisabled]}
                // onPress={handleLogin}
                onPress={() => navigation.push('OtpVerificationScreen')}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity> */}

              <DefaultButtonComponent 
                title='Login'
                backgroundColor={theme.colors.primary}
                onPress={() => {navigation.push('OtpVerificationScreen')}}
                color={theme.colors.textLight}
                otherStyle={{width:370,height:60}}
                otherTextStyle={{fontSize:22}}
                disable={isButtonDisabled || showLoading}
              />
              {showLoading && <ActivityIndicator size='large' />}
              
              <Text style={styles.createAccountText}>
                Dont have an account?
                <TouchableOpacity 
                  onPress={() => navigation.push('RegisterScreen')}
                >
                  <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
              </Text>


              <Text style={[styles.createAccountText, {color : theme.colors.textDark,marginBottom: 15,marginTop: 20}]}>
                  Or sign up with
              </Text>
              <View style={[styles.container,{flexDirection:'row'}]}>
                <TouchableOpacity>
                  <Image source={require('../assets/icons/googleIcon.png')} style={{width:50,height:50,marginRight:25}} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image source={require('../assets/icons/facebookIcon.png')} style={{width:50,height:50,marginRight:25}} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image source={require('../assets/icons/appleIcon.png')} style={{width:40,height:40,marginLeft:5}} />
                </TouchableOpacity>
              </View>

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
  
  export default LoginScreen;