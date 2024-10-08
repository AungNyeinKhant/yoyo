import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
// import WelcomeScreen from '../screens/WelcomeScreen';
// import Home from '../screens/Home/Home';
import RoomCategory from '../screens/Home/Room/RoomCategory';
import RoomCategoryAll from '../screens/Home/Room/RoomCategoryAll';

import RoomList from '../screens/Home/Room/RoomList';
import RoomListAll from '../screens/Home/Room/RoomListAll';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const hiddenHeaderOptions = { headerShown: false };

  return (
    <Stack.Navigator initialRouteName=''>
      
      {/* <Stack.Screen name='HomeScreen' component={Home} options={hiddenHeaderOptions}/> */}
      <Stack.Screen name='RoomCategoryScreen' component={RoomCategory} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomCategoryAllScreen' component={RoomCategoryAll} options={hiddenHeaderOptions}/>
      
      <Stack.Screen name='RoomListScreen' component={RoomList} options={hiddenHeaderOptions}/>
      <Stack.Screen name='RoomListAllScreen' component={RoomListAll} options={hiddenHeaderOptions}/>
    </Stack.Navigator>
  );
};

export default AppStack;
