import React, {Component} from 'react';
import {StyleSheet, Text, View,Dimensions,
        TouchableOpacity, Image,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CreditCardInput} from "react-native-credit-card-input";

  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

 export class CardPay extends Component {
	 static  navigationOptions = ({ navigation }) => ({
		 title: `Pay with ${navigation.state.params.title}`,
     headerStyle: {
       backgroundColor: navigation.state.params.headerColor,
     },
     headerTintColor: navigation.state.params.headerTitleColor,
     headerTitleStyle: {
       fontWeight: 'bold',
     },
	 })
	 _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
	 _onFocus = (field) => console.log("focusing", field);
  render() {
    return (
      <View style={styles.container}>
			<CreditCardInput
					autoFocus
					requiresName
					requiresCVC
					cardScale={1.0}
					labelStyle={styles.label}
					inputStyle={styles.input}
					validColor={"black"}
					invalidColor={"red"}
					placeholderColor={"darkgray"}
					onFocus={this._onFocus}
					onChange={this._onChange} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent:'center',
		paddingTop: 20
  },
	label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  body: {
    marginTop: (dh/5),
    flex: 1,
    alignItems: 'center',
    flexWrap:'wrap'
  }
});
