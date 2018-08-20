import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView, Button} from 'react-native';

export default class Menu extends Component{

    CalendarBtn(){
        this.props.navigator.push({
            id: "CalendarView"
        })
    }

    render(){
        return(
            <View>
                <Text>kevin this is the menu.</Text>
                <Button
                    onPress={() => {this.CalendarBtn()}}
                    title="Calendar"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}


AppRegistry.registerComponent('Menu', () => Menu);
