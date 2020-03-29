import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
const OS = Platform.OS;

const InputText = ({
    placeholder,type, fsize, viewstyle, onChangeText
}) => {

    const [text, setText]=useState('');

    return(
        <View style={viewstyle}>
            <Text style={styles.place}>{placeholder}</Text>
            <TextInput
                keyboardType={type}
                onChangeText = {onChangeText}
                style = {[styles.textStyle, {fontSize: fsize}]}
                placeholderTextColor= "grey"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    place:{
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
    },

    textStyle:{
        borderBottomWidth: 2.5,
        borderColor: 'black',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Montserrat-SemiBold'
    },
})

export default InputText;
