import React, {Component} from 'react';
import {AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    ListView,
    Button,
    Picker,
    AsyncStorage,
    Alert,}
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
            tipout2: '87',
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

// // TODO:  add the fetching data function and fill the data in the correct spots




    CompileData = () => {
        let keydate = this.state.year + this.state.month + this.state.day
        const myObj = {
            myPosition: this.state.myPosition,
            cashTips: this.state.cashTips,
            creditTips: this.state.creditTips,
            tipout: this.state.tipout,
            tipin: this.state.tipin,
        }
        console.log('step one');
        const myObjStr = JSON.stringify(myObj)
        console.log(myObjStr);
        AsyncStorage.setItem('keydate', myObjStr)
        console.log('step one');
        /*const StoreData = async (keydate, myObjStr) => {
            try {
                console.log("test 1");
                await AsyncStorage.setItem(keydate, myObjStr)
                console.log("test 2");
            } catch (error){
                console.log("test error");
                console.log(error.message);
            }
        }
        */
    }

    RetrieveData = async() => {
        let keydate = this.state.year + this.state.month + this.state.day
        console.log('this is the first part');
        Alert.alert('well well well' + myParsedData.tipin)
    //    let myData = await AsyncStorage.getItem('keydate');
    //    console.log('and the second part');
    //    const myParsedData = JSON.parse(myData)
    //    console.log('well well well ' + myParsedData.tipin);
        /*
        const GetData = async (keydate) => {
            console.log('what goes here?');
            try {
                console.log('first');
                const myData = await AsyncStorage.getItem('keydate');
                console.log('second');
                let key = '' + keydate;
                if (myData !== null) {
                    // We have data!!

                    const myParsedData = JSON.parse(myData)
                    this.setState({tipout2: myParsedData.tipout})
                    //return myParsedData;
                }
            } catch (error) {
                console.log('and less good things here');
                // Error retrieving data
            }
        }
        */
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
                    onPress={this.CompileData.bind(this)}
                    title="Save Changes"
                    color="#841584"
                    accessibilityLabel="click this button"
                />
                <Button
                    onPress={this.RetrieveData.bind(this)}
                    title="Load Changes"
                    color="#841584"
                    accessibilityLabel="click this button"
                />
            <Text>my saved tipout is: {this.state.tipout2}</Text>
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
