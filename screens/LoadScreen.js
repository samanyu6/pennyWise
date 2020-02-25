import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Component } from 'react';

export default class loadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount(){
    const {navigation} = this.props;
    try{
        var res = await AsyncStorage.getItem('@userID');
        if(res=='null' || res==null)
            navigation.navigate('AuthFirst');
        else
            navigation.navigate('Home');
      }
      catch(e){
        console.log(e);
      }
  }

  render() {
    return (
        <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
            <ActivityIndicator
                size="large"
                color="black"
            />
        </View>
    );
  }
}

