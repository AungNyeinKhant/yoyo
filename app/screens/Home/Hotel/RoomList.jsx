import { StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'
import { CommonStyles } from '../../../style/CommonStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import CarouselComponent from '../../../components/Caurosel/CauroselComponent'
import DetailAppBarComponent from '../../../components/AppBar/DetailAppBarComponent'
import RoomCategoryListComponent from '../../../components/List/RoomCategoryListComponent'
import DividerComponent from '../../../components/Divider/DividerComponent'


const RoomList = ({navigation}) => {
  const [showLoading, setShowLoading] = useState(false);

  const data = [
    {
      id : 0,
      url : 'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?semt=ais_hybrid',
      link: ''
    },
    {
      id:1,
      url : 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?semt=ais_hybrid',
      link: ''
    },
    {
      id:2,
      url:'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18727.jpg?semt=ais_hybrid',
      link: ''
    }
  ]

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


  if(showLoading){
    return(<BookingSkeletonComponent />)
  }

  return (

    <SafeAreaView style={{flex:1}}>
      <View style={[CommonStyles.scrollViewContainer,{flexGrow:1}]}>
          <DetailAppBarComponent title='' navigation={navigation}  />
          <DividerComponent />
            <View>
              <CarouselComponent data={data} setShowLoading={setShowLoading} navigation={navigation} carouselType='roomList' />
              <Text style={CommonStyles.subTitle}>A Hotels</Text>
              <Text style={CommonStyles.text}>
                  
                  120 Baho Road,Hlaing, Yangon
              </Text>
            </View>
            <RoomCategoryListComponent 
                data={data2}
                navigation={navigation}
                type='category'
                onPress={() => navigation.push('AppStack', { screen: 'RoomDetailScreen' })}
            />
      </View>
      <View>
        
      </View>
    </SafeAreaView>

  )
}

export default RoomList

const styles = StyleSheet.create({})