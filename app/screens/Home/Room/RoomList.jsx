import { Alert, StyleSheet, Text, View } from 'react-native'
import {useState,useEffect} from 'react'
import { CommonStyles } from '../../../style/CommonStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CarouselComponent from '../../../components/Caurosel/CauroselComponent'
import DetailAppBarComponent from '../../../components/AppBar/DetailAppBarComponent'
import RoomCategoryListComponent from '../../../components/List/RoomCategoryListComponent'
import DividerComponent from '../../../components/Divider/DividerComponent'
import Accordion from '../../../components/accordion/Accordion'
import AccordionText from '../../../components/accordion/AccordionText'
import AccordionIcons from '../../../components/accordion/AccordionIcons'
import SeeMoreComponent from '../../../components/screen/SeeMoreComponent'
import CarouselSkeletonComponent from '../../../components/Skeleton/CauroselSkeletonComponent'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ListSkeletonComponent from '../../../components/Skeleton/ListSkeletonComponent'
import DummyData from '../../../config/DummyData.json'

const RoomDetail = ({navigation}) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => setShowLoading(false), 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  })

  if(showLoading){
    return(
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={[CommonStyles.scrollViewContainer]}>
          <CarouselSkeletonComponent />
          <ListSkeletonComponent />
      </View>
      </GestureHandlerRootView>
    )
  }

  const data = DummyData.data

  const data2 = DummyData.data2


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


            <SeeMoreComponent title='Avaliable Rooms(5)' onPress={()=> navigation.navigate('RoomListAllScreen')} />

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