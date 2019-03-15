import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header.js';
import Notifications from './NotificationsDB.js';
import GLOBALS from './Globals'


  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export class Notification extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Header title="Notification" rightIcon="bell" navigation={this.props.navigation}
        desc="You clicked Notifications" />
        <View style={styles.body}>
            <FlatList
                style={{borderRadius: 8}}
                data={Notifications}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => <NotificationItem message={item} />
                 }
            />
        </View>
      </View>
    );
  }
}

class NotificationItem extends Component{
  render() {
    const {id,
          title,
          message,
          icon,
          } = this.props.message;
    return (
        <TouchableOpacity style={styles.container2}>
            <View style={styles.iconWrappper}>
              <Icon name={icon} size={16} style= {styles.leftIcon} />
            </View>
                <View style={styles.TR}>
                <Text style={styles.title}>{title}</Text>
                <Text  numberOfLines={1} style={{  fontSize:15}}>{message}</Text>
                </View>
        </TouchableOpacity>

    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  body:{
    flex: 1,
    padding: 10,
    paddingBottom: 0,
    backgroundColor: GLOBALS.COLORS.GREY,
  },
  messageWrap:{
    flex:1,
    },

  TR:{
    flex:1,
    padding: 7,
  },

  container2: {
    height:(0.09*dh),
    width:'100%',
    padding:20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  title:{
    color:'black',
    fontWeight:'400'
  },

  iconWrappper:{
    backgroundColor: GLOBALS.COLORS.YELLOW,
    height:(0.04*dh),
    width:(dh*0.04),
    borderRadius:(dh*0.08),
    marginRight: (0.044*dh),
    padding:2,
    alignContent: 'center',
    justifyContent: 'center'
  },
  leftIcon:{
      color:'#fff',
      alignSelf: 'center',
      },

});
