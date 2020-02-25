import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomTab({navigation}){

    // <Tab.Navigator 
    // >
    //     <Tab.Screen/>
    //     <Tab.Screen/>
    //     <Tab.Screen/>
    // </Tab.Navigator>
    return(<View>
        <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 42}}>hello</Text>
    </View>)
}

export default BottomTab;
