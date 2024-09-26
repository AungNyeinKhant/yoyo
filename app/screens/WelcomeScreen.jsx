import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CommonStyles } from "../style/CommonStyles";
import theme from "../style/colors";
import heroImg from '../assets/images/hero1.png'
import { TouchableOpacity } from "react-native-gesture-handler";
import DefaultButtonComponent from "../components/Button/DefaultButtonComponent";



export default function WelcomeScreen({navigation}) {

    return (
        <SafeAreaView style={{flex : 1}}>
            <Image source={heroImg} resizeMode="cover" style={{width:'100%',height:433}} alt="Hotel hero image" />
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }} 
                style={CommonStyles.scrollViewContainer}
            >
                
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{fontSize: 35,
                        fontWeight: 'bold',
                        color:theme.colors.textDark,
                        marginTop:30,
                        textAlign: 'center'
                        }}>
                        Find your best comfortable hotel.
                    </Text>
                    <Text style={[CommonStyles.text,{marginTop:30,textAlign:'center',lineHeight:30}]}>Express Your Creativity With Using Our App Using Our Primitive </Text>
                    
                </View>
                

                <View style={{flex:1,alignItems:'center',marginTop:10}}>
                    {/* <TouchableOpacity style={styles.button}
                        onPress={() => {navigation.push('LoginScreen')}}
                    >
                        <Text style={styles.label}>Access Marketplace</Text>
                    </TouchableOpacity> */}
                    <DefaultButtonComponent 
                        title='Access Marketplace'
                        backgroundColor={theme.colors.primary}
                        onPress={() => {navigation.push('LoginScreen')}}
                        color={theme.colors.textLight}
                        otherStyle={{width:370,height:60,borderRadius:37}}
                        otherTextStyle={{fontSize:22}}
                    />
                </View>
            </ScrollView>
            
        </SafeAreaView>
        
    );
}
