import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {TabNavigator, createStackNavigator} from 'react-navigation';

import CalendarView from './CalendarView.js';
import Menu from './Menu.js';
import DayScreen from './Day.js';

const AppStackNavigator = StackNavigator({
    Calendar: {
        screen: CalendarView,
        title: 'Calendar',
    },
    DayScreen: {
        screen: DayScreen,
        navigationOptions: {
            title: this.props.navigation.getParam('day');
        }
    }
})

export const Tabs = TabNavigator({
    Calendar: {
        screen: CalendarView,
        navigationOptions: {
            tabBarLabel: 'Calendar'
        },
    },
    Menu: {
        screen: Menu,
        navigationOptions: {
                tabBarLabel: 'Menu'
        },
    },
});
