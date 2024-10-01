import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { CommonStyles } from '../../style/CommonStyles'
import BookingSkeletonComponent from '../../components/Skeleton/BookingSkeletonComponent'
import CarouselComponent from '../../components/Caurosel/CauroselComponent'
import CardComponent from '../../components/Card/CardComponent'




const Hotel = ({navigation}) => {
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


  if(showLoading){
    return(<BookingSkeletonComponent />)
  }

  return (

    <SafeAreaView style={{flex:1}}>
      <View style={[CommonStyles.scrollViewContainer,{flexGrow:1}]}>
          <Text style={CommonStyles.subTitle}>Top Hotels</Text>
          {/* <FlatList 
            ListHeaderComponent={}
            // data={{}} // data for side 2 side
            // keyExtractor={(item) => item.id}
            // renderItem={CardComponent}
            // numColumns={2}
            // contentContainerStyle={{}}
          /> */}
          <CarouselComponent data={data} setShowLoading={setShowLoading} navigation={navigation} />
      </View>
    </SafeAreaView>

  )
}

export default Hotel

const styles = StyleSheet.create({})