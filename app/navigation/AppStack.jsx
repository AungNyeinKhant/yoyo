import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UnauthorizedScreen from '../screens/UnauthorizedScreen';
import { AuthContext } from '../context/AuthContext';
import RoomDetailScreen from '../screens/room/RoomDetailScreen';
import RoomCategoryCreateScreen from '../screens/room/create/RoomCategoryCreateScreen';
import RoomFacilityCreateScreen from '../screens/room/create/RoomFacilityCreateScreen';
import RoomBasicFeatureScreen from '../screens/room/create/RoomBasicFeatureScreen';
import RoomBedroomDetailScreen from '../screens/room/create/RoomBedRoomDetailScreen';
import RoomViewScreen from '../screens/room/create/RoomViewScreen';
import RoomRuleScreen from '../screens/room/create/RoomRuleScreen';
import RoomPhotoScreen from '../screens/room/create/RoomPhotoScreen';
import SuccessScreenComponent from '../components/screen/SuccessScreenComponent';
import SearchScreen from '../components/screen/SearchScreen';
import BookingDetailScreen from '../screens/booking/BookingDetailScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CheckInStatusScreen from '../screens/CheckInStatusScreen';
import BookingRoomCategoryScreen from '../screens/booking/BookingRoomCategoryScreen';
import BookingRoomListScreen from '../screens/booking/BookingRoomListScreen';
import CreateBookingScreen from '../screens/booking/CreateBookingScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const hiddenHeaderOptions = { headerShown: false };

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Welcome To YoYo' }} />
      <Stack.Screen name='Unauthorized' component={UnauthorizedScreen} options={hiddenHeaderOptions} />
      {/* Room */}
      <Stack.Screen name="RoomDetailScreen" component={RoomDetailScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomCategoryCreateScreen' component={RoomCategoryCreateScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomFacilityCreateScreen' component={RoomFacilityCreateScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomBasicFeatureScreen' component={RoomBasicFeatureScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomBedroomDetailScreen' component={RoomBedroomDetailScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomViewScreen' component={RoomViewScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomRuleScreen' component={RoomRuleScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomPhotoScreen' component={RoomPhotoScreen} options={hiddenHeaderOptions}/>
      {/* Booking */}
      <Stack.Screen name='BookingDetailScreen' component={BookingDetailScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='SuccessScreen' component={SuccessScreenComponent} options={hiddenHeaderOptions}/>
      <Stack.Screen name='SearchScreen' component={SearchScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='BookingRoomCategoryScreen' component={BookingRoomCategoryScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='BookingRoomListScreen' component={BookingRoomListScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='CreateBookingScreen' component={CreateBookingScreen} options={hiddenHeaderOptions}/>
      {/* Payment */}
      <Stack.Screen name='PaymentScreen' component={PaymentScreen} options={hiddenHeaderOptions}/>
      <Stack.Screen name='CheckInStatusScreen' component={CheckInStatusScreen} options={hiddenHeaderOptions}/>
    </Stack.Navigator>
  );
};

export default AppStack;
