import React, {Component} from 'react';
import {AppRegistry, Text, View, TouchableHighlight, Button} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

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

  MenuClick(){
      this.props.navigator.push({
          id: "Menu"
      })
  }

  DayClick(myDate){
      this.props.navigator.push({
          id: "Day",
          myDate: myDate
      })
  }

  render(){
    return(
        <View>
            <Button
                onPress={() => {this.MenuClick()}}
                title="Menu"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
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
