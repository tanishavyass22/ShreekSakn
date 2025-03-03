import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import ArrowRightIcon from '../../assets/images/arrow-right.svg';
import { useNavigation } from '@react-navigation/native'; 
import Images from '../../Constants/Images';

const Profile = () => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState({ login: false, register: false });

  const handlePress = (key, screen) => {
    setPressed({ ...pressed, [key]: !pressed[key] });
  
    if (screen === "WelcomeScreen") {
      navigation.navigate("AuthStack", { screen: "WelcomeScreen" }); 
    } else {
      navigation.navigate(screen);
    }
  };
  const menuItems = [
    { label: "Help and Support", screen: "HelpScreen", icon: Images.help },
    { label: "Frequently Asked Questions(FAQ)", screen: "FaqScreen", icon: Images.faq },
    { label: "Terms and Conditions", screen: "TermsScreen", icon: Images.terms },
    { label: "Privacy Policy", screen: "PrivacyScreen", icon:Images.privacy },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/images/Frame.png")} style={styles.background}>
        <Text style={styles.acc}>My Account</Text>
      </ImageBackground>
      <View style={styles.whiteBox}>
        <Text style={styles.Maintext}>Make our app your own</Text>
        <View style={{width:296, height:66, justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
        <Text style={styles.text}>Create an account or log in to contact ads, save your favourites, receive alerts for new search results, and so much more.</Text>
        </View>
        <View style={styles.buttonContainer}>
          {["login", "register"].map((key) => (
            <TouchableOpacity
              key={key}
              style={[styles.button, pressed[key] && styles.buttonPressed]}
              onPress={() => handlePress(key, "WelcomeScreen")}
            >
              <Text style={[styles.buttonText, pressed[key] && styles.buttonTextPressed]}>{key === "login" ? "Log In" : "Register"}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.invisibleContainer}>
        {menuItems.map(({ label, screen, icon }) => (
          <TouchableOpacity 
          onPress={() => navigation.navigate("AuthStack", { screen: screen })}
          key={label} style={styles.rowWithArrow}>
            <View style={styles.iconContainer}>
            <Image source={icon} style={styles.logo} />
            </View>
            <Text style={styles.Conttext}>{label}</Text>
            <TouchableOpacity>
              <ArrowRightIcon width={20} height={20} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
      <Image source={require("../../assets/images/bottom_img.png")} style={styles.bottomImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  background: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  acc: {
    color: "#FD7E14",
    marginLeft: 22,
    marginTop: 73,
    fontSize: 20,
    fontWeight: "500",
  },
  whiteBox: {
    position: "absolute",
    top: 140,
    left: 16,
    width: 384,
    height:209,
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 15,
    elevation: 10,
    marginBottom:9,
    flexDirection:'column',
    gap:10
  },
  Maintext: {
    //fontFamily:'Roboto_Condensed-Medium',
    fontSize: 20,
    fontWeight: "600",
    color: "#0D0C22",
    textAlign: "center",
    lineHeight:23.44
  },
  text: {
    fontSize: 13,
    fontWeight: "400",
    color: "#6C757D",
    lineHeight:22,
    textAlign: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  button: {
    backgroundColor: "white",
    width: 145,
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FD7E14",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 9,
  },
  buttonPressed: {
    backgroundColor: "#FD7E14",
  },
  buttonText: {
    color: "#FD7E14",
    fontWeight: "500",
  },
  buttonTextPressed: {
    color: "white",
  },
  invisibleContainer: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: "absolute",
    top: 360,
  },
  rowWithArrow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    paddingBottom: 15,
  },
  Conttext: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  logo: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#FD7E141A",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  bottomImage: {
    width: 174,
    height: 76,
    resizeMode: "contain",
    marginTop: 520,
  },
});

export default Profile;
