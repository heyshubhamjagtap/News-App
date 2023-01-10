import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Search from './screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:'#1d3557'
    }}>
      <Tab.Screen name="Home" component={Home} 
      option={{
        tabBarIcon:()=><FontAwesome name='home' size={24}/>
       }}
      />
      <Tab.Screen name="Search" component={Search} 
       option={{
        tabBarIcon:()=><font name='search' size={24}/>
       }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f1faee'
  }
})