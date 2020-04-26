import propertyReducer from "./propertyReducer";
import authReducer from './authReducer';
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer } from 'react-redux-firebase' 

const rootReducer = combineReducers({
    property: propertyReducer, 
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer
})

export default rootReducer;