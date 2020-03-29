import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
 

export const CustomButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, isLoading=false, hitSlop ,mainView} = props;

    return (
            <TouchableOpacity onPress={onPress} hitSlop={hitSlop} style={[mainView]}>
                <View style={[styles.button, style]}>
                    {
                        (isLoading)?
                        <ActivityIndicator size="small" color="white"/>
                        :
                        <Text style={[styles.text, textStyle]}>{props.title}</Text>
                    }
                </View>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
        elevation: 20,
    },

    text: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        textAlign: 'center',
    },

    touchableOp:{
        backgroundColor: 'green',
    }
});
