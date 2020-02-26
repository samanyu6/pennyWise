

import {StyleSheet} from 'react-native'
import {heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'

export default styles= StyleSheet.create({
    mainView:{
        height: '100%',
        backgroundColor: 'white'
    },

    header:{
        fontSize: hp('9'),
        fontFamily: 'Montserrat-Bold',
        textAlign: 'left',
        padding: '5%'
    },

    subHeader:{
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'left',
        paddingLeft: wp('6%')
    },

    buttonView:{
        height: hp('80%'),
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        padding: '15%',
    },

    button:{
        marginTop: hp('20%')
    }
});