import { StyleSheet, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OS = Platform.OS;

export default styles= StyleSheet.create({

    mainView:{
        // marginTop: hp('2.5%'),
        flexDirection: 'row',
        paddingLeft: wp('15%'),
        height: (OS==='ios')?hp('10%'):hp('12.5%'),
        // marginBottom: hp('2.5%'),
        width: wp('85%'),
        // alignSelf: 'center',
        alignItems: 'center',
        borderRadius: wp('5%'),
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { height: 2.5, width: 0 },
        shadowRadius: 20,
        elevation: 20, 
        position: 'absolute',
        top: OS==='ios'?hp('85%'):hp('80%'),
        alignSelf: 'center',
    },

})