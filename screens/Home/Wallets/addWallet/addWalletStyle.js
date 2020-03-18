import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
const OS = Platform.OS;
export default styles = StyleSheet.create({
    mainView:{
        backgroundColor: 'white',
        flexDirection: 'column',
    } ,

    input:{
        paddingVertical: hp('5%')
    },

    headerText:{
        fontFamily: 'Montserrat-ExtraBoldItalic',
        fontSize: OS==='ios'?hp('5.5'):hp('6.5'),
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingVertical: OS==='ios'?0:hp('2%'),
    },

    debit:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'MontSerrat-SemiBold',
        alignItems: 'center',
        paddingVertical: hp('5%'),
        height: OS==='ios'?hp('15%'):hp('20%')
    },

    colorDemo:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'MontSerrat-SemiBold',
        alignItems: 'center',
        marginVertical: hp('2.5%'),
        height: OS==='ios'?hp('15%'):hp('20%')
    },

    colorCircle:{
        height: wp('15%'),
        width: wp('30%'),
        borderRadius: 12,
        borderWidth: 2.5
    },

    card:{
        height: OS==='ios'?hp('20%'):hp('25%'),
        width: wp('80%'),
        alignSelf: 'center',
        borderRadius: wp('5%'),
        marginVertical: OS==='ios'?'5%':'12.5%',
        // marginRight: wp('2.5%'),
        // marginLeft: wp('2.5%'),
        // shadowColor: 'grey',
        // shadowOpacity: 0.6,
        // shadowOffset: { height: 10, width: 4 },
        // shadowRadius: 20,
        // elevation: 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginBottom: hp('4%')
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

    bottomTab:{
        height: hp('7.5%'),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    back:{
        fontSize: 18,
        fontFamily: 'Montserrat-ExtraBold',
        alignSelf: 'center',
        marginLeft: '5%',
        color: 'black'
    },

    btnView:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
});