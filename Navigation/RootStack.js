import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Saved from '../screens/RootScreens/Saved'; 
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';
import OtpScreen from '../screens/AuthScreens/OtpScreen';
import Registration from '../screens/AuthScreens/RegistrationScreen';
import MoreInformation from '../screens/AuthScreens/MoreInformationScreen';
import PersonalInformation from '../screens/RootScreens/PersonalInformationScreen';
import EditScreen from '../screens/RootScreens/EditScreen';
import SettingScreen from '../screens/RootScreens/Setting';
import NotificationScreen from '../screens/RootScreens/NotificationsScreen';
import HelpScreen from '../screens/RootScreens/HelpScreen';
import TermsScreen from '../screens/RootScreens/Terms';
import PrivacyScreen from '../screens/RootScreens/PrivacyPolicy';
import FaqScreen from '../screens/RootScreens/FaqScreen';
import MyaddScreen from '../screens/RootScreens/MyAds';
import ReportBlockScreen from '../screens/RootScreens/Report&Block';
import UpgradeScreen from '../screens/RootScreens/Upgrades';
import VerificationScreen from '../screens/RootScreens/Verification';

import AdvertiserTypeScreen from '../screens/post_ad screens/AdvertiserType';
import LandlordScreen from '../screens/post_ad screens/Landlord';
import RoommateScreen from '../screens/post_ad screens/Roommate';

import IndividualScreen from '../screens/post_ad screens/Individual';
import CompanyScreen from '../screens/post_ad screens/Compnay';
import PropertyScreen from '../screens/post_ad screens/Property';
import RoomForRentScreen from '../screens/post_ad screens/RoomForRent';
import LocationScreen from '../screens/post_ad screens/Location';
import AvailabilityScreen from '../screens/post_ad screens/Availability';
import ExistingRoommateScreen from '../screens/post_ad screens/ExistingRoommate';
import NewRoommateScreen from '../screens/post_ad screens/NewRoommate';
import SummaryScreen from '../screens/post_ad screens/Summary';
import PhotosScreen from '../screens/post_ad screens/Photos';
import AddPhotosScreen from '../screens/post_ad screens/AddPhotos';
import AboutYouScreen from '../screens/post_ad screens/AboutYou';
import AboutYourSeachScreen from '../screens/post_ad screens/AboutYourSearchScreen';
import WantedAvailScreen from '../screens/post_ad screens/Wantedavail';
import RoommatePreferenceScreen from '../screens/post_ad screens/RoommatePreference';
import WantedLocationScreen from '../screens/post_ad screens/WantedLocation';
import WantedLocation2Screen from '../screens/post_ad screens/WantendLocation2';
import WantedLocation3Screen from '../screens/post_ad screens/WantedLocation3';
import WantedSummaryScreen from '../screens/post_ad screens/WantedSummary';
import WantedPhotosScreen from '../screens/post_ad screens/WantedPhoto';
import WantedAddPhotosScreen from '../screens/post_ad screens/WantedAddPhotos';
import FeatureAdScreen from '../screens/post_ad screens/FeaturedAd';

