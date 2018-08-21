import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView, Button} from 'react-native';

export default class Day extends Component{

    constructor(props){
        super(props);
        this.state = {
            day: this.props.navigation.getParam('day'),
            month: this.props.navigation.getParam('month'),
            year: this.props.navigation.getParam('year'),
        }
    }


    render(){
        return(
            <View>
                <Text>{"this is the clicked day: " + this.state.day}</Text>
            </View>
        )
    }
}


AppRegistry.registerComponent('Day', () => Day);
