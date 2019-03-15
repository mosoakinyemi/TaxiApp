import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GLOBALS from '../Globals'


  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export class HistoryDetail extends Component {
  render() {
		const {navigation} = this.props;
    const detail = navigation.getParam('detail', 'No-detail');

    return (
      <View style={styles.container}>
						<View style={{width: '100%', padding: 15,backgroundColor: 'white'}}>
						<View style={styles.body}>
							 <View style={styles.R1}>
									<Image source={require('../../assets/profilePic.jpg')} style={styles.thumb} />
									<View style={styles.R1C2}>
											<View style={styles.R1C2_R1}>
												<Text style={styles.userID}>CK 445 HT</Text>
												<View>
												<Text style={styles.status}
												>{detail.status}</Text>
												</View>
											</View>
												<Text>Stephen A. H</Text>
									</View>
							 </View>


						</View>
						</View>
					 <View style={{width:'100%',height: 1, backgroundColor: '#ddd'}} />
					 <View style={styles.R2}>
					   <View style={styles.R2_R1}>
					     <Text style={{fontWeight:'bold',fontSize: 17}}>Fare</Text>
							 	<View style={{flexDirection: 'row',justifyContent: 'center',alignItems:'center'}}>
										<Text style={{fontWeight:'400',color:'black',fontSize: 15, marginRight:5 }}>{detail.payment.type}</Text>
										<Text style={{fontWeight:'bold',fontSize: 17,color: 'rgb(27, 207, 34)'}}>{detail.payment.amount}</Text>
							 	</View>
					   </View>
						 <View style={styles.R2_R1}>
						     <Text style={{fontWeight:'bold',fontSize: 17}}>Booking ID</Text>
								 <Text style={{fontWeight:'400',color:'black',fontSize: 15}}>Master</Text>
						  </View>
							<View style={styles.R2_R1}>
	 					     <Text style={{fontWeight:'bold',fontSize: 17}}>Class</Text>
	 							 <Text style={{fontWeight:'400',color:'black',fontSize: 15}}>{detail.classType}</Text>
 						  </View>

							<View style={styles.row2}>
									<View style={styles.textNIcon}>
											<View style={styles.iconWrapper}>
													<Icon name="crosshairs-gps" size={17} style={{color: 'white'}} />
											</View>
											<View style={styles.R2T1}>
												<Text style={styles.from}>from :</Text>
												<Text style={{fontWeight: 'bold',color: 'black'}} >{detail.pickup}</Text>
											</View>
									</View>
										<View style={{width: '100%',backgroundColor: '#ddd',height: 1,marginVertical:5}} />
									<View style={styles.textNIcon}>
											<View style={styles.iconWrapper}>
													<Icon name="near-me" size={17} style={{color: 'white'}} />
											</View>
											<View style={styles.R2T1}>
												<Text style={styles.from}>Destination :</Text>
												<Text style={{fontWeight: 'bold',color: 'black'}} >{detail.destination}</Text>
											</View>
									</View>
							</View>

							<View style={{marginTop: 15}}>
	 					     <Text style={{fontWeight:'bold',fontSize: 17}}>Driver Note</Text>
	 							 <Text style={{fontWeight:'400',color:'black',fontSize: 15}}>{detail.driverNote}</Text>
 						  </View>
					 </View>

					 <View style={styles.lowerView}>
					   	<Text style={{fontWeight:'400',color:'black',fontSize: 15}}>How was your trip?</Text>
							<View style={{flexDirection: 'row'}}>
								<Icon name="star" size={30} style={styles.stars} />
								<Icon name="star" size={30} style={styles.stars} />
								<Icon name="star" size={30} style={styles.stars} />
								<Icon name="star" size={30} style={styles.stars} />
								<Icon name="star" size={30} style={styles.stars} />
							</View>
					 </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	lowerView:{
		borderRadius: 8,
		marginTop: 15,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: 'white',
		padding: 15
	},
	stars:{
		color:GLOBALS.COLORS.YELLOW
	},
	textNIcon:{
		flexDirection: 'row',
		alignItems: 'center',
	},
	row2:{
		width: '100%'
	},
	iconWrapper:{
		height: 25,
		width: 25,
		backgroundColor: GLOBALS.COLORS.YELLOW,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 15
	},
	R2:{
		backgroundColor: 'white',
		width: '100%',
		padding: 15
	},
	R2_R1:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	userID:{
		fontWeight: 'bold',
		fontSize: 20,
		color: 'black'
	},
	status:{
		backgroundColor: 'rgb(59, 199, 47)',
		color: 'white',
		paddingVertical:  7,
		paddingHorizontal:  12,
		borderRadius: 5
	},
	R1C2_R1:{
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	R1C2:{
		flexDirection: 'column',
		borderWidth: 1,
		borderStyle: 'dashed'

	},
	R1:{
		flexDirection: 'row',

	},
	thumb:{
		height: 70,
		width:70,
		borderRadius: 140,
		marginRight: 15
	},
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ddd',
		padding: 15,

  },
  body: {
		width: '100%',
		backgroundColor: '#fff',
		borderRadius: 8,
  },
  infoTxt:{
      fontSize: 27,

  },


});
