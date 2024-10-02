import { Alert, StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'
import { CommonStyles } from '../../../style/CommonStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import CarouselComponent from '../../../components/Caurosel/CauroselComponent'
import DetailAppBarComponent from '../../../components/AppBar/DetailAppBarComponent'
import RoomCategoryListComponent from '../../../components/List/RoomCategoryListComponent'
import DividerComponent from '../../../components/Divider/DividerComponent'
import Accordion from '../../../components/accordion/Accordion'
import AccordionText from '../../../components/accordion/AccordionText'
import AccordionIcons from '../../../components/accordion/AccordionIcons'


const RoomDetail = ({navigation}) => {
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

  const amenities = [
    { icon: 'snowflake-o', text: 'Air conditioner' },
    { icon: 'tv', text: 'Flat screen TV' },
    { icon: 'wifi', text: 'Wifi connection' },
    { icon: 'volume-off', text: 'Soundproofing' },
    { icon: 'tint', text: 'Pool view' },
    { icon: 'bath', text: 'Ensuite bathroom' },
    { icon: 'building-o', text: 'City view' },
    { icon: 'snowflake-o', text: 'Refrigerator' },
  ];

  return (

    <SafeAreaView style={{flex:1}}>
      <FlatList 
        ListHeaderComponent={
          <View style={[CommonStyles.scrollViewContainer,{flexGrow:1}]}>
          <DetailAppBarComponent title='Room Details' navigation={navigation}  />
          <DividerComponent />
            <View>
              <CarouselComponent data={data} setShowLoading={setShowLoading} navigation={navigation} carouselType='roomDetail' />
              <Text style={CommonStyles.subTitle}>Standard Rooms</Text>
              <Text style={CommonStyles.text}>
                  
                  <Text style={{fontWeight:'bold'}}>50</Text> rooms,<Text style={{fontWeight:'bold'}}>20</Text> available rooms
              </Text>
            </View>
            
            <Accordion 
              title='Basic'
              content={
                <FlatList
                  data={amenities}
                  keyExtractor={(item) => item.text}
                  numColumns={2}
                  renderItem={({ item }) => (
                    <AccordionIcons icon={item.icon} text={item.text} />
                  )}
                />
              }
            />
            <Accordion 
              title='Bedroom View'
              content={<AccordionText text='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />}
            />
            <Accordion 
              title='Bathroom View'
              content={<AccordionText text='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />}
            />
            <Accordion 
              title='View'
              content={<AccordionText text='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />}
            />


            <Text style={CommonStyles.subTitle}>Avaliable Rooms(5)</Text>
            <RoomCategoryListComponent 
                data={data2}
                navigation={navigation}
                type=''
                onPress={() => Alert.alert("Up to here page")}
            />
      </View>
        }
      />
      
    </SafeAreaView>

  )
}

export default RoomDetail

const styles = StyleSheet.create({})