import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity,Alert, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GLOBALS from './Globals'

var wS = Dimensions.get('window');
var dh = wS.height;
var dw = wS.width;

export class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }



  render ()
   {
    return (
      <View style={{backgroundColor: '#f0f0f0', flex: 1}}>
          <View style={styles.sideHeader}>
              <Image source={require('../assets/cabwifi.png')} style= {styles.thumb} />
              <Text style={styles.sideTitle}>Moso Akinyemi</Text>
          </View>

          <TouchableOpacity
           style={[styles.menuBtn && this.props.activeItemKey === 'Booking' ? styles.currentMenu : styles.menuBtn ]}
            onPress={this.navigateToScreen('Booking')}>
              <Icon name="car-connected" size={20}
              style= {[styles.drawrIcon && this.props.activeItemKey === 'Booking' ? styles.currentIcon : styles.drawrIcon ]} />
              <Text style={[styles.menuTxt && this.props.activeItemKey === 'Booking' ? styles.currentText : styles.menuTxt ]}>
              Booking</Text>
          </TouchableOpacity>

          <TouchableOpacity
           style={[styles.menuBtn && this.props.activeItemKey === 'History' ? styles.currentMenu : styles.menuBtn ]}
            onPress={this.navigateToScreen('History')}>
              <Icon name="history" size={20}
              style= {[styles.drawrIcon && this.props.activeItemKey === 'History' ? styles.currentIcon : styles.drawrIcon ]} />
              <Text style={[styles.menuTxt && this.props.activeItemKey === 'History' ? styles.currentText : styles.menuTxt ]}>
              History</Text>
          </TouchableOpacity>

           <TouchableOpacity  style={[styles.menuBtn && this.props.activeItemKey === 'Notification' ? styles.currentMenu : styles.menuBtn ]}
            onPress={this.navigateToScreen('Notification')}>
                <Icon name="bell-ring" size={20}
                style= {[styles.drawrIcon && this.props.activeItemKey === 'Notification' ? styles.currentIcon : styles.drawrIcon ]} />
                <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',paddingRight: 10}}>
                <Text style={[styles.menuTxt && this.props.activeItemKey === 'Notification' ? styles.currentText : styles.menuTxt ]}>
                Notifications</Text>
                <Text style={[styles.notificationTxt,{backgroundColor: 'red'}]}>8</Text>
                </View>
           </TouchableOpacity>

           <TouchableOpacity   style={[styles.menuBtn && this.props.activeItemKey === 'Payment' ? styles.currentMenu : styles.menuBtn ]}
             onPress={this.navigateToScreen('Payment')}>
                <Icon name="credit-card" size={20}
                style= {[styles.drawrIcon && this.props.activeItemKey === 'Payment' ? styles.currentIcon : styles.drawrIcon ]} />
                <Text style={[styles.menuTxt && this.props.activeItemKey === 'Payment' ? styles.currentText : styles.menuTxt ]}>
                Payment</Text>
           </TouchableOpacity>

           <TouchableOpacity   style={[styles.menuBtn && this.props.activeItemKey === 'Coupon' ? styles.currentMenu : styles.menuBtn ]}
             onPress={this.navigateToScreen('Coupon')}>
                <Icon name="ticket-percent" size={20}
                style= {[styles.drawrIcon && this.props.activeItemKey === 'Coupon' ? styles.currentIcon : styles.drawrIcon ]} />
                <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',paddingRight: 10}}>
                <Text style={[styles.menuTxt && this.props.activeItemKey === 'Coupon' ? styles.currentText : styles.menuTxt ]}>
                Coupons</Text>
                <Text style={styles.notificationTxt}>3</Text>
                </View>
           </TouchableOpacity>

           <View style={styles.ruler} />

           <TouchableOpacity    style={[styles.menuBtn && this.props.activeItemKey === 'HelpCenter' ? styles.currentMenu : styles.menuBtn ]}
            onPress={this.navigateToScreen('HelpCenter')}>
                <Icon name="help-circle" size={20}
                style= {[styles.drawrIcon && this.props.activeItemKey === 'HelpCenter' ? styles.currentIcon : styles.drawrIcon ]} />
                <Text style={[styles.menuTxt && this.props.activeItemKey === 'HelpCenter' ? styles.currentText : styles.menuTxt ]}>
                Help Center</Text>
           </TouchableOpacity>

           <TouchableOpacity   style={[styles.menuBtn && this.props.activeItemKey === 'Settings' ? styles.currentMenu : styles.menuBtn ]}
              onPress={this.navigateToScreen('Settings')}>
                <Icon name="settings" size={20}
                style= {[styles.drawrIcon && this.props.activeItemKey === 'Settings' ? styles.currentIcon : styles.drawrIcon ]} />
                <Text style={[styles.menuTxt && this.props.activeItemKey === 'Settings' ? styles.currentText : styles.menuTxt ]}>
                Settings</Text>
           </TouchableOpacity>

           <TouchableOpacity   style={[styles.menuBtn && this.props.activeItemKey === 'About' ? styles.currentMenu : styles.menuBtn ]}
              onPress={this.navigateToScreen('About')}>
                <Icon name="information-outline" size={20}
                style= {[styles.drawrIcon && this.props.activeItemKey === 'About' ? styles.currentIcon : styles.drawrIcon ]} />
                <Text style={[styles.menuTxt && this.props.activeItemKey === 'About' ? styles.currentText : styles.menuTxt ]}>
                About</Text>
           </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideTitle:{
    fontSize: 18,
    fontWeight: '400',
    color: 'black'
  },
  notificationTxt:{
    backgroundColor: 'rgb(94, 170, 27)',
    color: '#fff',
    paddingHorizontal:  5,
    paddingVertical:3,
    borderRadius: 3
    },
  currentMenu:{
    paddingVertical: 12,
    backgroundColor: GLOBALS.COLORS.YELLOW,
   flexDirection:'row',
   justifyContent: 'flex-start',
   borderLeftWidth: 15,
   borderLeftColor: 'rgb(56, 56, 56)'
     },
    sideHeader:{
      height: (dh*0.2),
      alignItems:'center',
      justifyContent: 'center'
    },
    profileImg:{
      height: (dh*0.12),
      width: (dh*0.12),
      borderRadius:dh*0.06,
    },

   menuBtn:{
     paddingVertical: 12,
     borderColor: '#ddd',
    flexDirection:'row',
    justifyContent: 'flex-start'
      },

      ruler:{
        width:'100%',
        height:1,
        backgroundColor: '#ddd',
        marginVertical: 10
      },

  drawrIcon:{
  marginHorizontal: 20
    },

  menuTxt:{
  fontSize: 17,
  color:'black'
    },

  currentText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17
  },

  currentIcon:{
    color: '#000',
    marginHorizontal: 20
  },
  thumb:{
    width:dh*0.14,
    height:dh*0.14,
    resizeMode: 'contain',
    marginRight: 10,
    },
});
