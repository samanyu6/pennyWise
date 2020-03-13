import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './WalletStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import getColor from '../../../components/randColor';
import ActionButton from '../../../components/floatingAction';

const data = [
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    color: getColor()
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    color: getColor()
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    color: getColor()
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d42',
    title: 'Fourth Item',
    color: getColor()
  },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d42',
//     title: 'Fourth Item',
//     color: 'white'
//   }
]

function _renderItem(item, navigation){
    return(
        <TouchableOpacity onPress={()=> {
                navigation.navigate('DetailsWallet', { params: item })
        }}>
            <View style={[styles.card,{backgroundColor: item.color, shadowColor: item.color}]}>
                <Text style={styles.cardHeader}>SBI</Text>
                <Text style={styles.cardMid}>$ 15,000</Text>
            </View>
        </TouchableOpacity>
    )
}

const Wallet = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
            <ScrollView style={styles.flatList} 
                showsVerticalScrollIndicator={false}
            >
            <SafeAreaView>
                <Text style={styles.headerText}>Wallets</Text>
            </SafeAreaView>
            {data.map((items)=>{
                return _renderItem(items, navigation)
            })}
            <View style={{height: hp('15%')}}>
            </View>
            {/* <FlatList
                data={data}
                renderItem = {(item)=>_renderItem(item, navigation)}
                keyExtractor = {(item)=>item.id}
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
            />  */}
            </ScrollView>
            <ActionButton
                icon="plus"
                navigate="details"
            />
        </View>
    )
}

export default Wallet;