import SeacrchScreen from '../screens/Regitstered_User_HomeScreens/Search'
import SearchResultScreen from '../screens/Regitstered_User_HomeScreens/SearchResult'
import RoomFilterScreen from '../screens/Regitstered_User_HomeScreens/Room Filter/Filter'
import SearchRadiusScreen from '../screens/Regitstered_User_HomeScreens/Room Filter/SearchRadius';
import RoomTypeScreen from '../screens/Regitstered_User_HomeScreens/Room Filter/RoomType';
import AvailabilityFilterScreen from '../screens/Regitstered_User_HomeScreens/Room Filter/Availability';
import PriceRangeScreen from '../screens/Regitstered_User_HomeScreens/Room Filter/PriceRange';
import SuitableForScreen from '../screens/Regitstered_User_HomeScreens/Room Filter/Suitable';
import SharingWithScreen from '../screens/Regitstered_User_HomeScreens/Room Filter/SharingWith';
import SearchRoomate from '../screens/Regitstered_User_HomeScreens/SearchRoommate'
import SearchRoommateResult from '../screens/Regitstered_User_HomeScreens/SearchRoommateResut'
import RoommateFilters from '../screens/Regitstered_User_HomeScreens/Roommate Filter/Roommatefilter'
import RoommateFilterAailabilityScreen from '../screens/Regitstered_User_HomeScreens/Roommate Filter/Screen1';
import RoommateMonthlyBudgetScreen from '../screens/Regitstered_User_HomeScreens/Roommate Filter/Screen2';
import RoommateAgeScreen from '../screens/Regitstered_User_HomeScreens/Roommate Filter/Screen3';
import RoommateGenderScreen from '../screens/Regitstered_User_HomeScreens/Roommate Filter/Screen4';
import RoommateOccupationScreen from '../screens/Regitstered_User_HomeScreens/Roommate Filter/Screen5';
import RoommateSmokingScreen from '../screens/Regitstered_User_HomeScreens/Roommate Filter/Screen6';
import RoommatelanguageScreen from '../screens/Regitstered_User_HomeScreens/Roommate Filter/Screen7';
import RoommateNationalityScreen from '../screens/Regitstered_User_HomeScreens/Roommate Filter/Screen8';
import HomeScreen from '../screens/RootScreens/HomeScreen'
import MyAd from '../screens/RootScreens/MyAds'
import MyAdvertisement from '../screens/RootScreens/MyAdvertisement'
import RoomateAd from '../screens/RootScreens/MyRoommateAd'
import MapScreen from '../screens/Regitstered_User_HomeScreens/Profile'
import BottomTabNavigator from '../Navigation/BottomNavigator';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="MoreInformation" component={MoreInformation}/>
          <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
          <Stack.Screen name="EditScreen" component={EditScreen} />
          <Stack.Screen name="Saved" component={Saved} />
          <Stack.Screen name="MyaddScreen" component={MyaddScreen} />
          <Stack.Screen name="UpgradeScreen" component={UpgradeScreen} />
          <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
          <Stack.Screen name="ReportBlockScreen" component={ReportBlockScreen}/>
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
          <Stack.Screen name="HelpScreen" component={HelpScreen} />
          <Stack.Screen name="FaqScreen" component={FaqScreen} />
          <Stack.Screen name="TermsScreen" component={TermsScreen} />
          <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
          <Stack.Screen name="AdvertiserTypeScreen" component={AdvertiserTypeScreen} />
          <Stack.Screen name="LandlordScreen" component={LandlordScreen} />
        <Stack.Screen name="RoommateScreen" component={RoommateScreen} />
        <Stack.Screen name="IndividualScreen" component={IndividualScreen} />
        <Stack.Screen name="CompanyScreen" component={CompanyScreen} />
        <Stack.Screen name="PropertyScreen" component={PropertyScreen} />
        <Stack.Screen name="RoomForRentScreen" component={RoomForRentScreen} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="AvailabilityScreen" component={AvailabilityScreen} />
        <Stack.Screen name="ExistingRoommateScreen" component={ExistingRoommateScreen} />
        <Stack.Screen name="NewRoommateScreen" component={NewRoommateScreen} />
        <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
        <Stack.Screen name="PhotosScreen" component={PhotosScreen} />
        <Stack.Screen name="AddPhotosScreen" component={AddPhotosScreen} />
        <Stack.Screen name="AboutYouScreen" component={AboutYouScreen}/>
        <Stack.Screen name="AboutYourSearchScreen" component={AboutYourSeachScreen}/>
        <Stack.Screen name="WantedAvailScreen" component={WantedAvailScreen}/>
        <Stack.Screen name="RoommatePreferenceScreen" component={RoommatePreferenceScreen}/>
        <Stack.Screen name="WantedLocationScreen" component={WantedLocationScreen}/>
        <Stack.Screen name="WantedLocation2Screen" component={WantedLocation2Screen}/>
        <Stack.Screen name="WantedLocation3Screen" component={WantedLocation3Screen}/>
        <Stack.Screen name="WantedSummaryScreen" component={WantedSummaryScreen}/>
        <Stack.Screen name="WantedPhotosScreen" component={WantedPhotosScreen}/>
        <Stack.Screen name="WantedAddPhotosScreen" component={WantedAddPhotosScreen}/>
        <Stack.Screen name="FeatureAdScreen" component={FeatureAdScreen}/>
        <Stack.Screen name="SeacrchScreen" component={SeacrchScreen}/>
        <Stack.Screen name="SearchResultScreen" component={SearchResultScreen}/>
        <Stack.Screen name="RoomFilterScreen" component={RoomFilterScreen}/>
        <Stack.Screen name="SearchRadiusScreen" component={SearchRadiusScreen} />
        <Stack.Screen name="RoomTypeScreen" component={RoomTypeScreen} />
        <Stack.Screen name="AvailabilityFilterScreen" component={AvailabilityFilterScreen} />
        <Stack.Screen name="PriceRangeScreen" component={PriceRangeScreen} />
        <Stack.Screen name="SuitableForScreen" component={SuitableForScreen} />
        <Stack.Screen name="SharingWithScreen" component={SharingWithScreen} />
        <Stack.Screen name="SearchRoomate" component={SearchRoomate} />
        <Stack.Screen name="SearchRoommateResult" component={SearchRoommateResult}/>
        <Stack.Screen name="RoommateFilters" component={RoommateFilters}/>
        <Stack.Screen name="RoommateFilterAailabilityScreen" component={RoommateFilterAailabilityScreen} />
      <Stack.Screen name="RoommateMonthlyBudgetScreen" component={RoommateMonthlyBudgetScreen} />
      <Stack.Screen name="RoommateAgeScreen" component={RoommateAgeScreen} />
      <Stack.Screen name="RoommateGenderScreen" component={RoommateGenderScreen} />
      <Stack.Screen name="RoommateOccupationScreen" component={RoommateOccupationScreen} />
      <Stack.Screen name="RoommateSmokingScreen" component={RoommateSmokingScreen} />
      <Stack.Screen name="RoommatelanguageScreen" component={RoommatelanguageScreen} />
      <Stack.Screen name="RoommateNationalityScreen" component={RoommateNationalityScreen} />
      <Stack.Screen name="MyAd" component={MyAd} />
      <Stack.Screen name="RoomateAd" component={RoomateAd} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="MyAdvertisement" component={MyAdvertisement}/>
      </Stack.Navigator>
    );
  };
  
  export default RootStack;