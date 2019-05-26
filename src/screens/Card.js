import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container style={styles.course}>
        <Content>
          <Card style={{flex: 1}}>

                <CardItem>
                <Left>
                    <Thumbnail source = {this.props.logoUri} />
                    <Body>
                    <Text style={styles.head}>{this.props.head}</Text>
                    <Text note style={styles.title}>{this.props.subhead}</Text>
                    </Body>
                </Left>
                </CardItem>

                <CardItem>
                <Body>
                    <Text>
                    {this.props.details}
                    </Text>
                </Body>
                </CardItem>

                <CardItem>
                <Left>
                    <Button transparent textStyle={{color: '#87838B'}}>
                   
                    <Text>Open</Text>
                    </Button>
                </Left>
                </CardItem>

          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    img: {
        flex:1,
        //justifyContent: 'center',
       // alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch',
        borderWidth:0
    },
    course:{
        borderRadius: 9,
        borderWidth: 3,
        borderColor: '#e74c3c',
        height:300,
        width:200,
        marginLeft:20,
        overflow: 'hidden'
    },
    txt: {
        textAlign: 'center',
        color: '#2c3e50',
        fontWeight: '700',
        fontSize:15
    },
    title:{
        width:100,
        textAlign: 'left',
    },
    head:{
        width:100
    }

});