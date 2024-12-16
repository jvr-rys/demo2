import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Logout from './src/screens/Logout';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainTab = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
     <Drawer.Screen name="Home" component={Home}/>
     <Drawer.Screen name="Settings" component={Settings}/>
     <Drawer.Screen name="Logout" component={Logout}/>
    </Drawer.Navigator>
  )
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isAuthenticated ? "MainTab" : "Login"}>
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {() => <Login setIsAuthenticated={setIsAuthenticated} />}
          </Stack.Screen>
          <Stack.Screen name="Register" options={{ headerShown: false }}>
            {() => <Register setIsAuthenticated={setIsAuthenticated} />}
          </Stack.Screen>
          <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
