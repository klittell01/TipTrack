import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class CalendarView extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'kevin',
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hi there,'
  }

  render(){
    let name = this.state.showName ? this.state.name : 'No Name';
    return(
      <View>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('CalendarView', () => CalendarView);
