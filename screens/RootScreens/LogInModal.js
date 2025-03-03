import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import CloseIcon from "../../assets/images/closeIcon.svg";  
import { useNavigation } from '@react-navigation/native';

const LoginModal = ({ visible, onClose,}) => {
    const navigation = useNavigation();
    const handleLogin = () => {
      navigation.navigate("AuthStack", { screen: "WelcomeScreen" })  
        onClose();  
      };
    

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <CloseIcon width={24} height={24} /> 
          </TouchableOpacity>

          <View style={styles.imgView}>
            <Image
              source={require("../../assets/images/ladyLogOut.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.ornageCircle}>
            <ImageBackground
              source={require("../../assets/images/logout.png")}
              imageStyle={styles.logOutIcon}
            />
          </View>
          <ImageBackground
            source={require("../../assets/images/backdelete.png")}
            style={styles.bg}
            imageStyle={styles.bgImage}
          >
            <View style={styles.textContainer}>
              <Text style={styles.helloText}>Log In to use all the functionality</Text>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity
                style={styles.btn}
                onPress={handleLogin}
              >
                <Text
                  style={styles.btnText}
                >
                  Log In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={onClose}
              >
                <Text
                  style={styles.btnText}
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 364,
    height: 451,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 1,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  imgView: {
    alignSelf: "center",
    marginTop: 29,
  },
  image: {
    width: 260,
    height: 169,
  },
  bg: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 207,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  helloText: {
    color: "#0D0C22",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 70,
    lineHeight: 23.44,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    color: "#6C757D",
  },
  btnView: {
    flexDirection: "row",
    marginBottom: 25,
    alignSelf: "center",
  },
  btn: {
    width: 145,
    height: 46,
    borderWidth: 1,
    borderColor: "#FD7E14",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnText: {
    color: "#FD7E14",
    fontWeight: "600",
    fontSize: 16,
  },
  ornageCircle: {
    height: 62,
    width: 62,
    borderRadius: 30,
    backgroundColor: "#FD7E14",
    alignSelf: "center",
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  logOutIcon: {
    width: 36,
    height: 36,
    marginLeft: -20,
    marginTop: -15,
  },
});

export default LoginModal;
