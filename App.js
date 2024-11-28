import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Box, NativeBaseProvider, VStack, useColorModeValue } from 'native-base';
import theme from './theme';
import ToggleDarkMode from './ToggleDarkMode';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Reports from './src/screens/Reports';
import Monitor from './src/screens/Monitor';
import Profile from './src/screens/Profile';
import Config from './src/screens/Config';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Competencias from "./src/screens/Competencias";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainTab = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Reports') {
            iconName = focused ? 'document-text' : 'document-text';
          } else if (route.name === 'Monitor') {
            iconName = focused ? 'bar-chart' : 'bar-chart';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Config') {
            iconName = focused ? 'settings' : 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        headerLeft: () => (
          <Pressable onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
            <Ionicons name="menu" size={24} color="black" />
          </Pressable>
        ),
      })}>
      <Tab.Screen name="Reports" component={Reports} options={{ headerShown: true }} />
      <Tab.Screen name="Monitor" component={Monitor} options={{ headerShown: true }} />
      <Tab.Screen name="Home" component={Home} options={{ headerShown: true }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
      <Tab.Screen name="Config" component={Config} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
};

const DrawerMenu = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="MainTab" component={MainTab} options={{ title: 'Inicio' }} />
      <Drawer.Screen name="Competencias" component={Competencias} options={{ title: 'Competencias' }} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <VStack flex={1} bg={useColorModeValue("light.background.50", "dark.background.900")}>
          <Box safeAreaTop bg={useColorModeValue('light.background.100', 'dark.background.900')}>
            <ToggleDarkMode />
          </Box>
          <Stack.Navigator>
            {!isAuthenticated ? (
              <>
                <Stack.Screen name="Login" options={{ headerShown: false }}>
                  {() => <Login setIsAuthenticated={setIsAuthenticated} />}
                </Stack.Screen>
                <Stack.Screen name="Register" options={{ headerShown: false }}>
                  {() => <Register setIsAuthenticated={setIsAuthenticated} />}
                </Stack.Screen>
              </>
            ) : (
              <Stack.Screen name="DrawerMenu" component={DrawerMenu} options={{ headerShown: false }} />
            )}
          </Stack.Navigator>
        </VStack>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
