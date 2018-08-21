import {StackNavigator} from 'react-navigation';
import {DrawerScreen} from './DrawerScreen.js'

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: 'rgb(255,45,85)',
            paddingLeft: 10,
            paddingRight: 10
        },
        title: 'Home',
        headerTintColor: 'white',
        headerLeft:
        <View>
            <TouchableHighlight
                onPress={() => {navigation.navigate('DrawerOpen');
            }}>
                <Text>Menu</Text>
            </TouchableHighlight>
        </View>
    })
})
