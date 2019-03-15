import React, {Component} from 'react';
import { Text, View ,Dimensions} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header.js';
import GLOBALS from './Globals'
import {HistoryScreen} from './History/HistoryScreen'
import {ActiveScreen} from './History/ActiveScreen'
import {HistoryDetail} from './History/HistoryDetail.js'
import {Trial} from './Trial.js'


var wS = Dimensions.get('window');
var dh = wS.height;
var dw = wS.width;


class HistoryHome extends Component{
  render() {
    return (
      <View style={{flex: 1}}>
				<Header title="History" rightIcon="magnify" navigation={this.props.navigation}
        desc="You clicked Search History" />
        <HistoryStack  />
      </View>
    );
  }
}

const TabNav = createMaterialTopTabNavigator({
  ActiveScreen: {screen:ActiveScreen,
   navigationOptions: {
        title:'Active',
        tabBarIcon: ({ focused }) => (
          focused ?
          <Icon name="account-convert"  size={20} iconStyle={{paddingBottom:0,paddingTop:0}} color={GLOBALS.COLORS.ORANGE} />:
          <Icon name="account-convert"  size={20} iconStyle={{paddingBottom:0,paddingTop:0}} color="#000" />
        ),

      }},
          HistoryScreen: {
      screen: HistoryScreen,
      navigationOptions: {
        title:'History',
        tabBarIcon: ({ focused }) => (
          focused ?
          <Icon name="history" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color={GLOBALS.COLORS.ORANGE} />:
          <Icon name="history"  size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color="#000" />

        ),

      }
    }
},
{tabBarOptions: {

  tabStyle: {
    width: dw/2,
  },
  showIcon:true,
   indicatorStyle: {
              backgroundColor:GLOBALS.COLORS.YELLOW,
              height:5
          },
  labelStyle: {
    marginVertical:0,
    fontSize: 17,
    fontWeight:'bold',
    color:'black',
  },
  style: {
    backgroundColor: '#d2d2d2',
  },
  tabBarSelectedItemStyle: {
            backgroundColor:GLOBALS.COLORS.YELLOW,
        }
}}
);

const HistoryStack = createAppContainer(TabNav);

const HistoryRoot =  createStackNavigator({
 HistoryHome:{screen:HistoryHome,navigationOptions: { header: null }},
  TabNav:{screen:TabNav},
 HistoryDetail:{screen:HistoryDetail},
  HistoryScreen:{screen:HistoryScreen},
 });

export const History = createAppContainer(HistoryRoot);
