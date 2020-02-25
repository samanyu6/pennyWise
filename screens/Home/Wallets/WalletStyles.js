import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    
    rootView:{
        flex: 1,
        backgroundColor: 'white'
    },

    mainView:{
        height: hp('100%'),
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        marginTop: wp('5%'),
        backgroundColor: 'white'
    },

    headerText:{
        fontFamily: 'Montserrat-ExtraboldItalic',
        fontSize: hp('6')
    }
});