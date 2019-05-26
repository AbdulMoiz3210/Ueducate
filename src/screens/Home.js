import React, { Component } from 'react';
import { Platform,StatusBar,StyleSheet,Text,TextInput,View,ScrollView,Image,FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from './Category';
import Card from './Card';

class Home extends Component {
    
    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS  ==  'android'){
            // Separte Header From Top
            this.startHeaderHeight = 70 + StatusBar.currentHeight    
        }
    }
    
    render(){
        return(
            //SafeAreaView to show borders in iphone
            <SafeAreaView  style={{  flex: 1 }}>
                {/* Main Container */}
                <View style={{  flex: 1 }}>
                    {/* header */}
                    <View style={{height: this.startHeaderHeight, backgroundColor: 'white',
                     borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
                        <View style={{flexDirection: 'row', padding: 10, 
                                backgroundColor: 'white', marginHorizontal: 20,
                                shadowOffset:{width: 1, height: 0},
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                elevation: 1,
                                marginTop: Platform.OS  ==  'android' ? 15 : null   
                                 }}>
                            <Image source={require('../images/logo.png')} style={{ width: 98, height: 22 }} />
                      
                        </View>
                    </View>
                    {/* / header */}
                    
                    {/* body */}
                    <ScrollView
                        // to send response as fast as Possible
                        scrollEventThrottle={16}
                    >
                    {/* tags area */}
                        <View style={{flex:1,backgroundColor: 'white',paddingTop:20}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                Popular Courses
                            </Text>
                                 
                            <View style={{height:130,marginTop:20}}>
                                 {/* to scroll components horizontally */}
                                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('Java')}>
                                        <Category imageUri={require('../images/java.jpg')} name="Java" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Csharp')}>
                                        <Category imageUri={require('../images/csharp.jpg')} name="C#" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('javascript')}>
                                        <Category imageUri={require('../images/jscript.jpg')} name="JavaScript" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('mysql')}>
                                         <Category imageUri={require('../images/mysql.jpg')} name="MySql" />
                                    </TouchableOpacity>
                                 </ScrollView>
                            </View>     
                        </View>
                     {/* / tags area */} 

                      {/* course area */}
                      <View style={{flex:1,backgroundColor: 'white',paddingTop:15,paddingBottom:20}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                               Videos
                            </Text>
                                 
                            <View style={{ height:300,marginTop:15,marginBottom:10}}>
                                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('Java')}>
                                        <Card logoUri={require('../images/javalogo.jpg')}
                                        head="Java" subhead="Tuitorials for Beginners"
                                        details="Java Fundamentals for Absolute Beginners" />
                                  </TouchableOpacity>

                                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Javascript')}>  
                                    <Card logoUri={require('../images/js.png')}
                                        head="JS" subhead="Learn JS in 1 Hour"
                                        details="JavaScript Basics Beginners" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ReactNative')}>
                                        <Card logoUri={require('../images/rn.png')}
                                        head="React Native" subhead="Intermediate to Advanced Crash courses in one week"
                                        details="React-Native Basics " />
                                    </TouchableOpacity>
                                 </ScrollView>
                            </View>     
                        </View>
                     {/* / course area */} 
                    </ScrollView>                
                    {/* / body */}
                </View>
                 {/* / Main Container */}
             </SafeAreaView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });