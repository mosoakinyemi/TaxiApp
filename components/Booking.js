import { createStackNavigator } from 'react-navigation'
import RequestRide from './RequestRide'
import BookingHome from './BookingHome'
import Search from './Search'
import SelectPayment from './SelectPayment.js'
import Promotions from './Promotions';

export  const Booking =  createStackNavigator({
  BookingHome:{screen:BookingHome,navigationOptions: { header: null }},
  RequestRide:{screen:RequestRide},
  Search:{screen:Search},
  SelectPayment:{screen:SelectPayment},
  Promotions:{screen:Promotions},
  });
