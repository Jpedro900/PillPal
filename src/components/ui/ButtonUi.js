import { Button } from 'react-native'
import React, { Component } from 'react'

export default class ButtonUi extends Component {
  render() {
    return (
      <Button
        color={'#1554F6'}
        title = {this.props.title}
        onPress={this.props.onPress}
      />
    )
  }
}