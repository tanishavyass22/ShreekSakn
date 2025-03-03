import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import ArrowRight from '../../assets/images/arrow-right.svg';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LogoutModal from './LogoutModal';

const MyAccount = () => {
  const { userDetails } = useSelector(state => state.user);
   const [userInfo, setUserInfo] = useState({
      fullName: `${userDetails?.firstName || 'N/A'}${userDetails?.lastName || 'N/A'}`,
      email: userDetails?.email || 'N/A',
      phoneNumber: userDetails?.phoneNumber || 'N/A'
    });
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const menuItems = [
    { name: 'Personal Information', icon: require('../../assets/images/myAcc_images/profile.png'), screen: 'PersonalInformation' },
    { name: 'Saved List', icon: require('../../assets/images/myAcc_images/saved.png'),  screen: 'Saved' },
    { name: 'My Ads', icon: require('../../assets/images/myAcc_images/myAdds.png'), screen: 'MyaddScreen' },
    { name: 'Upgrades', icon: require('../../assets/images/myAcc_images/upgrades.png'), screen:'UpgradeScreen' },
    { name: 'Verification', icon: require('../../assets/images/myAcc_images/verification.png'), screen:'VerificationScreen'},
    { name: 'Block & Report', icon: require('../../assets/images/myAcc_images/block.png'), screen: 'ReportBlockScreen' },
    { name: 'Settings', icon: require('../../assets/images/myAcc_images/settings.png'), screen: 'SettingScreen' },
    { name: 'Help and Support', icon: require('../../assets/images/myAcc_images/help.png'), screen: 'HelpScreen' },
    { name: 'Frequently Asked Questions (FAQ)', icon: require('../../assets/images/myAcc_images/FAQs.png'), screen: 'FaqScreen' },
    { name: 'Terms and Conditions', icon: require('../../assets/images/myAcc_images/t&c.png'), screen: 'TermsScreen' },
    { name: 'Privacy Policy', icon: require('../../assets/images/myAcc_images/privacy.png'), screen: 'PrivacyScreen' },
  ];

  return (
    <View style={styles.Background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ImageBackground source={require('../../assets/images/Frame.png')} style={styles.backgroundImage}>
            <Text style={styles.Maintext}>My Account</Text>
          </ImageBackground>
          <View style={styles.box}>
            <Image source={require('../../assets/images/lady.png')} style={styles.image} />
            <View style={styles.txtView}>
              <Text style={styles.name}>{userInfo.fullName}</Text>
              <View style={styles.sms}>
                <Image source={require('../../assets/images/sms.png')} style={styles.icon} />
                <Text style={styles.email}>{userInfo.email}</Text>
              </View>
              <View style={styles.call}>
                <Image source={require('../../assets/images/call.png')} style={styles.icon} />
                <Text style={styles.email}>{userInfo.phoneNumber}</Text>
              </View>
            </View>
          </View>
          <View style={styles.invisibleContainer}>
            {menuItems.map((item, index) => (
              <View key={index}>
                <TouchableOpacity 
                onPress={() => item.screen && navigation.navigate("RootStack", { screen: item.screen })}
                
                style={styles.infoContainer}>
                  <View style={styles.orangeBox}>
                    <Image source={item.icon} style={styles.imgicon} />
                  </View>
                  <Text style={styles.text}>{item.name}</Text>
                  <ArrowRight style={styles.arrow}/>
                </TouchableOpacity>
                <View style={styles.dividerContainer}>
                  <View style={styles.divider} />
                </View>
              </View>
            ))}

            <TouchableOpacity 
            onPress={() => setModalVisible(true)}
            style={styles.infoContainer}>
              <View style={styles.orangeBox}>
                <Image source={require('../../assets/images/myAcc_images/logout.png')} style={styles.imgicon} />
              </View>
              <Text style={styles.text}>Logout</Text>
                <ArrowRight style={styles.arrow} />
            </TouchableOpacity>
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
            </View>
            <LogoutModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onLogout={() => {
                console.log('User logged out');
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Background: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    width: 413,
    height: 180,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  Maintext: {
    fontSize: 20,
    color: '#FD7E14',
    fontWeight: '500',
    lineHeight: 24,
    marginTop: 35,
    marginLeft: 22,
  },
  box: {
    width: 384,
    height: 130,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    elevation: 15,
    alignSelf: 'center',
    marginTop: -85,
    flexDirection: 'row',
  },
  image: {
    width: 98,
    height: 98,
    marginTop: 12,
    marginLeft: 12,
  },
  txtView: {
    marginLeft: 10,
    marginTop: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 18,
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
    color:'#6C757D'
  },
  sms: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  call: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: -7,
  },
  invisibleContainer: {
    marginLeft: 22,
    marginTop: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    //paddingRight: 16,
    paddingHorizontal: 16
  },
  orangeBox: {
    width: 45,
    height: 45,
    backgroundColor: '#FD7E141A',
    marginRight: -50,
    marginLeft: -8,
    borderRadius: 15,
    marginBottom: -30,
    justifyContent: 'center', 
  alignItems: 'center', 
  },
  dividerContainer: {
    marginTop: 15,
  },
  divider: {
    width: 384,
    height: 1,
    backgroundColor: '#0D0C2214',
    marginVertical: 3,
  },
  text: {
    fontSize: 16,
    color: '#1F1F1F',
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 30,
    marginVertical: 10,
    flex: 1, 
    marginLeft: 60, 
  },
  arrow:{
    marginTop:30
  },
  imgicon:{
    width: 24,
    height: 24,
  }
});

export default MyAccount;
