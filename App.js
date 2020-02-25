/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// Navigation and stuff
import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

//Screens
import BottomTab from './screens/BottomTab';
import AuthForm from './screens/Auth/AuthForm/AuthForm';
import AuthFirst  from './screens/Auth/AuthFirst/AuthFirst';

//Redux Stuff
import { Provider, useSelector } from 'react-redux';
import {store, persistor} from './redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react'

//Import actions,Reducers
//Create Navigation
const Stack = createStackNavigator();
//Export main App
const App = () => {

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <NavigationContainer>
                <Stack.Navigator
                    headerMode={false}
                    initialRouteName = {(store.getState().userData.status==='LOGGEDOUT')?"AuthFirst":"Home"}
                  >
                    <Stack.Screen name="AuthForm" component={AuthForm}/>
                    <Stack.Screen name="AuthFirst" component={AuthFirst}/>
                    <Stack.Screen name="Home" component={BottomTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </PersistGate> 
      </Provider>
    );
  // }
};



export default App;
