import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import {TabNavigator, createStackNavigator} from 'react-navigation';
import CalendarView from './app/components/CalendarScreen.js';
import DayScreen from './app/components/Day.js';
import Menu from './app/components/Menu.js';

export default class MyNewApp extends Component {
    render(){
        return<AppStackNavigator/>;
    }
}

const AppStackNavigator = createStackNavigator({
    Calendar: {
        screen: CalendarView,
        title: 'Calendar',
    },
    DayScreen: {
        screen: DayScreen,
        navigationOptions: {
    //        title: {this.props.navigation.getParam('day')};
        }
    }
})
