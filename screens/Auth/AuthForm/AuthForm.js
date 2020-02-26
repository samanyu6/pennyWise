import React, {useState, useEffect, useCallback} from 'react';
import { View, SafeAreaView, Dimensions, KeyboardAvoidingView, Keyboard} from 'react-native';
import {CustomButton} from '../../../components/button';
import * as Animatable from 'react-native-animatable';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import FlashMessage,{showMessage} from "react-native-flash-message";
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import styles from './AuthFormStyle';
import AsyncStorage from '@react-native-community/async-storage';

function LoginScreen({navigation}){

    const authType = useSelector(state=> state.authType);
    const dispatch = useDispatch();

    const HEIGHT = Dimensions.get('window').height;
    const WIDTH = Dimensions.get('window').width;
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoad] = useState(false);

    async function Validate(email,password){
        setLoad(true);
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var em = re.test(String(email).toLowerCase());
        var ps = (password.length>=6)?true:false;
        if(!em && !ps){
             showMessage({
                message: 'Email and Password',
                description: 'Inavlid email and password. Check again.',
                type: 'danger'
            });
            setLoad(false)
        }
        else if(!em){
             showMessage({
                 message: 'Email',
                 description: 'Enter a valid Email ID',
                 type: 'danger'
             });
             setLoad(false)
        }
        else if(!ps){
             showMessage({
                message: 'Password',
                description: 'Enter a password more than six characters',
                type: 'danger'
            });
            setLoad(false)
        }
        else if(em && ps)
        {
            if(title==='Sign Up'){
                try{
                     var res = await auth().createUserWithEmailAndPassword(user,pass); 
                     setLoad(false);

                     try{
                         dispatch({type: 'LOGGEDIN', payload: res})
                         showMessage({
                            message: '',
                            description: 'Successfully Registered!',
                            type: 'success' 
                         });
                         setTimeout(()=>{
                            // navigation.navigate('Home')
                            navigation.reset({
                                index: 0,
                                routes: [{
                                    name: 'Home'
                                }]
                            })
                         },1000)
                     }
                     catch(e){
                        showMessage({
                            message: '',
                            description: 'Error registering, please try again.',
                            type: 'danger'
                        })
                     }
                }
                catch(e){
                    showMessage({
                        message: '',
                        description: e.message,
                        type: 'danger' 
                    })
                    setLoad(false)
                }
            }
            if(title==='Login'){
                try{
                    var res = await auth().signInWithEmailAndPassword(user,pass);
                    setLoad(false)
                    try{
                        console.log(res.user)
                        dispatch({type: 'LOGGEDIN', payload: res})
                        showMessage({
                           message: '',
                           description: 'Successfully Logged in!',
                           type: 'success' 
                        })
                        setTimeout(()=>{
                            // navigation.navigate('Home')
                            navigation.reset({
                                index: 0,
                                routes: [{
                                    name: 'Home'
                                }]
                            })
                        },1000)
                    }
                    catch(e){
                        console.log(e)
                       showMessage({
                           message: '',
                           description: 'Error logging in, please try again.',
                           type: 'danger'
                       })
                    }
                }
                catch(e){
                    setLoad(false)
                    showMessage({
                        message: '',
                        description: e.message,
                        type: 'danger' 
                    })
                }
            }
        }
    }

    useEffect(()=>{
        setTitle(authType)
    });

    return(
        <View style={styles.mainView}>
            <SafeAreaView>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={styles.verticalOffset}>
                <Animatable.Text animation="fadeIn" delay={200} useNativeDriver={true} style={styles.header}>
                    {title}
                </Animatable.Text>
                <Animatable.View animation="fadeIn" delay={400} useNativeDriver={true} style={styles.body}>
                    <TextInput
                        placeholder="Enter Email ID"
                        keyboardType="email-address"
                        autoCapitalize = "none"
                        onChangeText = {(text)=>setUser(text)}
                        value = {user}
                        autoCompleteType = 'email'
                        style = {styles.textStyleEmail}
                        placeholderTextColor= "grey"
                    />
                    <TextInput
                        placeholder="Enter Password"
                        secureTextEntry = {true}
                        onChangeText = {(text)=>setPass(text)}
                        value = {pass}
                        autoCompleteType = 'password'
                        style = {styles.textStylePass}
                        placeholderTextColor="grey"
                    />
                    <CustomButton
                        title= {title}
                        isLoading = {loading}
                        style = {{
                            width: WIDTH*0.8,
                        }}
                        onPress={()=> {
                            Keyboard.dismiss();
                            Validate(user,pass,authType);
                        }}
                    />
                </Animatable.View>
                </KeyboardAvoidingView>
            </SafeAreaView>
            <FlashMessage 
                position="bottom" 
                animationDuration = {300}
                duration = {900}
                textStyle={{
                    fontWeight: '700',
                    fontSize: 18,
                    color: 'white'
                }}
            />
        </View>
    );
}

export default LoginScreen;
