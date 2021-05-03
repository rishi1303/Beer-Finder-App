import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Searchscreen from './tabNavigator/searchscreen';
import Favouritescreen from './tabNavigator/favouritescreen';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    tabBarOptions={{
        labelStyle :{
            fontSize: 20,
            margin: 0,
            padding: 0,
        }
    }}
    >
      <Tab.Screen name="Search" component={Searchscreen} />
      <Tab.Screen name="Favourites" component={Favouritescreen} />
    </Tab.Navigator>
  );
}












export class Searchtabnavigator extends Component {
    render() {
        return (
            <MyTabs />
        )
    }
}

export default Searchtabnavigator;
