/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// Navigation and stuff
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import BottomTab from './screens/BottomTab/BottomTab';
import AuthForm from './screens/Auth/AuthForm/AuthForm';
import AuthFirst  from './screens/Auth/AuthFirst/AuthFirst';
import DetailsWallet from './screens/Home/Wallets/DetailsWallet/DetailsWallet';

//Redux Stuff
import { Provider} from 'react-redux';
import {store, persistor} from './redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import {database} from './Databases/index';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import { Database } from '@nozbe/watermelondb';

//Import actions,Reducers
//Create Navigation
const Stack = createStackNavigator();


//Export main App
const App = () => {

  const [log , setLog] = useState('');

  const onBeforeLift=()=>{
      setLog(store.getState().userData.status);
  }

  return (
      <PersistGate 
          persistor={persistor} 
          loading={
            // <LoadScreen/>
            null
          }
          onBeforeLift={onBeforeLift}
      >
        <Provider store={store}>
              <NavigationContainer>
                <DatabaseProvider database={database}>
                    <Stack.Navigator
                        headerMode={false}
                        initialRouteName = {(log==='LOGGEDOUT')?"AuthFirst":"Home"}
                    >
                        <Stack.Screen name="AuthForm" component={AuthForm}/>
                        <Stack.Screen name="AuthFirst" component={AuthFirst}/>
                        <Stack.Screen name="Home" component={BottomTab} />
                        <Stack.Screen name="DetailsWallet" component={DetailsWallet}/>
                    </Stack.Navigator>
                  </DatabaseProvider>
              </NavigationContainer>
          </Provider>
      </PersistGate> 
    );
  // }
};



export default App;
