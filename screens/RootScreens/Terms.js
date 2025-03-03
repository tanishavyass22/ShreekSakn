import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/UiComponents/Header';

const App = () => {
  const [expandedBoxes, setExpandedBoxes] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
  });

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePlusClick = (box) => {
    setExpandedBoxes((prevState) => ({
      ...prevState,
      [box]: !prevState[box],
    }));
  };

  const boxData = [
    { id: 'box1', title: 'Eligibility', description: 'Welcome to Shreek Sakn! These Terms and Conditions govern your use of our room-sharing application and related services. By accessing or using the app, you agree to comply with these Terms. If you do not agree, please refrain from using the app.' },
    { id: 'box2', title: 'User Conduct', description: 'Description for User Conduct.' },
    { id: 'box3', title: 'Hosts and Guest', description: 'Description for Hosts and Guest.' },
    { id: 'box4', title: 'Payment and Fees', description: 'Description for Payment and Fees.' },
    { id: 'box5', title: 'Cancellation and Fees', description: 'Description for Cancellation and Fees.' },
    { id: 'box6', title: 'Intellectual Property', description: 'Description for Intellectual Property.' },
    { id: 'box7', title: 'Cancellation and Refunds', description: 'Description for Cancellation and Refunds.' },
    { id: 'box8', title: 'Privacy', description: 'Description for Privacy.' },
  ];

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={styles.container}>
      <Header title="Terms and Conditions" onBackPress={() => navigation.goBack()} />
      <View style={styles.TextContainer}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.subTitile}>
          Welcome to Shreek Sakn! These Terms and Conditions govern your use of
          our room-sharing application and related services. By accessing or
          using the app, you agree to comply with these Terms. If you do not
          agree, please refrain from using the app.
        </Text>
      </View>
      <View style={{marginBottom:20}}>
      {boxData.map((box) => (
        <View key={box.id} style={[styles.box1, { height: expandedBoxes[box.id] ? 192 : 48 }]}>
          <Text style={styles.boxTxt}>{box.title}</Text>
          <TouchableOpacity onPress={() => handlePlusClick(box.id)} style={styles.plusContainer}>
            <Text style={styles.plus}>{expandedBoxes[box.id] ? '-' : '+'}</Text>
          </TouchableOpacity>
          {expandedBoxes[box.id] && (
            <View style={styles.descriptionView}>
              <Text style={styles.description}>{box.description}</Text>
            </View>
          )}
        </View>
      ))}
      </View>
   
    </ScrollView>
  );
};

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    backgroundImage: {
      width: 412,
      height: 110,
      resizeMode: 'cover',
      overflow: 'hidden',
      alignSelf: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    text: {
      color: '#FD7E14',
      fontSize: 20,
      fontWeight: '500',
      marginLeft: 15,
      lineHeight: 24,
      marginTop: 42,
    },
    smallView: {
      flexDirection: 'row',
    },
    orangeBox: {
      width: 46,
      height: 46,
      borderRadius: 12,
      backgroundColor: '#FD7E14',
      marginLeft: 15,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    TextContainer: {
      width: 384,
      height: 142,
      alignSelf: 'center',
      flexDirection: 'column',
      marginTop: 20,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    title: {
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 25.78,
      color: '#0D0C22',
    },
    subTitile: {
      fontSize: 14,
      fontWeight: '40',
      lineHeight: 22,
      color: '#6C757D',
      marginTop: 5,
    },
    box1: {
      width: 380,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: '#FFFFFF',
      marginTop: 20,
      borderRadius: 14,
      elevation: 15,
      paddingHorizontal: 10,
    },
    boxTxt: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
      marginLeft: 8,
      marginTop: 10,
    },
    plusContainer: {
      position: 'absolute',
      right: 10,
      top: 15,
      transform: [{ translateY: -10 }],
    },
    plus: {
      color: '#FD7E14',
      fontSize: 25,
      fontWeight:'700'
    },
    descriptionView: {
      width: 356,
      alignSelf: 'center',
      marginTop: 10,
      marginLeft: -100,
    },
    description: {
      fontSize: 14,
      fontWeight: '40',
      lineHeight: 22,
      color: '#6C757D',
    },
  });
  
  export default App;
  