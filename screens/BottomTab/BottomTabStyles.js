import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default styles= StyleSheet.create({

    mainView:{
        flexDirection: 'row',
        paddingLeft: wp('12%'),
        height:hp('10%'),
        marginBottom: hp('2.5%'),
        width: wp('90%'),
        alignContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: wp('5%'),
        backgroundColor: 'white',
        // borderWidth: 0.25,
        // borderColor: 'rgba(0.75,0.75,0.75,0.25)',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { height: 2.5, width: 0 },
        shadowRadius: 20,
        elevation: 20,
    }

})