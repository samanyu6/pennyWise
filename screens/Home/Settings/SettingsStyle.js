import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

    main:{
        flex: 1,
        backgroundColor: 'white'
    },

    colView:{
        height: hp('85%'),
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        fontSize: 65,
        alignItems: 'center'
    },

    textView:{
        fontFamily: 'Montserrat-Bold',
        fontSize: wp('9%'),
        shadowOpacity: 0.1,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 4,
        elevation: 4,
    },

    ScrollView:{
        height: hp('85%'),
    }
})