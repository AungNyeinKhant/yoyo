import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RommCategoryListComponent from '../../../components/List/RoomCategoryListComponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import DetailAppBarComponent from '../../../components/AppBar/DetailAppBarComponent'
import DividerComponent from '../../../components/Divider/DividerComponent'
import { CommonStyles } from '../../../style/CommonStyles'

const RoomListPlain = ({navigation}) => {
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
          <DetailAppBarComponent title='Room Type' navigation={navigation}  />
          <DividerComponent />
          <RommCategoryListComponent 
                data={data2}
                navigation={navigation}
                type='category'
                onPress={() => navigation.push('AppStack', { screen: 'RoomDetailScreen' })}
          />
        </View>
    </SafeAreaView>
    
  )
}

export default RoomListPlain

const styles = StyleSheet.create({})