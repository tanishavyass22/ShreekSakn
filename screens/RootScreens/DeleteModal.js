import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import CloseIcon from "../../assets/images/closeIcon.svg";  
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';  
import { setUserLoggedOut } from '../../Redux/UserSlice';  

const DeleteModal = ({ visible, onClose, onLogout }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); 

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (button) => {
    setActiveButton(button);
    if (button === "yes") {
      dispatch(setUserLoggedOut());  
      navigation.reset({
        index: 0,
        routes: [{ name: 'Profile' }],  
      });
      onLogout();  
    } else {
      onClose(); 
    }
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
              source={require("../../assets/images/deleteLady.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.ornageCircle}>
            <ImageBackground
              source={require("../../assets/images/trashDelete.png")}
              imageStyle={styles.trashIcon}
            />
          </View>
          <ImageBackground
            source={require("../../assets/images/backdelete.png")}
            style={styles.bg}
            imageStyle={styles.bgImage}
          >
            <View style={styles.textContainer}>
              <Text style={styles.helloText}>Delete Account</Text>
              <View style={styles.descriptionView}>
              <Text style={styles.description}>
              Your account will be placed on hold for 14 days. If no response is received within this period, your account and associated data will be permanently deleted.
              </Text>
              </View>
            </View>

            <View style={styles.btnView}>
              <TouchableOpacity
                style={[styles.btn, activeButton === "Yes" && styles.activeBtn]}
                onPress={() => handleButtonPress("yes")}
              >
                <Text
                  style={[styles.btnText, activeButton === "Yes" && styles.activeBtnText]}
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, activeButton === "no" && styles.activeBtn]}
                onPress={() => handleButtonPress("no")}
              >
                <Text
                  style={[styles.btnText, activeButton === "no" && styles.activeBtnText]}
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
    height: 532,
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
    height: 300,
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
    marginTop:50
  },
  helloText: {
    color: "#0D0C22",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 50,
    lineHeight: 23.44,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    color: "#6C757D",
    textAlign:'center'
  },
  descriptionView:{
        width:296,
        height:88
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
  activeBtn: {
    backgroundColor: "#FD7E14",
  },
  btnText: {
    color: "#FD7E14",
    fontWeight: "600",
    fontSize: 16,
  },
  activeBtnText: {
    color: "white",
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
    overflow:'visible'
  },
  trashIcon: {
    width: 36,
    height: 36,
    marginLeft: -17,
    marginTop: -18,
  },
});

export default DeleteModal;


