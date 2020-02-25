
import {StyleSheet, Platform} from 'react-native';

export default styles= StyleSheet.create({
    mainView:{
        height: '100%',
        backgroundColor: 'white',
        fontFamily: 'Montserrat-SemiBold'
    },

    header:{
        fontSize: 58,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: '5%',
        fontFamily: 'Montserrat-Black'
    },

    body:{
        padding: '10%',
        height: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyleEmail:{
        borderWidth: 0.25,
        borderColor: 'black',
        margin: 5,
        padding: 15,
        fontSize: 18,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        elevation: 1,
        margin: '5%',
        fontFamily: 'Montserrat-SemiBold'
    },

    textStylePass:{
        borderWidth: 0.25,
        borderColor: 'black',
        margin: 5,
        padding: 15,
        fontSize: 18,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        elevation: 1,
        margin: '5%',
        marginBottom: '10%' ,
        fontFamily: 'Montserrat-SemiBold'
    }
})