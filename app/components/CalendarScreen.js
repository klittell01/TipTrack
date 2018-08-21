import React, {Component} from 'react';
import {AppRegistry, Text, View, TouchableHighlight, Button} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {TabNavigator, createStackNavigator} from 'react-navigation';
import DayScreen from './Day.js';


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

  DayClick(myDate){
      this.props.navigation.navigate('DayScreen', myDate);
  };

  render(){
    return(
        <View>
            <CalendarList
                onDayPress={(day) => {this.DayClick(day)}}
                pastScrollRange={24}
                futureScrollRange={24}
            />
        </View>
    )
  }
}

AppRegistry.registerComponent('CalendarView', () => CalendarView);
