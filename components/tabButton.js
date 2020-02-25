import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const TabButton = ({props}) => (
    <View style={style.centerBtn}>
        <Icon
            name="plus"
            size={38}
            backgroundColor="#3b5998"
            style={style.iconPlus}
            // onPress={Navigate(props)}
        />
    </View>
);

// function Navigate(props){

// }

const style = StyleSheet.create({
    centerBtn:{
        height: 75,
        width: 75,
        borderRadius: 50,
        backgroundColor: 'black',
        justifyContent: 'center'
    }
})

export default TabButton;
