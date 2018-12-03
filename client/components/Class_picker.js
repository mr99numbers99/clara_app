import React, { Component } from 'react'
import {StyleSheet,Text,View,Picker} from 'react-native';

export default class Class_picker extends Component {
  state = {
        user: ''
    }
    updateUser = (user) => {
        this.setState({
            user: user
        })
    }
  render() {
    return (
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label="Steve" value="steve" />
          <Picker.Item label="Ellen" value="ellen" />
          <Picker.Item label="Maria" value="maria" />
        </Picker>
    )
  }
}