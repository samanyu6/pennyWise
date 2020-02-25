import React from 'react';
import { Text, View } from 'react-native';
import styles from './WalletStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wallet = ({navigation}) => {
    return (
        <SafeAreaView style={styles.rootView}>
            <View style={styles.mainView}>
                <Text style={styles.headerText}>Wallets</Text>
            </View>
        </SafeAreaView>
    )
}

export default Wallet;
