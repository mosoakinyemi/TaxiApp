import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header.js';


  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export class Coupon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Coupons" rightIcon="info-circle" navigation={this.props.navigation}
        desc="You clicked Search Coupons" />
        <View style={styles.body}>
                <Icon name="ticket-percent" size={dh/4} style= {styles.drawrIcon} />
                <Text style={styles.infoTxt}>{`Coupons Fragment`}</Text>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  body: {
    marginTop: (dh/5),
    flex: 1,
    alignItems: 'center',
    flexWrap:'wrap'
  },
  infoTxt:{
      fontSize: 27,

  },

    drawrIcon:{
      color:'rgb(207, 24, 150)',
      margin:15,
      },

});
