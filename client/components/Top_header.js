import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header} from 'react-native-elements';

export default class Topheader extends Component {
  render() {
    return (
        <Header
        placement = "left"
        leftComponent = {
            {
                icon: 'menu',
                color: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                height: 45 + '%',
                onPress: () => alert('Coming soon!')
            }
        }
        centerComponent = {
            {
                text: 'Clara Online',
                style: {
                    color: '#fff'
                }
            }
        }
        rightComponent = {
            {
                icon: 'home',
                color: '#fff',
                onPress: () => alert('Coming soon!')
            }
        }
        />
    )
  }
}