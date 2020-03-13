import React from 'react';
import { Platform, View , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ActionButton = ({icon,navigate, navigation}) => {

    return(
        <View style={styles.btn}>
            <TouchableOpacity onPress={()=> navigation.navigate(navigate)} hitSlop={{
                top: hp('2'),
                bottom: hp('2'),
                left: wp('2'),
                right: wp('2'),
            }}>
                <Icon
                    name={icon}
                    size = {wp('7%')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    btn:{
        height: hp('8%'),
        width: hp('8%'),
        borderRadius: hp('8%'),
        backgroundColor: 'white',
        position: 'absolute',
        top: Platform.OS==='ios'?hp('70%'):hp('65%'),
        left: wp('80%'),
        justifyContent: 'center',
        shadowOpacity: 0.4,
        shadowOffset: { height: 5, width: 2 },
        shadowRadius: 10,
    },

    icon:{
        color: 'black',
        alignSelf: 'center',
    }
})

export default ActionButton;
