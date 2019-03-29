import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GLOBALS from './Globals'
import { connect } from 'react-redux';

  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

class Search extends Component {

    setPickupLocation(details){
          console.log(details);
          const placeName= details.name;
          const placeLocation= details.formatted_address;
          const coordinates= details.geometry.location;
          const lat = coordinates.lat;
          const lng = coordinates.lng;

          this.props.dispatch({type:'SET_PICKUP_LATITUDE', lat})
          this.props.dispatch({type:'SET_PICKUP_LONGITUDE', lng})
          this.props.dispatch({ type: 'SET_PICKUP_LOCATION_NAME', placeName});
          this.props.dispatch({ type: 'SET_PICKUP_LOCATION_PLACE', placeLocation});
          this.props.navigation.navigate('BookingHome')
    }

  setDestinationLocation(details){
    console.log(details);
    const placeName= details.name;
    const placeLocation= details.formatted_address;
    const coordinates= details.geometry.location;
    const lat = coordinates.lat;
    const lng = coordinates.lng;

    this.props.dispatch({type:'SET_DESTINATION_LATITUDE', lat})
    this.props.dispatch({type:'SET_DESTINATION_LONGITUDE', lng})
    this.props.dispatch({ type: 'SET_DESTINATION_LOCATION_NAME', placeName});
    this.props.dispatch({ type: 'SET_DESTINATION_LOCATION_PLACE', placeLocation });
    this.props.navigation.navigate('BookingHome')
  }
  render() {
		const {navigation} = this.props;
    const type = navigation.getParam('type', 'Sorry, no-type');
			var placeholderText= type==="pickup"?"Enter your pickup location":"Enter your destination";
    if (type==="pickup"){
      return(
        <View style={styles.container}>
  						<GooglePlacesAutocomplete
  						  placeholder={placeholderText}
  						  minLength={2}
  						  autoFocus={false}
  						  returnKeyType={'default'}
                listViewDisplayed='true'
                nearbyPlacesAPI='GooglePlacesSearch'
  						  fetchDetails={true}
  							query={{
  						        key:'AIzaSyDroWwt4kaolnOCboAKyTe4QQ1LOOhwP9E',
  						        language: 'en',
                      components: 'country:ng'
  						      }}
              onPress={(data, details = null) => this.setPickupLocation(details)}
  						  styles={{
                  listView:{
                    backgroundColor:'white'
                  },
  						    textInput: {
  									width:'100%',
  						      marginLeft: 0,
  						      marginRight: 0,
  						      height: 38,
  						      color: '#5d5d5d',
  						      fontSize: 16
  						    },
                  textInputContainer: {
                    width: '100%'
                  },
                description: {
                    fontWeight: 'bold'
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb'
                  }
  						  }}
  						  currentLocation={true}
  						/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
						<GooglePlacesAutocomplete
						  placeholder={placeholderText}
						  minLength={2}
						  autoFocus={false}
						  returnKeyType={'default'}
              listViewDisplayed='true'
              nearbyPlacesAPI='GooglePlacesSearch'
						  fetchDetails={true}
							query={{
						        key:'AIzaSyDroWwt4kaolnOCboAKyTe4QQ1LOOhwP9E',
						        language: 'en',
                    components: 'country:ng'
						      }}
            onPress={(data, details = null) => this.setDestinationLocation(details)}
						  styles={{
                listView:{
                  backgroundColor:'white'
                },
						    textInput: {
									width:'100%',
						      marginLeft: 0,
						      marginRight: 0,
						      height: 38,
						      color: '#5d5d5d',
						      fontSize: 16
						    },
                textInputContainer: {
                  width: '100%'
                },
              description: {
                  fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                }
						  }}
						/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(Search);

const styles = StyleSheet.create({

  container: {
    flex: 1,
		width: '100%',
    alignItems: 'center',
    backgroundColor: '#ddd',
    justifyContent:'center',
		paddingHorizontal: 5
  },
});
