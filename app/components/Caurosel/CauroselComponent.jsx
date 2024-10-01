import React, { useState, useEffect } from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const CarouselComponent = ({ data, setShowLoading,navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    if (loadedImages === data.length) {
      console.log("Image load finished");
      setShowLoading(false);
    }
  }, [loadedImages, data.length, setShowLoading]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <TouchableOpacity
          onPress={() => navigation.push('AppStack', { screen: 'RoomListScreen' })}
          
        >
          <Image 
            source={{ uri: item.url }} 
            style={styles.image} 
            onLoadEnd={() => setLoadedImages(loadedImages + 1)}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginTop:20}}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
        
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: viewportWidth*0.9,
    height: 230,
    justifyContent: 'center',
    borderRadius:13,
    overflow:'hidden'
  },
  image: {
    width: '100%',
    height: 230,
    
    // borderRadius:25
  },
  paginationContainer: {
    paddingVertical: 10
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'black'
  },
  inactiveDotStyle: {
    backgroundColor: 'gray'
  }
});

export default CarouselComponent;
