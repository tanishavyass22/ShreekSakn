import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/UiComponents/Header';

const App = () => {
  const [expandedBoxes, setExpandedBoxes] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
  });
  const navigation = useNavigation();
  const handlePlusClick = box => {
    setExpandedBoxes(prevState => ({
      ...prevState,
      [box]: !prevState[box],
    }));
  };

  const boxData = [
    {
      id: 'box1',
      title: 'Information We collect',
      description: 'Description for Information we collect ',
      
    },
    {
      id: 'box2',
      title: 'How We Use Your Information',
      description: 'Description for User Conduct.',
    },
    {
      id: 'box3',
      title: 'Sharing Your Information',
      description: 'Description for Hosts and Guest.',
    },
    {
      id: 'box4',
      title: 'Data Security',
      description: 'Description for Payment and Fees.',
    },
    {
      id: 'box5',
      title: 'Your Choices',
      description: 'Description for Cancellation and Fees.',
    },
    {
      id: 'box6',
      title: 'Third-party Link',
      description: 'Description for Intellectual Property.',
    },
  ];

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={styles.container}>
     <Header title="Privacy Policy" onBackPress={() => navigation.goBack()} />
      <View style={styles.TextContainer}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.subTitile}>
          Welcome to Shreek Sakn! Your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your personal
          information when you use our room-sharing application and related
          services.
        </Text>
      </View>
      {boxData.map(box => (
        <View
          key={box.id}
          style={[styles.box1, {height: expandedBoxes[box.id] ? 270 : 48}]}>
          <Text style={styles.boxTxt}>{box.title}</Text>
          <TouchableOpacity
            onPress={() => handlePlusClick(box.id)}
            style={styles.plusContainer}>
            <Text style={styles.plus}>{expandedBoxes[box.id] ? '-' : '+'}</Text>
          </TouchableOpacity>
          {expandedBoxes[box.id] && (
            <View style={styles.descriptionView}>
              <Text style={styles.description}>{box.description}</Text>
            </View>
          )}
        </View>
      ))}
      <Image
       source={require('../../assets/images/bottom_img.png')}
       style={styles.bottomImage}/>
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
    elevation: 5,
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
    transform: [{translateY: -10}],
  },
  plus: {
    color: '#FD7E14',
    fontSize: 25,
    fontWeight: '300',
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
  bottomImage:{
    width:200,
    height:76,
    alignSelf:'center',
    marginTop:80
  }
});

export default App;
