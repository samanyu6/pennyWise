import React, { useState, useEffect } from 'react';
import { Text, View , Switch, Platform} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CreateBT from '../../../../components/customBottomTab';
import styles from './addWalletStyle';
import InputText from '../../../../components/textInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import {CustomButton} from '../../../../components/button';
import getColor from '../../../../components/randColor';
import Icon from 'react-native-vector-icons/Entypo';

const OS = Platform.OS;
const fadeIn = {
    from: {
        opacity: 0,
        },
        to: {
        opacity: 1,
    },
}

const fadeOut={
    from: {
        opacity: 1,
        },
        to: {
        opacity: 0,
    },
}

const addWallet = ({navigation}) => {

    const [fade, setFade]=useState('fadeIn');
    const [offset , setOffset]=useState(0);
    const [toggle, setToggle]=useState(false);
    const [cardColor, setColor] = useState(getColor());

    useEffect(()=>{

    },[]);

    return (
        <View style={{flex:1, backgroundColor:'white',flexDirection:'column', alignItems: 'center'}}>
            <SafeAreaView>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.headerText}>Add Wallet</Text>
                    <ScrollView 
                        style={styles.mainView}
                        onScrollBeginDrag={event=>setOffset(event.nativeEvent.contentOffset.y)}
                        onScroll={event=>{
                            let y = event.nativeEvent.contentOffset.y
                            y>offset?setFade('fadeIn'):setFade('fadeOut')
                            setOffset(y);
                        }}
                        alwaysBounceHorizontal={false}
                        style={{ width: wp('80%') ,marginVertical: hp('2.5%') }}
                        showsVerticalScrollIndicator={false}
                    >
                        <InputText placeholder="Enter Balance" type="decimal-pad" fsize={48} viewstyle={styles.input}/>
                        <InputText placeholder="Enter Wallet Name" fsize={32}  viewstyle={styles.input}/>
                        <View style={styles.debit}>
                            <Text style={{fontSize: 16}}>Enable Monthly Income ?</Text>
                            <Switch
                                onValueChange={()=>toggle?setToggle(false):setToggle(true)}
                                value={toggle}
                            />
                        </View>
                        <Animatable.View animation={toggle?fadeIn:fadeOut} style={{height: !toggle?0:hp('20%')}}>
                            <InputText placeholder="Enter Income" fsize={32}  viewstyle={styles.input}/>
                        </Animatable.View>
                        <View style={styles.colorDemo}>
                            <TouchableOpacity onPress={()=> setColor(getColor())}>
                                <View style={[styles.card,{backgroundColor: cardColor}]}>
                                    <Text style={styles.cardHeader}>Change Card Color</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <CustomButton
                            title= "Create Card"
                            // isLoading = {loading}
                            style = {{
                                width: wp('80%'),
                                alignSelf: 'center',
                                marginVertical: hp('15%'),
                                shadowColor: 'white',
                                elevation: 0
                            }}

                            textStyle={{
                            }}

                            onPress={()=> {
                                setColor(getColor())
                            }}
                        />
                        <View style={{height: (OS==='ios')?hp('10%'):hp('15%')}}></View>
                    </ScrollView>
                </KeyboardAwareScrollView>
                {/* <View style={styles.btnView}> */}
                    <TouchableOpacity onPress={()=> navigation.pop()} style={styles.btnView}>
                        <Icon 
                        name="chevron-down"
                        size={42}
                        />
                        <Text style={styles.back}>BACK</Text>
                    </TouchableOpacity>
                {/* </View> */}
                {/* <CreateBT animation={fade} delay={200}/> */}
            </SafeAreaView>
        </View>
    )
}


export default addWallet;
