import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GLOBALS from './Globals'


type Props = {};
  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export default class Header extends Component<Props> {
  render() {
		const {title,rightIcon,desc} = this.props;
    return (
		   <View style={styles.appBar}>
		      <View>
		          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
		            <Icon name="menu" size={25} style= {styles.drawrIcon} />
		          </TouchableOpacity>
		      </View>

		      <View style={styles.headerText}>
		        <Text style={styles.centerTxt}>{title}</Text>
          </View>

            <TouchableOpacity
            onPress={()=>ToastAndroid.show(desc, ToastAndroid.SHORT)}
            >
		            <Icon name={rightIcon} size={25} style= {styles.drawrIcon} />
            </TouchableOpacity>

		   </View>
    );
  }
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


const styles = StyleSheet.create({

    appBar: {
      backgroundColor:'#fff',
      height: APPBAR_HEIGHT,
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      },

    headerText:{
      alignSelf:'center',
      backgroundColor: GLOBALS.COLORS.YELLOW,
      borderRadius: 6,
      },

    drawrIcon:{
      color:'#777777',
      margin:15,
      },

      centerTxt:{
          color:'black',
          fontSize:16,
          marginHorizontal:(dw/24),
          marginVertical: (dw/40),
          fontWeight: 'bold'
        },

});
