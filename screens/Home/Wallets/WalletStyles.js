import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    
    rootView:{
        backgroundColor: 'white'
    },

    mainView:{
        height: hp('120%'),
        marginTop: wp('2.5%'),
        marginBottom: hp('-10%'),
        backgroundColor: 'white',
    },

    headerText:{
        fontFamily: 'Montserrat-ExtraBoldItalic',
        fontSize: hp('6'),
        marginLeft: wp('5%'),
        backgroundColor: 'white'
        // paddingTop: hp('1.5%')
    },

    card:{
        height: hp('25%'),
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: wp('5%'),
        // marginRight: wp('2.5%'),
        // marginLeft: wp('2.5%'),
        shadowColor: 'grey',
        // shadowOpacity: 0.4,
        // shadowOffset: { height: 5, width: 0 },
        // shadowRadius: 10,
        // elevation: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginBottom: hp('2%')
    },

    flatList:{
        flex:1,
        backgroundColor: 'white',
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

    detailsCard:{
        // flex:1,
        height: hp('50%'),
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: wp('5%'),
        marginRight: wp('5%'),
        backgroundColor: 'gray',
        marginLeft: wp('5%'),
        // shadowColor: 'grey',
        // shadowOpacity: 0.4,
        // shadowOffset: { height: 5, width: 0 },
        // shadowRadius: 10,
        // elevation: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginBottom: hp('2%')
    }
});