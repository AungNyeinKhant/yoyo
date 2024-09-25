import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import theme from "../style/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import TextInputComponent from '../components/TextInput/TextInputComponent';

const ForgetPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    
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
  
    
  
    return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
          <View style={styles.container}>
            
            <View style={{width:'100%'}}>
              <Text style={[theme.colors.textDark,{fontWeight:'bold',fontSize:18}]}>Please enter your email address to reset your pincode</Text>
              <View style={{marginBottom: '150%'}}>
                <TextInputComponent
                  label=''
                  placeholder='Enter email address...'
                  value={email} 
                  onChangeText={setEmail}
                  keyboardType='email-address' 
                  isSecure={false}
                />
              </View>
              
              
              {showLoading && <ActivityIndicator size='large' />}
              
              <View>
                

                <TouchableOpacity
                  disabled={ showLoading}
                  style={[styles.button,{borderRadius:9}, ( showLoading) && styles.buttonDisabled]}
                  // onPress={handleLogin}
                  onPress={() => navigation.push('OtpVerificationScreen')}
                >
                  <Text style={styles.buttonText}>Send email</Text>
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
      // justifyContent: 'center',
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
  
  export default ForgetPassword;