import React, { Component } from 'react';
 
import { StyleSheet, View, WebView,ScrollView ,Image,TouchableOpacity,Icon} from 'react-native';

import { Container, Header,Left,Body,Button, Content, List, ListItem, Title,Text } from 'native-base';

export default class ReactNative extends Component {

  render() {
    return (
 <ScrollView>
 
        <View style={{ height: 900,width: 370 }}>
         
        <View style={styles.navBar}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                                     <Text style={{color:'#e93766', fontSize: 14}}> Back </Text>
                                    </TouchableOpacity>
        <Image source={require('../images/logo.png')} style={{ width: 98, height: 22 }} />

          <View style={styles.rightNav}>
          <Text onPress={() => this.props.navigation.navigate('Login')} style={{color:'#e93766', fontSize: 18}}> Logout </Text>
          </View>

        </View>
        <Text style={{color:'#e93766', fontSize: 18}}>
        React Native Videos </Text>
<Text style={{color:'#8b0000', fontSize: 14}}>
First video
</Text>
            <WebView
                  
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/Qt2ohl-hyFw' }}
           />
        <Text style={{color:'#e93766', fontSize: 18}}>
        React Native Videos </Text>
<Text style={{color:'#8b0000', fontSize: 14}}>
Second video
</Text>
            <WebView
                  
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: 'https://www.youtube.com/embed/sKe1_bUHOXU'}}
         />
           <Text style={{color:'#e93766', fontSize: 18}}>
React Native Videos </Text>
<Text style={{color:'#8b0000', fontSize: 14}}>
Third video
</Text>
           <WebView
                  
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: 'https://www.youtube.com/embed/DLX62G4lc44' }}
         />
           </View>
        </ScrollView>
 
    );
  }
}
 
const styles = StyleSheet.create({
 

    navBar: {

        height: 55,
    
        backgroundColor: 'white',
    
        elevation: 3,
    
        paddingHorizontal: 15,
    
        flexDirection: 'row',
    
        alignItems: 'center',
    
        justifyContent: 'space-between'
    
      },
    
      rightNav: {
    
        flexDirection: 'row'
    
      }

});