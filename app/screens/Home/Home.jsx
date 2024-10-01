import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hotel from './Hotel';
import Apartment from './Apartment';
import AppBarComponent from '../../components/AppBar/AppBarComponent'


const TopBar = () => {
    const TopTab = createMaterialTopTabNavigator();

    return(
        <>
            <AppBarComponent 
                title='Home'
            />
            <TopTab.Navigator
                screenOptions={{
                    swipeEnabled:false
                }}
            >
                <TopTab.Screen name='Hotel' component={Hotel} />
                <TopTab.Screen name='Apartment' component={Apartment} />
            </TopTab.Navigator>
        </>
        
    )
}


const Home = () => {
    

  return (
    <TopBar />
  )
}

export default Home

const styles = StyleSheet.create({})