import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';

const OS = Platform.OS;

const CreateBT = ({
    params,
}) => {
    return (
        <View style={styles.bottomNav}>
            <View style={styles.btnView}>
                <Icon 
                   name="chevron-down"
                   size={42}
                />
                <Text style={styles.back}>BACK</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    back:{
        fontSize: 24,
        fontFamily: 'Montserrat-ExtraBold',
        alignSelf: 'center',
        marginLeft: '5%'
    },

    btnView:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center'
    },

    bottomNav:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: (OS==='ios')?hp('8%'):hp('10%'),
        paddingLeft: '5%',
        width: wp('85%'),
        // alignSelf: 'center',
        alignItems: 'center',
        borderRadius: wp('5%'),
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
        elevation: 15, 
        position: 'absolute',
        top: OS==='ios'?hp('85%'):hp('80%'),
        alignSelf: 'center',
    }
})

export default CreateBT;
