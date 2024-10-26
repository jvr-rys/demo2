import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from "./src/screens/Homescreen";
import NotiScreen from './src/screens/Notificationscreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import activity from './src/screens/activity';
import ActivityScreen from './src/screens/activity';
import ConfigScreen from './src/screens/configuration';
import ContactScreen from './src/screens/contact';
import MonitorScreen from './src/screens/monitor';
import ProfileScreen from './src/screens/profile';
import ReportsScreen from './src/screens/reports';
import SensorScreen from './src/screens/sensor';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homescreen} />
        <Drawer.Screen name="Notifications" component={NotiScreen}/>
        <Drawer.Screen name="Activity" component={ActivityScreen}/>
        <Drawer.Screen name="Configuration" component={ConfigScreen}/>
        <Drawer.Screen name="Contact" component={ContactScreen}/>
        <Drawer.Screen name='Monitor' component={MonitorScreen}/>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='Reports' component={ReportsScreen}/>
        <Drawer.Screen name='Sensor' component={SensorScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
