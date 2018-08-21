import {DrawerNavigator} from 'react-navigation';

import CalendarView from '../components/CalendarView.js'
import Day from '../components/Day'

const DrawerScreen = DrawerNavigator({
    CalendarView: {screen: CalendarView},
    Day: {screen: Day},
}, {
    headerMode: 'none',
})

export default DrawerScreen;
