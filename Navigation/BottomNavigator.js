import React, {useState} from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GuestScreen from '../screens/AuthScreens/GuestUserHome';
import HomeScreen from '../screens/RootScreens/HomeScreen'
import Chat from '../screens/RootScreens/ChatScreen';
import PostAd from '../screens/RootScreens/PostAd';
import Saved from '../screens/RootScreens/Saved';
import Profile from '../screens/AuthScreens/ProfileScreen';  
import MyAccount from '../screens/RootScreens/MyAccountScreen';  
import LoginModal from '../screens/RootScreens/LogInModal';

 const Tab = createBottomTabNavigator();
 const BottomTabNavigator = () => {
  const { isLoggedIn } = useSelector((state) => state.user); 
  const [modalVisible, setModalVisible] = useState(false); 

  const handleTabPress = (navigation, screenName) => {
    if (!isLoggedIn && (screenName === 'Chat' || screenName === 'Post Ad' || screenName === 'Saved')) {
      setModalVisible(true);
    } else {
      navigation.navigate(screenName); 
    }
  };

  return (
    <>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Search"
        component={isLoggedIn ? HomeScreen : GuestScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/images/search.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={isLoggedIn ? Chat : () => null}  
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            handleTabPress(navigation, 'Chat');
          },
        })}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/images/chats.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Post Ad"
        component={isLoggedIn ? PostAd : () => null}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            handleTabPress(navigation, 'Post Ad');
          },
        })}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/images/post.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
         name="Saved"
         component={isLoggedIn ? Saved : () => null}m
         listeners={({ navigation }) => ({
           tabPress: (e) => {
             e.preventDefault();
             handleTabPress(navigation, 'Saved');
           },
         })}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/images/saved.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={isLoggedIn ? MyAccount : Profile}  
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/images/profile.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
    <LoginModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)} 
      />
    </>
  );
};

 export default BottomTabNavigator;  