import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { CommonStyles } from '../../style/CommonStyles'
import BookingSkeletonComponent from '../../components/Skeleton/BookingSkeletonComponent'
import CarouselComponent from '../../components/Caurosel/CauroselComponent'
import HotelCard from '../../components/Card/HotelCard'
import SeeMoreComponent from '../../components/screen/SeeMoreComponent'
import CarouselSkeletonComponent from '../../components/Skeleton/CauroselSkeletonComponent'





const Hotel = ({navigation}) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(()=>{
    // const timer = setTimeout(() => setShowLoading(false), 2000);

    // Cleanup timer on unmount
    // return () => clearTimeout(timer);
  })

  if(showLoading){
    return(<>
      <CarouselSkeletonComponent />
    </>)
  }

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
    }];


    const hotels = [
      {
        id : 0,
        image : 'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?semt=ais_hybrid',
        name: '1st Hotel',
        location: 'Calabar'
      },
      {
        id:1,
        image : 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?semt=ais_hybrid',
        name: '2nd Hotel',
        location: 'Calabar'
      },
      {
        id:2,
        image:'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18727.jpg?semt=ais_hybrid',
        name: '3rd Hotel',
        location: 'Calabar'
      },
      {
        id : 3,
        image : 'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?semt=ais_hybrid',
        name: '4th Hotel',
        location: 'Calabar'
      },
      {
        id:4,
        image : 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?semt=ais_hybrid',
        name: '5th Hotel',
        location: 'Calabar'
      },
  ]


  if(showLoading){
    return(<BookingSkeletonComponent />)
  } 

  return (

    <SafeAreaView style={{flex:1}}>
      <View style={[CommonStyles.scrollViewContainer,{flexGrow:1}]}>
          <Text style={CommonStyles.subTitle}>Top Hotels</Text>
          <CarouselComponent data={data} setShowLoading={setShowLoading} navigation={navigation} carouselType='home' />
          <SeeMoreComponent title='Hotels Nearby' onPress={()=> {}} />
          <FlatList
            data={hotels}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <HotelCard hotel={item} onPress={() => navigation.navigate('AppStack', { screen: 'RoomCategoryScreen' })} />}
            numColumns={2}
            contentContainerStyle={{marginTop:20}}
          />
           
      </View>
    </SafeAreaView>

  )
}

export default Hotel

const styles = StyleSheet.create({})