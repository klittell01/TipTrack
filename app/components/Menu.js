import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView, Button} from 'react-native';

export default class Menu extends Component{


    render(){
        return(
            <View>
                <Text>kevin this is the menu.</Text>
            </View>
        )
    }
}


AppRegistry.registerComponent('Menu', () => Menu);
