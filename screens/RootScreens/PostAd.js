import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
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
    });
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
        title: 'What should i Do if there`s an issue with property?',
        description: 'Description',
      },
    ];

  const [users, setUsers] = useState([
    {
      id: '1',
      title: 'Rooms in Elm Street',
      image: require('../../assets/images/room_img.png'),
    },
    {
      id: '2',
      title: 'Rooms in Elm Street',
      image: require('../../assets/images/room1.png'),
    },
    {
      id: '3',
      title: 'Rooms in Elm Street',
      image: require('../../assets/images/room2.png'),
    },
    {
      id: '4',
      title: 'Rooms in Elm Street',
      image: require('../../assets/images/room3.png'),
    },
  ]);
  const handleTrashClick = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };
  
    const renderItem = ({item}) => (
       <View style={styles.Newcard}>
         <Image source={item.image} style={styles.Newimage} />
         <View style={styles.Newdetails}>
           <Text style={{fontSize:16, fontWeight:'600', lineHeight:18.75, color:'#1F1F1F'}}>{item.title}</Text>
           <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize:14, fontWeight:'400', lineHeight:20, color:'#6C757D'}}>99% Complete</Text>
            <Text style={{fontSize:16, fontWeight:'400', lineHeight:20, color:'#FD7E14'}}> Continue Draft</Text>
           </View>
         </View>
         <TouchableOpacity style={styles.NewheartIcon} onPress={() => handleTrashClick(item.id)}>
           <Image
             source={require('../../assets/images/trash.png')}
             style={[styles.NewheartImage, {tintColor:'red'}]}
           />
         </TouchableOpacity>
       </View>
     );
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title="Post Ad" onBackPress={() => navigation.goBack()} />
      <Text style={styles.header}>Post an advertisement</Text>
      <View style={styles.cardContainer}>
        <View style={styles.adCard}>
          <Image source={require('../../assets/images/room.png')} style={styles.adImage} />
          <View style={styles.adDetails}>
            <Text style={styles.adTitle}>Room ad</Text>
            <Text style={styles.adDescription}>Post Ad to get your rooms on rent</Text>
            <TouchableOpacity 
              style={styles.adButton}
              onPress={() => navigation.navigate("RootStack", { screen: "AdvertiserTypeScreen" })}>
              <Text style={styles.adButtonText}>Post Free Ad</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.adCard}>
          <Image source={require('../../assets/images/wanted.png')} style={styles.adImage} />
          <View style={styles.adDetails}>
            <Text style={styles.adTitle}>Room Wanted ad</Text>
            <Text style={styles.adDescription}>Let us find you a room</Text>
            <TouchableOpacity 
              style={styles.adButton}
              onPress={() => navigation.navigate("RootStack", { screen: "AboutYouScreen" })}>
              <Text style={styles.adButtonText}>Post Free Ad</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.draftContainer}>
        <Text style={styles.draftTitle}>Draft ad in Progress</Text>
        <Text style={styles.draftDescription}>
          It’ll take just a few more taps to complete and post it.
        </Text>
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.TextContainer}>
        <Text style={styles.title}>Frequently Asked Questions (FAQ)</Text>
        <Text style={styles.subTitle}>
          Here are some of the commonly asked questions. If you want to know more, feel free to contact customer service team.
        </Text>
      </View>
      <View style={{marginBottom:30}}>
      {boxData.map(box => (
        <View key={box.id} style={[styles.box, { height: expandedBoxes[box.id] ? 250 : 48 }]}>
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
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: 128,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: '#FD7E14',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 15,
    lineHeight: 24,
    marginTop: 50,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0D0C22',
    margin: 15,
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adCard: {
    width: 380,
    height: 108,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    flexDirection: 'row',
  },
  adImage: {
    height: 56,
    width: 56,
    borderRadius: 14,
    margin: 15,
  },
  adDetails: {
    flexDirection: 'column',
    gap: 2,
    marginTop: 10,
  },
  adTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F1F1F',
    lineHeight: 22,
  },
  adDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6C757D',
    lineHeight: 18,
  },
  adButton: {
    width: 89,
    height: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FD7E14',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  adButtonText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FD7E14',
  },
  Newcard: {
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    marginLeft:18,
    position: 'relative',
    marginBottom:5
  },
  Newimage: {
    width: 348,
    height: 206,
    borderRadius: 14,
  },
  Newdetails: {
    //width:392,
    flexDirection:'column',
    gap:3,
    backgroundColor: 'white',
    padding: 10,
    marginTop: -35,
  },
  NewheartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  NewheartImage: {
    width: 20,
    height: 20,
  },
  draftContainer: {
    flexDirection: 'column',
    margin: 18,
  },
  draftTitle: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 25.78,
    color: '#0D0C22',
  },
  draftDescription: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#6C757D',
  },
  TextContainer: {
    width: 384,
    height: 76,
    alignSelf: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 25.78,
    color: '#0D0C22',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#6C757D',
    marginTop: 5,
  },
  box: {
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
    transform: [{ translateY: -10 }],
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
    fontWeight: '400',
    lineHeight: 22,
    color: '#6C757D',
  },
});

export default App;
