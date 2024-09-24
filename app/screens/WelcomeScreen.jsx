import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { CommonStyles } from "../style/CommonStyles";
import theme from "../style/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    button: {
      marginTop:50,
      width: 300,
      height: 50,
      borderTopLeftRadius:30,
      borderBottomLeftRadius:30,
      borderTopRightRadius:30,
      borderBottomRightRadius:30,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    label: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})

export default function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex : 1}}>
            <Image source={require('../assets/images/hero1.png')} resizeMode="cover" style={{width:'100%',height:433}} alt="Hotel hero image" />
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
                    <TouchableOpacity style={styles.button}
                        onPress={() => {navigation.push('LoginScreen')}}
                    >
                        <Text style={styles.label}>Access Marketplace</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </SafeAreaView>
        
    );
}
