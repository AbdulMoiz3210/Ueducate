import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator,createStackNavigator,createAppContainer} from "react-navigation";

import Loading from './screens/Loading'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import Home from './screens/Home'
import Javascript from './screens/Javascript'
import Java from './screens/Java'
import Csharp from './screens/Csharp'
import mysql from './screens/mysql'
import ReactNative from './screens/ReactNative'

class App extends Component {
  render() {
    return (
      <View>
        return <AppNavigator />
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  
    Loading,
    SignUp,
    Login,
    Home,
    Javascript,
    ReactNative,
    mysql,
    Csharp,
    Java
  },
  {
    initialRouteName: 'Loading'
  }
);


export default createAppContainer(AppNavigator);