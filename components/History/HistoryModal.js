import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GLOBALS from '../Globals'
import Modal from "react-native-modal";
import {connect} from 'react-redux'


  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

class HistoryModal extends Component {
  render() {
    const {status,
          pickup,
          destination,
          classType,
          bookingID,
          payment,
          driverNote,
          date,
          time
        } = this.props.modalData
    return (
      <Modal
        style={styles.modalWrapper}
        animationOut="fadeOut"
        animationOutTiming ={400}
        animationIn="fadeIn"
        animationInTiming={300}
        onBackdropPress={() => {
          var status= false;
           this.props.dispatch({type:'SHOW_HISTORY_MODAL', status})
            }}
        isVisible={this.props.showHistoryModal}>
          <View style={styles.modalBody}>
                <View style={{width: '100%', padding: 15,backgroundColor: 'white'}}>
                <View style={styles.body}>
                   <View style={styles.R1}>
                      <Image source={require('../../assets/profilePic.jpg')} style={styles.thumb} />
                      <View style={styles.R1C2}>
                          <View style={styles.R1C2_R1}>
                            <Text style={styles.userID}>CK 445 HT</Text>
                            <View>
                            <Text style={styles.status}>{status || 'null'}</Text>
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
                        <Text style={{fontWeight:'400',color:'black',fontSize: 15, marginRight:5 }}>{payment.type  || 'null'}</Text>
                        <Text style={{fontWeight:'bold',fontSize: 17,color: 'rgb(27, 207, 34)'}}>{payment.amount  || 'null'}</Text>
                    </View>
                 </View>
                 <View style={styles.R2_R1}>
                     <Text style={{fontWeight:'bold',fontSize: 17}}>Booking ID</Text>
                     <Text style={{fontWeight:'400',color:'black',fontSize: 15}}>{bookingID  || 'null'}</Text>
                  </View>
                  <View style={styles.R2_R1}>
                     <Text style={{fontWeight:'bold',fontSize: 17}}>Class</Text>
                     <Text style={{fontWeight:'400',color:'black',fontSize: 15}}>{classType  || 'null'}</Text>
                  </View>

                  <View style={styles.row2}>
                      <View style={styles.textNIcon}>
                          <View style={styles.iconWrapper}>
                              <Icon name="crosshairs-gps" size={17} style={{color: 'white'}} />
                          </View>
                          <View style={styles.R2T1}>
                            <Text style={styles.from}>from :</Text>
                            <Text style={{fontWeight: 'bold',color: 'black'}} >{pickup  || 'null'}</Text>
                          </View>
                      </View>
                        <View style={{width: '100%',backgroundColor: '#ddd',height: 1,marginVertical:5}} />
                      <View style={styles.textNIcon}>
                          <View style={styles.iconWrapper}>
                              <Icon name="near-me" size={17} style={{color: 'white'}} />
                          </View>
                          <View style={styles.R2T1}>
                            <Text style={styles.from}>Destination :</Text>
                            <Text style={{fontWeight: 'bold',color: 'black'}} >{destination  || 'null'}</Text>
                          </View>
                      </View>
                  </View>

                  <View style={{marginTop: 15}}>
                     <Text style={{fontWeight:'bold',fontSize: 17}}>Driver Note</Text>
                     <Text style={{fontWeight:'400',color:'black',fontSize: 15}}>{driverNote}</Text>
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
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalWrapper:{
  width: '90%',
  flex: 1,
  },
  modalBody:{
  width: '100%',
  alignSelf: 'center',
  backgroundColor:'#fff',
  padding: 10,
  borderRadius: 7
    },
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
		color: 'black',
    marginRight: 20,
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
		},
	R1:{
		flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'

	},
	thumb:{
		height: 70,
		width:70,
		borderRadius: 140,
		marginRight: 15
	},
  infoTxt:{
      fontSize: 27,
  },
});

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(HistoryModal);
