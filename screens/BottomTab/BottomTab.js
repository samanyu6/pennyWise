import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Wallets from '../Home/Wallets/Wallets';
import Settings from '../Home/Settings/Settings';
import Expense from '../Home/Expense/Expense';
import styles from './BottomTabStyles';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    return (
      // <View style={{ flexDirection: 'row' }}>

    //  <View style={styles.rootView}> 
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
            // <TouchableOpacity
            //   accessibilityRole="button"
            //   accessibilityStates={isFocused ? ['selected'] : []}
            //   accessibilityLabel={options.tabBarAccessibilityLabel}
            //   testID={options.tabBarTestID}
            //   onPress={onPress}
            //   onLongPress={onLongPress}
            //   style={{ flex: 1 }}
            //   activeOpacity={1}
            //   hitSlop={{
            //     top: hp('2'),
            //     bottom: hp('2'),
            //     left: wp('2'),
            //     right: wp('2'),
            // }}
            // >
            <View style={{ flex: 1 }}>
              <Icon 
                  name={label}
                  size={32}
                  onPress={onPress}
                  style={{color: isFocused ? 'black' : 'grey',
                  shadowColor: 'black',
                  shadowOpacity: 0.2,
                  shadowOffset: { height: 2.5, width: 0 },
                  shadowRadius: 20,
                  elevation: 20,
                }}
              />
            </View>
            // </TouchableOpacity>

          );
        })}
      {/* </View> */}
      </View>
    );
}

function BottomTab(){
    return(
        <Tab.Navigator
            initialRouteName="Wallet"
            tabBarOptions= {{
              style:{
                zIndex:1
              }
            }}
            tabBar={props => <MyTabBar {...props} />
          }
        >
            <Tab.Screen name="credit-card" component={Wallets}/>
            <Tab.Screen name="bar-graph" component={Expense}/>
            <Tab.Screen name="cog" component={Settings}/>
        </Tab.Navigator>
    )
}

export default BottomTab;
