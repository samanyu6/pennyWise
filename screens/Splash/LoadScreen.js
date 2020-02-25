import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const LoadScreen = () => ( 
  <View style={{flex: 1,alignItems: 'center',justifyContent: 'center', backgroundColor: 'white'}}>
      <ActivityIndicator
          size= "large"
          color="black"
      />
  </View>
);

export default LoadScreen;
