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
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

//Screens
import BottomTab from './screens/BottomTab/BottomTab';
import AuthForm from './screens/Auth/AuthForm/AuthForm';
import AuthFirst  from './screens/Auth/AuthFirst/AuthFirst';
import DetailsWallet from './screens/Home/Wallets/DetailsWallet/DetailsWallet';
import addWallet from './screens/Home/Wallets/addWallet/addWallet';

//Redux Stuff
import { Provider} from 'react-redux';
import {store, persistor} from './redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react'
import {database} from './Databases/index';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

//Import actions,Reducers
//Create Navigation
const Stack = createStackNavigator();


//Export main App
const App = () => {

  const [log , setLog] = useState('');

  const onBeforeLift=()=>{
      setLog(store.getState().userData.status);
  }

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

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
                        <Stack.Screen name="addWallet" component={addWallet} options={{
                          transitionSpec:{
                            open: config,
                            close: config
                          },
                          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
                        }}/>
                    </Stack.Navigator>
                  </DatabaseProvider>
              </NavigationContainer>
          </Provider>
      </PersistGate> 
    );
  // }
};



export default App;
