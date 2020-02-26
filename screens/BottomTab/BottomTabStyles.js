import { StyleSheet, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OS = Platform.OS;

export default styles= StyleSheet.create({

    mainView:{
        flexDirection: 'row',
        paddingLeft: wp('15%'),
        height:hp('10%'),
        marginBottom: hp('2.5%'),
        width: wp('90%'),
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: wp('5%'),
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { height: 2.5, width: 0 },
        shadowRadius: 20,
        elevation: 20,
    },

    rootView:{
        backgroundColor: 'white',
        height: hp('20%'),
        justifyContent: 'center'
    },

})