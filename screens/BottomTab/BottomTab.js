import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Text, TouchableOpacity} from 'react-native';

import Wallets from '../Home/Wallets';
import Settings from '../Home/Settings';
import Expense from '../Home/Expense';
import styles from './BottomTabStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    return (
      <SafeAreaView>
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
              <Text style={{ color: isFocused ? 'black' : 'grey' }}>
                {label}
              </Text>
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
            <Tab.Screen name="Wallet" component={Wallets}/>
            <Tab.Screen name="Expense" component={Expense}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}

export default BottomTab;
