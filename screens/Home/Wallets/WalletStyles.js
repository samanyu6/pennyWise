import {StyleSheet, Platform} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OS = Platform.OS;

export default styles = StyleSheet.create({
    
    rootView:{
        backgroundColor: 'white'
    },

    mainView:{
        height: hp('120%'),
        marginTop: wp('2.5%'),
        // marginBottom: hp('-10%'),
        backgroundColor: 'white',
    },

    headerText:{
        fontFamily: 'Montserrat-ExtraBoldItalic',
        fontSize: OS==='ios'?hp('6'):hp('8.5'),
        marginLeft: wp('5%'),
        backgroundColor: 'white',
        paddingVertical: OS==='ios'?0:hp('2%'),
    },

    card:{
        height: OS==='ios'?hp('20%'):hp('25%'),
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: wp('5%'),
        // marginRight: wp('2.5%'),
        // marginLeft: wp('2.5%'),
        // shadowColor: 'grey',
        shadowOpacity: 0.6,
        shadowOffset: { height: 10, width: 4 },
        shadowRadius: 20,
        elevation: 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginBottom: hp('4%')
    },

    flatList:{
        backgroundColor: 'transparent',
    },

    bottomHeight:{
        // height: hp('15%'),
        backgroundColor: 'white'
    },

    cardHeader:{
        color: 'white',
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: hp('4'),
        textAlign: 'center'
    },

    cardMid:{
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: hp('4.5'),
        textAlign: 'center'
    },
});