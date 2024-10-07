import { Image, StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DetailAppBarComponent from '../../../components/AppBar/DetailAppBarComponent'
import RoomCategoryListComponent from '../../../components/List/RoomCategoryListComponent'
import DividerComponent from '../../../components/Divider/DividerComponent'
import BottomSheetComponent from '../../../components/BottomSheet/BottomSheetComponent'
import { CommonStyles } from '../../../style/CommonStyles'
import discountIcon from '../../../assets/icons/discountIcon.png'
import DefaultButtonComponent from '../../../components/Button/DefaultButtonComponent'
import theme from '../../../style/colors'
import { ScrollView } from 'react-native-gesture-handler'

const RoomDetailPlain = ({navigation}) => {
    const [visible,SetVisible] = useState(false);

    const data2 = [
        {
          id : 0,
          numberOfRooms : 3,
          roomStatus : 'available',
          roomPhoto : 'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?semt=ais_hybrid',
          roomName: 'Standard Room',
          priceKyats : 30000,
          roomNumber: 204,
          roomCategory: 'Budget',
          link: ''
        },
        {
          id : 1,
          numberOfRooms : 3,
          roomStatus : 'available',
          roomPhoto : 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?semt=ais_hybrid',
          roomName: 'Double Room',
          priceKyats : 30000,
          roomNumber: 204,
          roomCategory: 'Premium',
          link: ''
        },
        {
          id : 2,
          numberOfRooms : 3,
          roomStatus : 'available',
          roomPhoto : 'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18727.jpg?semt=ais_hybrid',
          roomName: 'Triple Room',
          priceKyats : 30000,
          roomNumber: 204,
          roomCategory: 'Premium',
          link: ''
        }
      ]

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={[CommonStyles.scrollViewContainer,{flexGrow:1}]}>
          <DetailAppBarComponent title='Standard Room' navigation={navigation}  />
          <DividerComponent />
          <RoomCategoryListComponent 
                data={data2}
                navigation={navigation}
                type=''
                onPress={() => SetVisible(true)}
            />
          <BottomSheetComponent
            title='Do you know?'
            isVisible={visible}
            onClose={() => SetVisible(false)}
          >
            <View style={{flex:1}}>
              <View style={styles.imgContainer}>
                <Image source={discountIcon} style={styles.image} />
              </View>
              <Text style={[CommonStyles.subTitle,{height:110,marginTop:50,marginBottom:20,textAlign:'center',fontSize:24}]}>Booking with an account is 10% discount on reservation.</Text>
              <DefaultButtonComponent 
                title='Book with an account'
                backgroundColor={theme.colors.primary}
                color={theme.colors.textLight}
                otherStyle={{height:60,borderRadius:30}}
              />
              <DefaultButtonComponent 
                title='Book without account'
                backgroundColor={theme.colors.textLightGray}
                color={theme.colors.textDark}
                otherStyle={{height:60,borderRadius:30}}
              />

            </View>
          </BottomSheetComponent>
        </View>
    </SafeAreaView>
  )
}

export default RoomDetailPlain

const styles = StyleSheet.create({
  imgContainer :{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  image:{
    width:90,
    height:90
  }

})