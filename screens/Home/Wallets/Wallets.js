import React from 'react';
import { Text, View } from 'react-native';
import styles from './WalletStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const data = [
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

function _renderItem(item){
    return(
    <View style={styles.card}>
        <Text>{item.title}</Text>
    </View>)
}

const Wallet = ({navigation}) => {
    return (
        <SafeAreaView style={styles.rootView}>
            <Text style={styles.headerText}>Wallets</Text>
            <ScrollView style={styles.mainView}>
                <FlatList
                    data={data}
                    renderItem = {(item)=> _renderItem(item)}
                    horizontal={true}
                    keyExtractor = {(item)=>item.id}
                    style={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                />

                
            </ScrollView>
        </SafeAreaView>
    )
}

export default Wallet;
