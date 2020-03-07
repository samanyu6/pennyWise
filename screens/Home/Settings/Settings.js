import React from 'react';
import { Text, View } from 'react-native';
import styles from './SettingsStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Settings = ({
    params,
}) => (
    <View style={styles.main}>
        <ScrollView style={styles.ScrollView}>
            <SafeAreaView style={styles.colView}>
                
                <TouchableOpacity>
                    <Text style={styles.textView}>Notifications</Text>
                </TouchableOpacity>
                {/* <Text style={styles.textView}></Text> */}
                <TouchableOpacity>
                    <Text style={styles.textView}>Backup</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textView}>Update Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textView}>Logout</Text>
                </TouchableOpacity>
            
            </SafeAreaView>
        </ScrollView>
    </View>
);

export default Settings;
