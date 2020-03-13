import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreateBT from '../../../../components/customBottomTab';

const addWallet = ({}) => {
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <ScrollView style={{backgroundColor: 'white'}}>
                <Text>addWallet</Text>
            </ScrollView>
            <CreateBT />
        </View>
    )
}

export default addWallet;
