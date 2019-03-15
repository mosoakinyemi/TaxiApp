import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header.js';
import GLOBALS from './Globals'
import {connect} from 'react-redux'


  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

class SelectPayment extends Component {
  _payWithVisa(){
    const pmethod ="Visa card"
    this.props.dispatch({ type: 'SET_PAYMENT_METHOD', pmethod });
    this.props.navigation.navigate('BookingHome')
  }

  _payWithMaster(){
    const pmethod ="Master card"
    this.props.dispatch({ type: 'SET_PAYMENT_METHOD', pmethod });
    this.props.navigation.navigate('BookingHome')
  }
  _payWithCash(){
    const pmethod ="Cash"
    this.props.dispatch({ type: 'SET_PAYMENT_METHOD', pmethod });
    this.props.navigation.navigate('BookingHome')
  }
  render() {
    selected= this.props.selectedPaymentMethod;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity
          onPress={()=>this._payWithVisa()}
          style={styles.cardRow} activeOpacity={0.6} >
              <View style={styles.C1}>
                <Image source={require('../assets/visa.png')} style= {styles.thumb} />
                <Text style={styles.cardName}>Visa credit card</Text>
              </View>
              <Icon name={selected==="Visa card"?"radiobox-marked":"radiobox-blank"}
              size={25} style={styles.checkIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>this._payWithCash()}
            style={styles.cardRow}>
                <View style={styles.C1}>
                  <Image source={require('../assets/purse.png')} style= {styles.thumb} />
                  <Text style={styles.cardName}>Pay Cash</Text>
                </View>
                  <Icon name={selected==="Cash"?"radiobox-marked":"radiobox-blank"}
                  size={25} style={styles.checkIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>this._payWithMaster()}
            style={styles.cardRow}>
            <View style={styles.C1}>
              <Image source={require('../assets/mastercard.png')} style= {styles.thumb} />
              <Text style={styles.cardName}>Master credit card</Text>
            </View>
              <Icon name={selected==="Master card"?"radiobox-marked":"radiobox-blank"}
              size={25} style={styles.checkIcon} />
      </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  C1:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkIcon:{
color: 'black'
  },
  cardName:{
    fontSize: 18,
    fontWeight: '300',
  },
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#8e8e8e',
    borderBottomWidth: 1
  },
  infoTxt:{
      fontSize: 27,

  },
  leftIcon:{
    marginRight: 20
      },

});

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(SelectPayment);
