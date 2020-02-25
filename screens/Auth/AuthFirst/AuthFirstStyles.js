

import {StyleSheet} from 'react-native'

export default styles= StyleSheet.create({
    mainView:{
        height: '100%',
        backgroundColor: 'white'
    },

    header:{
        fontSize: 58,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'left',
        padding: '5%'
    },

    subHeader:{
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'left',
        paddingLeft: '6%'
    },

    buttonView:{
        height: '80%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        padding: '15%',
    },

    button:{
        marginTop: '20%'
    }
});