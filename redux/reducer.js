import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

initialState={
  pickupLocationName:'University of Ilorin',
  pickupLocationPlace:'Ilorin, Nigeria',
  destinationLocationName:'Tanke Road',
  destinationLocationPlace:'Tanke Rd, Ilorin,Kwara, Nigeria',
  selectedClass:'',
  showModal:false,
  selectedPaymentMethod:'Cash',
  pickupLatitude: 8.4814201,
  pickupLongitude:4.612684,
  destinationLatitude:8.491245799,
  destinationLongitude:4.5949818,
  travelDistance:1,
  travelDuration:20,
  showHistoryModal:false,
  modalData:{
      status : "FINISHED",
      pickup : "Le Center Pomidou, Paris",
      destination : "Louis Vuitton Foundation",
      bookingID : "WE4511RV",
      classType : "Economy",
      payment : {
                  "type" : "Visa",
                  "amount" : "$9.25"
                  },
      driverNote : "In Front of a resturant",
      date : "13 April 2019",
      time : "8:11 PM",
    }
  }

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_MODAL_DATA':
    return{...state, modalData:action.detail,};

    case 'SHOW_HISTORY_MODAL':
    return{...state, showHistoryModal:action.status,}

    case 'SELECT_TRAVEL_CLASS':
    return{...state, selectedClass:action.class,};

    case 'SET_PAYMENT_METHOD':
    return{...state, selectedPaymentMethod:action.pmethod,};

    case 'TOGGLE_MODAL':
    return {...state, showModal:action.status};

    case 'SET_PICKUP_LOCATION_NAME':
    return {...state, pickupLocationName:action.placeName};

    case 'SET_PICKUP_LOCATION_PLACE':
    return {...state, pickupLocationPlace:action.placeLocation};

    case 'SET_DESTINATION_LOCATION_NAME':
    return {...state,  destinationLocationName:action.placeName, destinationLocationPlace:action.placeLocation};
    case 'SET_DESTINATION_LOCATION_PLACE':
    return {...state, destinationLocationPlace:action.placeLocation};

    case 'SET_PICKUP_LATITUDE':
    return {...state, pickupLatitude:action.lat};

    case 'SET_PICKUP_LONGITUDE':
    return {...state, pickupLongitude:action.lng};

    case 'SET_DESTINATION_LATITUDE':
    return {...state, destinationLatitude:action.lat};

    case 'SET_DESTINATION_LONGITUDE':
    return {...state, destinationLongitude:action.lng};

    case 'SELECT_TRAVEL_DISTANCE':
    return {...state, travelDistance:action.distance};

    case 'SELECT_TRAVEL_DURATION':
    return {...state, travelDuration:action.duration};

    default: return state;

  }
 }

 const persistConfig = {
   timeout:10000,
   key: 'root',
   storage,
   blacklist: ['showHistoryModal']
 }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export  const persistor = persistStore(store)
