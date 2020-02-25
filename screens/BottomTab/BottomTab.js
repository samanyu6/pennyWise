import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Wallets from '../Home/Wallets/Wallets';
import Settings from '../Home/Settings/Settings';
import Expense from '../Home/Expense/Expense';
import styles from './BottomTabStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    return (
      <SafeAreaView style={styles.rootView}>
      <View style={styles.mainView}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Icon 
                  name={label}
                  size={32}
                  style={{ 
                    color: isFocused ? 'black' : 'grey',
                    shadowColor: 'black',
                    shadowOpacity: 0.4,
                    shadowOffset: { height: 10, width: 2 },
                    shadowRadius: 20,
                  }}
              />
                {/* {label} */}
            </TouchableOpacity>
          );
        })}
      </View>
      </SafeAreaView>
    );
}

function BottomTab(){
    return(
        <Tab.Navigator
            initialRouteName="Wallet"
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="credit-card" component={Wallets}/>
            <Tab.Screen name="bar-graph" component={Expense}/>
            <Tab.Screen name="cog" component={Settings}/>
        </Tab.Navigator>
    )
}

export default BottomTab;
