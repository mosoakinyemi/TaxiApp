import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GLOBALS from '../Globals'
import HistoryData from './HistoryDB'
import {connect} from 'react-redux'
import HistoryModal from './HistoryModal'


type Props = {};
  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

class HistoryScreen extends Component<Props> {
  move(){
    Alert.alert('Working');
  }
  render() {
    return (
      <View style={styles.container}>
						<FlatList style={styles.listContainer}
							data={HistoryData}
							 keyExtractor={(item, index) => item.id}
							renderItem={({item}) => <HistoryItem dispatch={this.props.dispatch} navigation={this.props.navigation} Detail={item} />}
						 />
           <HistoryModal />
      </View>
    );
  }
}

 class HistoryItem extends Component {
   move(){
    var status= true;
    this.props.dispatch({type:'SHOW_HISTORY_MODAL', status})
    const detail= this.props.Detail;
    console.log(detail);
  this.props.dispatch({type:'SET_MODAL_DATA', detail})
   }

  render() {
		const {id,
					status,
					pickup,
					destination,
					classType,
					bookingID,
					payment,
					driverNote,
					date,
					time
				} = this.props.Detail;
			const detail= this.props.Detail;

    return (
			<TouchableOpacity
			activeOpacity={0.6}
			onPress={()=>this.move()}
			 style={styles.body}>
					<View style={styles.row1}>
							<View
							style={[styles.status && status === 'CANCELLED' ? styles.cancelled : styles.status ]}
									>
									<Text style={{fontWeight: '400',color: 'white'}} >
									{status}</Text>
							</View>

							<Text>{date}</Text>
					</View>

				<View style={styles.row2}>
						<View style={styles.textNIcon}>
								<View style={styles.iconWrapper}>
										<Icon name="crosshairs" size={17} style={{color: 'black'}} />
								</View>
								<View style={styles.R2T1}>
									<Text style={styles.from}>from :</Text>
									<Text style={{fontWeight: 'bold',color: 'black'}} >{pickup}</Text>
								</View>
						</View>
							<View style={{width: '100%',backgroundColor: '#ddd',height: 1,marginVertical:5}} />
						<View style={styles.textNIcon}>
								<View style={styles.iconWrapper}>
										<Icon name="near-me" size={17} style={{color: 'black'}} />
								</View>
								<View style={styles.R2T1}>
									<Text style={styles.from}>Destination :</Text>
									<Text style={{fontWeight: 'bold',color: 'black'}} >{destination}</Text>
								</View>
						</View>
				</View>
				<View style={styles.R3}>
						<View style={{flexDirection: 'row'}} >
							<Icon name="clock-outline" size={20} style={{marginRight: 5}} />
							<Text>{time}</Text>
							<Icon name="car" size={20} style={{marginLeft: 10,marginRight: 5}} />
							<Text>{classType}</Text>
						</View>
						<View style={{flexDirection:'row',marginRight: 7}}>
								<Icon name="credit-card" size={20} style={{marginRight:  5}} />
								<Text>{payment.type}</Text>
						</View>
				</View>
			</TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
	cancelled:{
		padding: 7,
		borderRadius: 4,
		backgroundColor: 'rgb(155, 163, 149)'
	},
		R3:{
			flexDirection: 'row',
			justifyContent: 'space-between',
			width: '100%',
			marginTop: 20,
		},
		from:{
		},
		R2T1:{
			flexDirection: 'column'
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
		status:{
			padding: 7,
			backgroundColor:'rgb(88, 213, 63)',
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
			paddingHorizontal: 15,
			paddingTop:8
	  },
		listContainer: {
		 flex: 1,
		 width: '100%',
		 marginBottom: 7,
	 },
	  body: {
			width: '100%',
	    padding: 15,
			borderRadius: 8,
			flexDirection: 'column',
			backgroundColor: '#fff',
			marginBottom: 7
	  },
});
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(HistoryScreen);
