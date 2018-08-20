import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView, Button} from 'react-native';

export default class Day extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedDate: this.props.myDate
        }
    }

    CalendarBtn(){
        this.props.navigator.push({
            id: "CalendarView"
        })
    }

    render(){
        return(
            <View>
                <Text>this is the clicked day: {this.state.selectedDate.year}</Text>
                <Button
                    onPress={() => {this.CalendarBtn()}}
                    title="Back to Calendar"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}


AppRegistry.registerComponent('Day', () => Day);
