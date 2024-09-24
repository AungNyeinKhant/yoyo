import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import theme from "../style/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const LoginScreen = () => {
    const [username, setUsername] = useState('test1@gmail.com');
    const [password, setPassword] = useState('Password@1');
    const [showLoading, setShowLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation();
  
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
          <View style={styles.container}>
            <Image source={require('../assets/images/login.png')} resizeMode="cover" style={{width:'100%',height:223}} alt="Login image" />
            <View style={{width:'100%'}}>
            {/* style={styles.card} */}
              <Text style={styles.inputTitle}>Email Address</Text>
              <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email address..."
                  value={username}
                  onChangeText={setUsername}
                  placeholderTextColor="#999"
                />
              </View>
              <Text style={styles.inputTitle}>Password</Text>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password..."
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!isPasswordVisible}
                  placeholderTextColor="#999"
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <Icon
                    name={isPasswordVisible ? "eye" : "eye-slash"}
                    size={20}
                    color="#000"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{alignSelf: 'flex-end',marginBottom:20}}>
                <Text style={styles.forgetPasswordText}>Forget Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={isButtonDisabled || showLoading}
                style={[styles.button,{borderRadius:9}, (isButtonDisabled || showLoading) && styles.buttonDisabled]}
                // onPress={handleLogin}
                onPress={() => Alert.alert('You press login',"description")}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
              {showLoading && <ActivityIndicator size='large' />}
              
              <Text style={styles.createAccountText}>
                Dont have an account?
                <TouchableOpacity>
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