import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header.js';
import GLOBALS from './Globals'

  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export class Payment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Add Payment method" rightIcon="credit-card-plus" navigation={this.props.navigation}
        desc="You clicked Add payment" />
        <View style={styles.body}>
          <TouchableOpacity style={styles.cardRow}
            onPress={()=>ToastAndroid.show('You pressed Visa credit card', ToastAndroid.SHORT)}
            activeOpacity={0.6} >
            <Image source={require('../assets/visa.png')} style= {styles.thumb} />
            <Text style={styles.cardName}>Visa credit card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>ToastAndroid.show('You pressed Pay with cash', ToastAndroid.SHORT)}
            style={styles.cardRow}>
          <Image source={require('../assets/purse.png')} style= {styles.thumb} />
            <Text style={styles.cardName}>Pay Cash</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>ToastAndroid.show('You pressed Master credit card', ToastAndroid.SHORT)}
            style={styles.cardRow}>
          <Image
            onPress={()=>ToastAndroid.show('You pressed Visa credit card', ToastAndroid.SHORT)}
            source={require('../assets/mastercard.png')} style= {styles.thumb} />
            <Text style={styles.cardName}>Master credit card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>ToastAndroid.show('You pressed Debit card', ToastAndroid.SHORT)}
            style={styles.cardRow}>
          <Image source={require('../assets/credit-card.png')} style= {styles.thumb} />
            <Text style={styles.cardName}>Debit card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>ToastAndroid.show('You pressed Bitcoin', ToastAndroid.SHORT)}
            style={styles.cardRow}>
          <Image source={require('../assets/bitcoin.png')} style= {styles.thumb} />
            <Text style={styles.cardName}>Bitcoin</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  thumb:{
    width:dh*0.08,
    height:dh*0.08,
    resizeMode: 'contain',
    marginRight: 10,
    },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GLOBALS.COLORS.GREY,
    justifyContent:'flex-start'
  },
  body:{
    margin: 10,
    flex: 1,
    width: 0.95*dw
    },
  cardRow:{
    width: '100%',

    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius:10,
    backgroundColor: '#fff'
  },
  infoTxt:{
      fontSize: 27,

  },
  leftIcon:{
    marginRight: 20
      },

});
