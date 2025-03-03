import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../Components/UiComponents/Header';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  const [expandedBoxes, setExpandedBoxes] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
  });

  const navigation = useNavigation()
  const handlePlusClick = box => {
    setExpandedBoxes(prevState => ({
      ...prevState,
      [box]: !prevState[box],
    }));
  };

  const boxData = [
    {
        id: 'box1',
        title: 'What is Shreek sakn',
        description:'Description'
      },
    {
      id: 'box2',
      title: 'How do I list a room?',
      description:
      'If you`re a Host:\n' +
        '1. Log in to your account and navigate to the "Add Listing" section.\n' +
        '2. Provide detailed information about your property, including location, price, amenities, and photos.\n' +
        '3. Set your availability and any specific terms or conditions.\n' +
        '4. Publish your listing.' 
    },
    {
      id: 'box3',
      title: 'How do I book a room?',
      description: 'Description ',
    },
    {
      id: 'box4',
      title: 'Is my payment secure?',
      description: 'Description ',
    },
    {
      id: 'box5',
      title: 'What happens if i need to cancel my booking?',
      description: 'Description',
    },
    {
      id: 'box6',
      title: 'What should i Do if there`s an issue?',
      description: 'Description',
    },
  ];

  return (
    
    <ScrollView style={styles.container}>
      <Header title="Frequently Asked Questions(Faq)" onBackPress={() => navigation.goBack()} />
      <View style={styles.TextContainer}>
        <Text style={styles.title}>Frequently Asked Questions(Faq)</Text>
        <Text style={styles.subTitile}>
        Here are some o the commonly asked questions. If you want to know more feel free to contact customer service team.
        </Text>
      </View>
      <View style={{marginBottom:20}}>
      {boxData.map(box => (
        <View
          key={box.id}
          style={[styles.box1, {height: expandedBoxes[box.id] ? 250 : 48}]}>
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
    height: 76,
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
    marginTop: 30,
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
    marginLeft: -150,
  },
  description: {
    fontSize: 14,
    fontWeight: '40',
    lineHeight: 22,
    color: '#6C757D',
  },
});

export default App;
