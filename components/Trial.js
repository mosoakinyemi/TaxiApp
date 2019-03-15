import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header.js';
import LottieView from 'lottie-react-native';
import GLOBAL from './Globals'




  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export class LottieTrial extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header title="Settings" rightIcon="settings" navigation={this.props.navigation}
        desc="You clicked on more Settings"/>
        <View style={styles.body}>
          <LottieView
            style={styles.anim}
            source={"findTaxi.json"}
            autoPlay
            loop={true}
            resizeMode="cover"
          />
          <View style={styles.iconWrapper}>
            <Icon name="taxi" size={40} style={styles.carIcon} />
          </View>
          <Text style={styles.findingTxt}>Finding Driver for You...</Text>
          <Icon name="close-circle-outline" size={45} style={styles.cancel} />
        </View>

        </View>
    );
  }
}



const styles = StyleSheet.create({
  findingTxt:{
    position:'absolute',
    alignSelf: 'center',
    top:(dh*0.06),
    fontSize: 23,
    color: 'black',
    fontWeight: '400'
  },
  cancel:{
    color: 'white',
    position:'absolute',
    alignSelf: 'center',
    bottom:(dh*0.06)
  },
  iconWrapper:{
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: dh*0.1,
    width: dh*0.1,
    borderRadius: dh*0.5,
    backgroundColor: 'black'
  },
  anim:{
    height:dh/2,
    width:dw,
    backgroundColor: GLOBAL.COLORS.YELLOW
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
     backgroundColor: GLOBAL.COLORS.YELLOW
  },
  infoTxt:{
      fontSize: 27,
  },

    carIcon:{
      color:GLOBAL.COLORS.YELLOW,
      },

});
