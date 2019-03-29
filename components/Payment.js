import { createStackNavigator } from 'react-navigation'
import {PaymentHome} from './payments/PaymentHome';
import {CardPay} from './payments/CardPay.js'

export  const Payment =  createStackNavigator({
  PaymentHome:{screen:PaymentHome,navigationOptions: { header: null }},
    CardPay:{screen:CardPay},
  });
