import React, {Component} from 'react';
import {AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    ListView,
    Button,
    Picker,
    AsyncStorage,}
from 'react-native';

export default class Day extends Component{

    constructor(props){
        super(props);
        this.state = {
            day: this.props.navigation.getParam('day'),
            month: this.props.navigation.getParam('month'),
            year: this.props.navigation.getParam('year'),
            cashTips: '',
            creditTips: '',
            tipout: '',
            tipin: '',
            pickerValue: '',
            myPosition: '',
            showTipin: false,
        }
    }

    ChangePosition(itemValue){
        this.setState({pickerValue : itemValue})
        if (itemValue == 2){
            this.setState({showTipin : true})
        } else {
            this.setState({showTipin : false})
        }
    };

    async StoreData(){
        try {
            await AsyncStorage.setItem('keydate', 'myObjStr')
        } catch (error){
            console.log(error.message);
        }
    }

    CompileData(){
        //keydate = year + month + day
        const myObj = {
            myPosition: this.state.myPosition,
            cashTips: this.state.cashTips,
            creditTips: this.state.creditTips,
            tipout: this.state.tipout,
            tipin: this.state.tipin,
        }
        //const myObjStr = JSON.stringify(myObj)
        this.StoreData()

    }


    render(){
        return(
            <View>
                <Text>{"this is the clicked day: " + this.state.day}</Text>
                <View style = {styles.rowBox}>
                    <Text>Select Position: </Text>
                    <Picker style={{width:'50%'}}
                        selectedValue={this.state.pickerValue}
                        onValueChange={(itemValue, itemIndex) =>
                            this.ChangePosition(itemValue)}

                    >
                        <Picker.Item label = '1' value = '1'/>
                        <Picker.Item label = '2' value = '2'/>
                    </Picker>
                </View>
                <View style = {styles.rowBox}>
                    <Text style = {styles.myText}>Cash Tips:</Text>
                    <TextInput
                        style={styles.moneyInputBox}
                        placeholder="$$$"
                        onChangeText={(text) => this.setState({cashTips : text})}
                    />
                </View>
                <View style = {styles.rowBox}>
                    <Text style = {styles.myText}>Credit Tips:</Text>
                    <TextInput
                        style={styles.moneyInputBox}
                        placeholder="$$$"
                        onChangeText={(text) => this.setState({creditTips : text})}
                    />
                </View>
                <View style = {styles.rowBox}>
                    <Text style = {styles.myText}>Tipout:</Text>
                    <TextInput
                        style={styles.moneyInputBox}
                        placeholder="$$$"
                        onChangeText={(text) => this.setState({tipout : text})}
                    />
                </View>
                {this.state.showTipin &&
                    <View style = {styles.rowBox}>
                        <Text style = {styles.myText}>Tipin:</Text>
                        <TextInput
                            style={styles.moneyInputBox}
                            placeholder="$$$"
                            onChangeText={(text) => this.setState({tipin : text})}
                        />
                    </View>
                }
                <Button
                    onPress={this.CompileData()}
                    title="Save Changes"
                    color="#841584"
                    accessibilityLabel="click this button"
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    moneyInputBox: {
        height: 40,
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
    },
    rowBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 2,
    },
    myText: {
        paddingRight: 20,
    }

});

AppRegistry.registerComponent('Day', () => Day);
