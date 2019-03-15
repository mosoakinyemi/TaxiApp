initialRegion:{
  latitude:(pickupCoordinates.latitude+destinationCoordinates.latitude)/2,
  longitude:(pickupCoordinates.longitude+destinationCoordinates.longitude)/2,
  latitudeDelta:Math.abs(pickupCoordinates.latitude-destinationCoordinates.latitude),
  longitudeDelta:Math.abs(pickupCoordinates.longitude-destinationCoordinates.longitude),
},


{this.state.coordinates.map((item, key) =>
  <MapView.Marker
  key={item.latitude}
  image={require('../assets/yellowCar.png')}
  coordinate={item}
  />
)}
  <MapView.Marker
    image={require('../assets/yellowCar.png')}
    coordinate={{latitude: 37.78825,longitude: -122.4324}}
    title={"Your current location"}
    description={"Bururdelle Museum, Paris"}
  />

  <MapViewDirections
    origin={this.state.coordinates[5]}
    destination={this.state.coordinates[2]}
    apikey={GLOBALS.DIRECTIONSKEY}
    strokeWidth={3}
    strokeColor="hotpink"
  />
