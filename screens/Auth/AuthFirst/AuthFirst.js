import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import {CustomButton} from '../../../components/button';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import styles from './AuthFirstStyles';

function AuthFirst({navigation}){

    // const states = useSelector(state=>state);
    const dispatch = useDispatch();

    return(
    <View style={styles.mainView}>
        <SafeAreaView>
            <Animatable.View animation="fadeIn" delay={200} useNativeDriver={true}>
                <Text style={styles.header}>Welcome,</Text>
                <Text style={styles.subHeader}>Complete your set up here.</Text>
            </Animatable.View>
            <Animatable.View animation="fadeIn" delay={400} useNativeDriver={true} style={styles.buttonView}>
                <CustomButton
                    title="Signup"
                    onPress={()=>{
                        dispatch({
                            type: 'SIGNUP'
                        });
                        navigation.push('AuthForm')
                    }}
                />
                <CustomButton
                    title="Login"
                    onPress={()=>{
                        dispatch({
                            type: 'LOGIN'
                        });
                        navigation.push('AuthForm')
                    }}
                />
            </Animatable.View>
        </SafeAreaView>
    </View>)
}


export default AuthFirst;
