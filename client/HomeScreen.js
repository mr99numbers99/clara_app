import React, { Component } from 'react'
import { Container, Drawer, Header, Body, Left, Right, Button, Icon, Title, Content , Picker , Form , Text} from 'native-base';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  getCalenderWeek() {
    //setup backend
  }
  




  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Icon name='home' style={{ fontSize:24 , color: tintColor}} />
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
          <Title> Übersicht </Title>
        </Body>
        <Right />
      </Header>
      <Content>
      <Text style={{ flex:1, justifyContent:'center',textAlign: 'center',fontSize:20, fontWeight:'bold',color:'#1A1110',marginTop: 25}}> 
      Bitte wähle eine Klasse / Stufe aus</Text>

      <Form style={{flex:1, justifyContent:'center',alignItems:'center',marginTop:100}}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 220 ,}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="EF" value="key0" />
            </Picker>
          </Form>
          <Button style={{flex:1,justifyContent: 'center',alignItems:'center',marginTop: 150}} rounded >
            <Text>Weiter</Text>
          </Button>

        </Content>
    </Container>   
    )
  }
}
