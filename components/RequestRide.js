import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import GLOBAL from './Globals'
import Modal from "react-native-modal";



  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export default  class RequestRide extends Component {
  static navigationOptions = {
      header: null,
      };

  constructor(props) {
      super(props);
      this.state ={ timer: 5, isModalVisible: false}
    }


  componentDidMount(){
let that = this;
setTimeout(function(){that.setState({ isModalVisible:true })}, 1000);
    }
    _toggleModal = () =>
   this.setState({ isModalVisible: !this.state.isModalVisible });

   _cancel(){
     Alert.alert('Your search has been cancelled')
     this.props.navigation.navigate('BookingHome')
   }

   _cancelBtn(){
     Alert.alert('Your search has been cancelled')
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.navigate('BookingHome')
   }

   _acceptBtn(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
     this.props.navigation.navigate('SelectPayment')
   }

   _driverFound=() => {
     this.setState({ isModalVisible: !this.state.isModalVisible });
     this.props.navigation.navigate('BookingHome')
   }

  render() {
    status= this.state.isModalVisible;
    return (
      <View style={styles.container}>
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

          <Text style={styles.findingTxt}>Finding a Driver for You...</Text>
          <TouchableOpacity
            onPress={()=>this._cancel()}
          style={styles.cancelWrap}>
            <Icon name="close-circle-outline" size={45} style={styles.cancelIcon} />
          </TouchableOpacity>
        </View>

        <Modal
          animationIn='fadeIn'
          animationInTiming={400}
          animationOutTiming={0}
          animationOut='fadeOut'
          backdropTransitionOutTiming={0}
          style={styles.modalWrapper}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          isVisible={this.state.isModalVisible}>
            <View style={styles.modalBody}>
              <LottieView
                style={styles.successAnim}
                source={"whiteSuccess2.json"}
                autoPlay={true}
                loop={false}
                resizeMode="cover"
              />
                <Text style={styles.sucessText}>Success </Text>
                <View style={styles.LowerModal}>
                  <Text style={styles.confirmText}>We've found a driver for you</Text>
                    <Text style={styles.ejo}>Kindly confirm your order then proceed to make payments</Text>
                  <View style={styles.btnRow}>
                    <TouchableOpacity
                    onPress={()=>this._acceptBtn()}
                    style={styles.confirmBtn}>
                      <Text style={{fontSize: 20, fontWeight: 'bold',color: 'white'}}>Confirm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>this._cancelBtn()}
                    style={styles.cancelBtn}>
                      <Text style={{fontSize: 20, fontWeight: 'bold',color: 'white'}}>Cancel</Text>
                    </TouchableOpacity>
                  </View>

                </View>
            </View>
        </Modal>
    </View>
    );
  }
}



const styles = StyleSheet.create ({
  cancelBtn:{
    backgroundColor: '#f56530',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  confirmBtn:{
    backgroundColor: '#3ABC5E',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnRow:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  sucessText:{
    fontWeight: '500',
    fontSize: 25,
    color: '#fff',
    marginBottom: 10
  },
  modalBody:{
    height:(dh*0.5),
    width:(dw*0.8),
    backgroundColor:'#3ABC5E',
    alignItems: 'center',
    borderRadius: 15
  },
  LowerModal:{
    padding: 15,
    height: 0.25*dh,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  confirmText:{
    fontWeight: '500',
    fontSize: 18,
  },
  ejo:{
  marginBottom:  10,
  fontSize:16,
  textAlign: 'center'
  },
  successAnim:{
      height:dh/4,
      width:dh/4,
    },
    modalWrapper:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },

  findingTxt:{
    position:'absolute',
    alignSelf: 'center',
    top:(dh*0.06),
    fontSize: 23,
    color: 'black',
    fontWeight: '400'
  },
  cancelWrap:{
    color: 'white',
    position:'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom:(dh*0.06),
    padding: 20,
    paddingTop: 30,
  },
  cancelIcon:{
    color: 'white',
    position:'relative',
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
