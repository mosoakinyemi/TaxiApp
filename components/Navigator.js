import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer,createDrawerNavigator} from "react-navigation";
import {Booking} from './Booking.js';
import {Notification} from './Notification.js'
import {Coupon} from './Coupon.js'
import {History} from './History.js'
import {Payment} from './Payment.js'
import {HelpCenter} from './HelpCenter.js'
import {Settings} from './Settings.js'
import {About} from './About.js'
import {SideMenu} from "./SideMenu.js";


export const DrawerNavigator = createDrawerNavigator (
  {
    Booking:{screen:Booking},
    History:{screen:History},
    Notification:{screen:Notification},
    Payment:{screen:Payment},
    Coupon:{screen:Coupon},
		HelpCenter:{screen:HelpCenter},
		Settings:{screen:Settings},
		About:{screen:About}

  },
  {
  contentComponent:(props) => <SideMenu {...props} />,
  contentOptions: {
      inactiveTintColor: "#ffffff",
      activeTintColor: '#d61394',
      activeBackgroundColor: "#ba7b93",
    },
  drawerWidth: (Dimensions.get('window').width)*0.6,
	}
);
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;
