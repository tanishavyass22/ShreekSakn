import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GuestScreen from '../screens/AuthScreens/GuestUserHome';
import MoreInformation from '../screens/AuthScreens/MoreInformationScreen';
import OtpScreen from '../screens/AuthScreens/OtpScreen';
import ProfileScreen from '../screens/AuthScreens/ProfileScreen';
import Registration from '../screens/AuthScreens/RegistrationScreen';
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';
import SeacrchScreen from '../screens/Regitstered_User_HomeScreens/Search';
import SearchRoomate from '../screens/Regitstered_User_HomeScreens/SearchRoommate';
import HelpScreen from '../screens/RootScreens/HelpScreen';
import TermsScreen from '../screens/RootScreens/Terms';
import PrivacyScreen from '../screens/RootScreens/PrivacyPolicy';
import FaqScreen from '../screens/RootScreens/FaqScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="GuestUserHome">
      <Stack.Screen name="GuestUserHome" component={GuestScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="MoreInformation" component={MoreInformation} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name ="SeacrchScreen" component={SeacrchScreen}/>
      <Stack.Screen name ="SearchRoomate" component={SearchRoomate}/>
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
          <Stack.Screen name="FaqScreen" component={FaqScreen} />
          <Stack.Screen name="TermsScreen" component={TermsScreen} />
          <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
