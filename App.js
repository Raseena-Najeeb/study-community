  
import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import LoginScreen from './Screens/LoginScreen';
import SettingScreen from "./Screens/SettingsScreen"
import {AppDrawerNavigator} from "./components/AppDrawerNavigator"
import DoubtDetails from "./Screens/DoubtDetails"
import AnswerForm from "./Screens/AnswerDoubt"
import Registration from "./Screens/Registration"


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: LoginScreen},
  RegistrationScreen : {screen : Registration},
  Drawer:{screen: AppDrawerNavigator},
  DoubtDetails : {screen : DoubtDetails},
})

const AppContainer =  createAppContainer(switchNavigator);
