
import {StyleSheet, Platform} from 'react-native';
import {heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'

const OS = Platform.OS;

export default styles= StyleSheet.create({
    mainView:{
        height: hp('100%'),
        backgroundColor: 'white',
        fontFamily: 'Montserrat-SemiBold'
    },

    header:{
        fontSize: hp('9'),
        fontWeight: 'bold',
        textAlign: 'left',
        padding: wp('5%'),
        fontFamily: 'Montserrat-Black'
    },

    body:{
        padding: '10%',
        height: hp('80%'),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyleEmail:{
        borderWidth: (OS==='ios'?0.25:0.2),
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
        color: 'black',
        fontFamily: 'Montserrat-SemiBold'
    },

    textStylePass:{
        borderWidth: (OS==='ios'?0.25:0.2),
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
        fontFamily: 'Montserrat-SemiBold',
        color: 'black'
    },

    verticalOffset: hp('50')
})