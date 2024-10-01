import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import WelcomeScreen from '../screens/WelcomeScreen';
import Home from '../screens/Home/Home';
import RoomList from '../screens/Home/Hotel/RoomList';
import RoomDetail from '../screens/Home/Hotel/RoomDetail';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const hiddenHeaderOptions = { headerShown: false };

  return (
    <Stack.Navigator initialRouteName=''>
      
      {/* <Stack.Screen name='HomeScreen' component={Home} options={hiddenHeaderOptions}/> */}
      <Stack.Screen name='RoomListScreen' component={RoomList} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomDetailScreen' component={RoomDetail} options={hiddenHeaderOptions}/>
    </Stack.Navigator>
  );
};

export default AppStack;
