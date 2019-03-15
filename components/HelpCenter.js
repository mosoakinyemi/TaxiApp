import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header.js';



type Props = {};
  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export class HelpCenter extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Settings" rightIcon="info-circle" navigation={this.props.navigation} />
        <View style={styles.body}>
                <Icon name="wrench" size={dh/4} style= {styles.drawrIcon} />
                <Text style={styles.infoTxt}>{`Settings Fragment`}</Text>
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
      color:'rgb(18, 164, 90)',
      margin:15,
      },

});
