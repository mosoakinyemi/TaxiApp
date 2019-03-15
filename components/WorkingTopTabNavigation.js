import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header.js';
import GLOBALS from './Globals'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class Notifications extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Home: {screen:HomeScreen,
   navigationOptions: {
        title:'Play',
        tabBarIcon: ({ focused }) => (
          focused ?
          <Icon name="home" type="play" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color="#007700" />:
          <Icon name="home" type="play" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color="#000" />
        ),

      }},
          Notifications: {
      screen: Notifications,
      navigationOptions: {
        title:'Notifications',
        tabBarIcon: ({ focused }) => (
          focused ?
          <Icon name="play" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color="#007700" />:
          <Icon name="bell"  size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color="#000" />

        ),

      }
    },
  Settings: SettingsScreen,
},
{tabBarOptions: {
  showIcon:true,
   indicatorStyle: {
              backgroundColor: 'red',
          },
  labelStyle: {
    fontSize: 12,
  },
  tabStyle: {
    width: 100,
  },
  style: {
    backgroundColor: GLOBALS.COLORS.YELLOW,
  },
}}
);

const History = createAppContainer(TabNavigator);
export default History;
