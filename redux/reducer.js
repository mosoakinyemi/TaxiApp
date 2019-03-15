import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

initialState={
  pickupLocation:'Arc de Triomphe, Paris',
  destinationLocation:'Eiffel Tower, Paris',
  pickupCoordinates:{ latitude: 37.748, longitude: -122.4461628 },
  destinationCoordinates:{ latitude: 37.8025259, longitude: -122.4351431 },
  selectedClass:'',
  showModal:false,
  selectedPaymentMethod:'Cash',
  pickupLatitude: 37.748,
  pickupLongitude:-122.4461628,
  destinationLatitude:37.8025259,
  destinationLongitude:-122.4351431,

}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SELECT_TRAVEL_CLASS':
    return{...state, selectedClass:action.class,};

    case 'SET_PAYMENT_METHOD':
    return{...state, selectedPaymentMethod:action.pmethod,};

    case 'TOGGLE_MODAL':
    return {...state, showModal:action.status};

    case 'SET_PICKUP_LOCATION':
    return {...state, pickupLocation:action.location};

    case 'SET_DESTINATION_LOCATION':
    return {...state, destinationLocation:action.location};

    case 'SET_PICKUP_LATITUDE':
    return {...state, pickupLatitude:action.lat};

    case 'SET_PICKUP_LONGITUDE':
    return {...state, pickupLongitude:action.lng};

    case 'SET_DESTINATION_LATITUDE':
    return {...state, destinationLatitude:action.lat};

    case 'SET_DESTINATION_LONGITUDE':
    return {...state, destinationLongitude:action.lng};

    default: return state;

  }
 }

 const persistConfig = {
   timeout:10000,
   key: 'root',
   storage,
 }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export  const persistor = persistStore(store)
