import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GLOBALS from '../Globals'
import {connect} from 'react-redux'

type Props = {};
  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

class ActiveScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
				activeOpacity={0.6}
				 style={styles.body}>
						<View style={styles.row1}>
								<View style={styles.status}>
								  	<Text style={{fontWeight: 'bold',color: 'black'}} >On Going</Text>
								</View>

								<Text>7 April 2019</Text>
						</View>

					<View style={styles.row2}>
							<View style={styles.textNIcon}>
									<View style={styles.iconWrapper}>
											<Icon name="crosshairs" size={17} style={{color: 'black'}} />
									</View>
									<View style={styles.R2T1}>
										<Text style={styles.from}>from :</Text>
									  <Text style={{fontWeight: 'bold',color: 'black'}} >{this.props.pickupLocationName}, {this.props.pickupLocationPlace}</Text>
									</View>
							</View>
								<View style={{width: '100%',backgroundColor: '#ddd',height: 1,marginVertical:5}} />
							<View style={styles.textNIcon}>
									<View style={styles.iconWrapper}>
											<Icon name="near-me" size={17} style={{color: 'black'}} />
									</View>
									<View style={styles.R2T1}>
										<Text style={styles.from}>Destination :</Text>
									  <Text  style={{fontWeight: 'bold',color: 'black'}} >{this.props.destinationLocationName}, {this.props.destinationLocationPlace}</Text>
									</View>
							</View>
					</View>
					<View style={styles.R3}>
							<View style={{flexDirection: 'row'}} >
								<Icon name="clock-outline" size={20} style={{marginRight: 5}} />
								<Text>7:46 PM</Text>
								<Icon name="car" size={20} style={{marginLeft: 10,marginRight: 5}} />
								<Text>Premium</Text>
							</View>

							<View style={{flexDirection: 'row',alignSelf: 'flex-end'}}>
							  	<Icon name="credit-card" size={20} style={{marginRight:  5}} />
									<Text>Cash</Text>
							</View>
					</View>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
	R3:{
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		marginTop: 20
	},
	from:{
	},
	R2T1:{
		flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1
	},
	textNIcon:{
		flexDirection: 'row',
		alignItems: 'center',
	},
	row2:{
		width: '100%',
        flexWrap: 'wrap'
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
	status:{
		padding: 7,
		backgroundColor: GLOBALS.COLORS.YELLOW,
		color: '#fff',
		borderRadius: 4,
	},
	row1:{
		marginBottom: 15,
		alignItems: 'center',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GLOBALS.COLORS.GREY,
		padding: 20,
  },
  body: {
		width: '100%',
    padding: 15,
		borderRadius: 8,
		flexDirection: 'column',
		backgroundColor: '#fff',
  },
});

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(ActiveScreen);
