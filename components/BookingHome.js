import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList,Alert,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header.js';
import GLOBALS from './Globals'
import MapView from "react-native-maps";
import Marker from "react-native-maps";
import {connect} from 'react-redux'
import Options from './OptionsDB'
import Modal from "react-native-modal";
import MapViewDirections from 'react-native-maps-directions';

  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;
  var myLoc='';

  class TopBox extends Component {
   render() {
      var loc = this.props.loc;
      var dest= this.props.dest;
     return (
       <View style={styles.topBoxes}>
             <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('Search', {type:"pickup"})}
             style={styles.locationBtn}>
                 <View style={styles.iconWrapper}>
                     <Icon name="crosshairs-gps" size={17} style={{color: 'white'}} />
                 </View>
                    <View>
                      <Text>Select your Location:</Text>
                      <Text	style={styles.locationTxt}>{loc}</Text>
                    </View>
             </TouchableOpacity>
             <View style={{width:'100%',height: 1, backgroundColor: '#ddd'}} />
             <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Search', {type:"destination"})}
                style={styles.locationBtn}>
                 <View style={styles.iconWrapper}>
                     <Icon name="near-me" size={17} style={{color: 'white'}} />
                 </View>
                    <View>
                      <Text>Select your Destination: </Text>
                      <Text	style={styles.locationTxt}>{dest}</Text>
                    </View>
             </TouchableOpacity>
       </View>
     );
   }
  }

  class MiddleRow extends Component {
   render() {
      var selected = this.props.selected;
     return (
       <View style={styles.SeconRow}>
            <TouchableOpacity style={styles.R2Cols}>
                <View style={{flexDirection: 'row'}}>
                  <Text>DRIVER NOTE</Text>
                </View>
                <Text style={styles.R2T2}>None</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Promotions')}
            style={styles.R2Cols}>
                <View style={{flexDirection: 'row'}}>
                  <Text>PROMO</Text>
                  <Icon name="chevron-down-circle" size={20} style={{paddingLeft: 5, color:'#3ABC5E' }} />
                </View>
                <Text style={[styles.R2T2,{color: 'rgb(23, 164, 0)'}]}>None</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('SelectPayment')}
            style={styles.R2Cols}>
                <View style={{flexDirection: 'row'}}>
                  <Text>PAYMENT</Text>
                  <Icon name="chevron-down-circle" size={20} style={{paddingLeft: 5, color:'#3ABC5E' }} />
                </View>
                <Text style={[styles.R2T2,{fontWeight: '500'}]}>{this.props.selected}</Text>
            </TouchableOpacity>
       </View>

     );
   }
  }
 class BookingHome extends Component {
   static navigationOptions = {
       header: null,
       };
	 state = {
			 isModalVisible: false,
       selectedOptionID:'',
       selectedPrice:'$6.75',
       selectedClass:'Economy',
       selectedPeople:'1-4 Max',
       selectedTime:'12 min',
       selectedImage:require('../assets/car3.png'),
       coordinates:[
			{ latitude: 37.739, longitude: -122.44},
			{ latitude: 37.787, longitude: -122.4367 },
			{ latitude: 37.748, longitude: -122.4461628 },
			{ latitude: 37.7734153, longitude: -122.4577787 },
			{ latitude: 37.7948605, longitude: -122.4596065 },
			{ latitude: 37.8025259, longitude: -122.4351431 }
		      ]
				};

		_toggleModal = () =>
	 {this.setState({ isModalVisible: !this.state.isModalVisible });}

   _selectEconomy = () => {
     this.setState({selectedClass:'Economy'});
     this.setState({selectedPrice:'$6.75'});
     this.setState({selectedTime:'12 min'});
     this.setState({selectedPeople:'1-4 Max'});
     this.setState({selectedImage:require('../assets/bluecar.png')});
     this.setState({ isModalVisible: !this.state.isModalVisible });
   }
   _selectLarge=()=>{
     this.setState({selectedClass:'Large'});
     this.setState({selectedPrice:'$10.4'});
     this.setState({selectedTime:'14 min'});
     this.setState({selectedPeople:'1-6 Max'});
     this.setState({selectedImage:require('../assets/truck.png')});
     this.setState({ isModalVisible: !this.state.isModalVisible });
   }
   _selectPremium=()=>{
     this.setState({ isModalVisible: !this.state.isModalVisible });
     this.setState({selectedClass:'Premium'});
     this.setState({selectedPrice:'$13.99'});
     this.setState({selectedTime:'10 min'});
     this.setState({selectedImage:require('../assets/car3.png')});
     this.setState({selectedPeople:'1-3 Max'});

   }

   _selectOption =() => {
     Alert.alert('working');
     this.props.dispatch({ type: 'SELECT_TRAVEL_CLASS', item});
   }

   _requestRide(){
     Alert.alert('Working')
     this.props.navigation.navigate('RequestRide')
   }
  render() {
    const {pickupLatitude,
           pickupLongitude,
           destinationLatitude,
           destinationLongitude }= this.props;

    console.log(pickupLatitude);
    return (
       <View style={styles.container}>
        <Header title="TRANSPORT" rightIcon="crosshairs-gps" navigation={this.props.navigation}
        desc="You clicked your location" />
        <View style={styles.body}>
                <MapView style={styles.map}
                loadingEnabled = {true}
                loadingIndicatorColor="#666666"
                loadingBackgroundColor="#eeeeee"
                moveOnMarkerPress = {false}
                showsUserLocation={true}
                showsCompass={true}
                showsPointsOfInterest = {false}
                ref={ref => { this.map = ref; }}
              region={{
                  latitude:(pickupLatitude+destinationLatitude)/2,
                  longitude:(pickupLongitude+destinationLongitude)/2,
                  latitudeDelta:Math.abs(pickupLatitude-destinationLatitude),
                  longitudeDelta:Math.abs(pickupLongitude-destinationLongitude)*dh/dw,
                      }}>

                      <MapView.Marker
                          coordinate={{latitude:destinationLatitude,longitude:destinationLongitude}}
                          image={require('../assets/yellowCar.png')}
                          title={"Your destination location"}
                          description={"The Driver will drop you Here"}
                        />

                  <MapView.Marker
                      coordinate={{latitude:pickupLatitude,longitude:pickupLongitude}}
                      title={"Your Pickup location"}
                      description={"The Driver will Meet You Here"}
                    />

                    <MapViewDirections
                      origin={{latitude:pickupLatitude, longitude:pickupLongitude}}
                      destination={{latitude:destinationLatitude, longitude:destinationLongitude}}
                      apikey={GLOBALS.DIRECTIONSKEY}
                      strokeWidth={5}
                      strokeColor="black"
                    />
               </MapView>

               <TopBox navigation={this.props.navigation}
                loc={this.props.pickupLocation}
                dest={this.props.destinationLocation} />

							<View style={styles.bottomStack}>
									<TouchableOpacity style={styles.FirstRow}
                  activeOpacity={0.5}
                  onPress={this._toggleModal}>
                        <Image source={this.state.selectedImage} style={styles.thumb}/>
                        <View style={styles.textRows}>
                            <View style={styles.TR1}>
                                <Text style={{fontWeight: 'bold',color: 'black'}} >{this.state.selectedClass}</Text>
                                <View style={{flexDirection:'row',justifyContent: 'center'}}>
                                    <Icon name="account" size={17} style={{marginHorizontal: 5 }} />
                                    <Text>{this.state.selectedPeople}</Text>
                                </View>
                            </View>
                            <View style={styles.TR2}>
                              <Text style={{fontWeight: 'bold',color:'rgb(67, 177, 35)'}}>{this.state.selectedPrice}</Text>
                              <Text style={{fontWeight: 'bold',color: 'black'}}>{this.state.selectedTime}</Text>
                            </View>
                        </View>
									</TouchableOpacity>

                    <MiddleRow   navigation={this.props.navigation}
                      selected={this.props.selectedPaymentMethod}
                     />

									<TouchableOpacity style={styles.requestBtn}
                  onPress={() => this.props.navigation.navigate('RequestRide')}
                   activeOpacity={0.6}>
											<Text style={{fontSize: 22,color: 'black',fontWeight: 'bold'}}>REQUEST A RIDE</Text>
									</TouchableOpacity>

                  <Modal
                    style={styles.modalWrapper}
                    animationOut="fadeOut"
                    animationOutTiming ={400}
                    animationIn="fadeIn"
                    animationInTiming={400}
                    onBackdropPress={() => this.setState({ isModalVisible: false })}
                    isVisible={this.state.isModalVisible}>
                      <View style={styles.modalBody}>
                        <TouchableOpacity style={styles.MR}
                          activeOpacity={0.5}
                          onPress={this._selectEconomy}>
                                <Image source={require('../assets/bluecar.png')} style={styles.thumb}/>
                                  <View style={styles.MTR}>
                                        <View style={styles.TR1}>
                                          <Text style={{fontWeight: 'bold',color: 'black'}}>Economy</Text>
                                          <View style={{flexDirection:'row',justifyContent: 'center'}}>
                                              <Icon name="account" size={17} style={{marginHorizontal: 5 }} />
                                              <Text>1-4 Max</Text>
                                          </View>
                                        </View>
                                        <View style={styles.TR2}>
                                          <Text style={{ fontWeight: 'bold',color:'rgb(67, 177, 35)'}}>$6.75</Text>
                                            <Text style={{fontWeight: 'bold',color: 'black'}}>12 min</Text>
                                        </View>
                                  </View>
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.MR}
                            activeOpacity={0.5}
                            onPress={this._selectLarge}>
                                  <Image source={require('../assets/truck.png')} style={styles.thumb}/>
                                    <View style={styles.MTR}>
                                          <View style={styles.TR1}>
                                            <Text style={{fontWeight: 'bold',color: 'black'}}>Large</Text>
                                            <View style={{flexDirection:'row',justifyContent: 'center'}}>
                                                <Icon name="account" size={17} style={{marginHorizontal: 5 }} />
                                                <Text>1-6 Max</Text>
                                            </View>
                                          </View>
                                          <View style={styles.TR2}>
                                            <Text style={{ fontWeight: 'bold',color:'rgb(67, 177, 35)'}}>$10.4</Text>
                                              <Text style={{fontWeight: 'bold',color: 'black'}}>14 min</Text>
                                          </View>
                                    </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.MR,{borderBottomColor:'#fff'}]}
                              activeOpacity={0.5}
                              onPress={this._selectPremium}>
                                    <Image source={require('../assets/car3.png')} style={styles.thumb}/>
                                      <View style={styles.MTR}>
                                            <View style={styles.TR1}>
                                              <Text style={{fontWeight: 'bold',color: 'black'}}>Premium</Text>
                                              <View style={{flexDirection:'row',justifyContent: 'center'}}>
                                                  <Icon name="account" size={17} style={{marginHorizontal: 5 }} />
                                                  <Text>1-3 Max</Text>
                                              </View>
                                            </View>
                                            <View style={styles.TR2}>
                                              <Text style={{ fontWeight: 'bold',color:'rgb(67, 177, 35)'}}>$13.99</Text>
                                                <Text style={{fontWeight: 'bold',color: 'black'}}>10 min</Text>
                                            </View>
                                      </View>
                              </TouchableOpacity>
                      </View>
                    </Modal>
							</View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  iconWrapper:{
    height: 25,
    width: 25,
    backgroundColor: GLOBALS.COLORS.YELLOW,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
   MR:{
     height: 0.1*dh,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingHorizontal:10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
   },
   MTR:{
     flexDirection: 'column',
     flex: 1
   },
    modalWrapper:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    modalBody:{
    width:(dw*0.9),
    backgroundColor:'#fff',
    padding: 10,
    borderRadius: 7
      },
  R2T2:{
    fontWeight: '500',
    color: 'black',
    fontSize: 17
  },
  R2Cols:{
    alignItems: 'center',
    marginHorizontal: 10
  },
  map:{
    flex: 1,
    height: (dh/2),
    width: '100%'
  },
  textRows:{
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: 10
  },
  TR1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TR2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  thumb:{
    width:dh*0.05,
    height:dh*0.05,
    borderRadius:dh*0.1,
    resizeMode: 'contain',
    marginRight: 10
    },

	FirstRow:{
		height: (dh*0.1),
    paddingHorizontal: 10,
		flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
	},
	SeconRow:{
		height: (dh*0.1),
		flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center'

	},

  container: {
    flex: 1,
    backgroundColor: '#rgb(238, 238, 238)',
    justifyContent:'flex-start'
  },
  body: {
		backgroundColor:'rgb(238, 238, 238)',
    flex: 1,
    alignItems: 'flex-start',
		justifyContent: 'flex-start'
  },
  topBoxes:{
     position: 'absolute',
     top: 0,
			alignContent: 'center',
			justifyContent: 'center',
      padding: 10
  },
	locationBtn:{
    backgroundColor: '#fff',
		padding: 5,
    flexDirection: 'row',
    alignItems:'center',

    marginBottom:7,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderRadius: 7,

	},
	locationTxt:{
		fontWeight: 'bold',
		color: 'black',
		fontSize: 17
	},
	bottomStack:{
    width: '100%',
		height: (0.3*dh),
			},

	requestBtn:{
		backgroundColor:GLOBALS.COLORS.YELLOW,
		alignItems: 'center',
		height: (0.1*dh),
		justifyContent: 'center'
	},

});

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(BookingHome);
