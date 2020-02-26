import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    
    rootView:{
        flex: 1,
        backgroundColor: 'white'
    },

    mainView:{
        height: hp('120%'),
        marginTop: wp('5%'),
        marginBottom: hp('-5%'),
        backgroundColor: 'white'
    },

    headerText:{
        fontFamily: 'Montserrat-ExtraBoldItalic',
        fontSize: hp('6'),
        marginLeft: wp('5%')
    },

    card:{
        height: hp('25%'),
        width: wp('90%'),
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: wp('5%'),
        marginRight: wp('5%'),
        marginLeft: wp('5%'),
        shadowColor: 'red',
        shadowOpacity: 0.4,
        shadowOffset: { height: 5, width: 0 },
        shadowRadius: 20,
        elevation: 20,
    },

    flatList:{
        backgroundColor: 'white',
        height: hp('40%'),
    }
});