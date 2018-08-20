import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import DataFetch from './app/components/DataFetch.js'
import Nav from './app/components/Nav.js'
import CalendarView from './app/components/CalendarView.js'
import Menu from './app/components/Menu.js'
import Day from './app/components/Day.js'

export default class MyNewApp extends Component{

    renderScene(route, navigator){
        switch(route.id){
            case 'CalendarView':
                return(<CalendarView navigator = {navigator} title = "Calendar View" />)
            case 'DataFetch':
                return(<DataFetch navigator = {navigator} title = "Data Fetch" />)
            case 'Menu':
                return(<Menu navigator = {navigator} title = "Menu"/>)
            case 'Day':
                return(<Day myDate = {route.myDate} navigator = {navigator} title = "Day"/>)
            case 'Nav':
                return(<Nav user = {route.user} navigator = {navigator} title = "nav" />)
        }
    }

  render(){
    return(
        <Navigator
            initialRoute = {{id: 'CalendarView'}}
            renderScene = {this.renderScene}
            configureScreen = {(route, routeStack) =>navigator.SceneConfigs.FloatFromBottom}
        />
    );
  }
}

AppRegistry.registerComponent('MyNewApp', () => MyNewApp);
