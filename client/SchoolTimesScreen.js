import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import { Container, Drawer, Header, Body, Left, Right, Button, Icon, Title, Footer, FooterTab, Content } from 'native-base';

export default class SchoolTimesScreen extends Component {
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Icon name='notification' style={{ fontSize:24 , color: tintColor}} />
    )
  } 
  render() {
    return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title> Unterrichtszeiten  </Title>
        </Body>
        
      </Header>
      <Content>




      </Content>
    </Container>   
    )
  }
}

