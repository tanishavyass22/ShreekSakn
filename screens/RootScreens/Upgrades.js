import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';

const App = () => {
    const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };

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
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Upgrades</Text>
        </View>
      </ImageBackground>
      <View style={{flexDirection:'column', marginTop:-300, position:'relative'}}>
      <View
        style={{
          width: 380,
          height: 326,
          backgroundColor: '#FFFFFF',
          elevation: 5,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 14,
          flexDirection: 'column',
          zIndex:2,
          top: 318, 
        }}>
        <View style={{flexDirection: 'row', gap: 8}}>
        <Image
              source={require('../../assets/images/upgradeKing.png')}
              style={{width:62, height:62, marginLeft:15, marginTop:15}}
            />
          <View style={{flexDirection:'column', gap:5, marginTop:20, marginLeft:10}}>
            <Text style={{fontSize:18, fontWeight:'600', lineHeight:21.09, color:'#0D0C22'}}>4- Week Upgrade</Text>
            <Text style={{fontSize:14, fontWeight:'400', lineHeight:16.41, color:"#6C757D"}}>3.58 SAR per day</Text>
          </View>
          <Text style={{textAlign:'right', marginTop:28, fontSize:18, fontWeight:'700', color:"#FD7E14", marginLeft:25}}>108.00 SAR</Text>
        </View>
        <View style={{flexDirection: 'column', gap: 10, marginTop:20, marginLeft:15}}>
          <View style={{flexDirection: 'row', gap: 8}}>
            <Image
              source={require('../../assets/images/upgradeCircle.png')}
              style={styles.circleImage}
            />
            <Text style={styles.txt}>Contact all ads for free</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 8}}>
          <Image
              source={require('../../assets/images/upgradeCircle.png')}
              style={styles.circleImage}
            />
            <Text style={styles.txt}>Lets all users contact you for free
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 8}}>
          <Image
              source={require('../../assets/images/upgradeCircle.png')}
              style={styles.circleImage}
            />
            <Text style={styles.txt}>See your ad shown higher in the search results</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 8}}>
          <Image
              source={require('../../assets/images/upgradeCircle.png')}
              style={styles.circleImage}
            />
            <Text style={styles.txt}>Pause your upgrade (once per upgrade)</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 8}}>
          <Image
              source={require('../../assets/images/upgradeCircle.png')}
              style={styles.circleImage}
            />
            <Text style={styles.txt}>Success guarantee</Text>
          </View>
        </View>
       <TouchableOpacity style={{width:348, height:54, borderRadius:12, backgroundColor:'#FD7E141A', alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:20 }}>
        <Text style={{fontSize:24, fontWeight:'600', color:'#FD7E14', textAlign:'center'}}>Upgrade</Text>
       </TouchableOpacity>
      </View>

      <View style={{ width:380, height:356, backgroundColor:'#1C5298', borderRadius:14, alignSelf:'center', zIndex:1}}>
        <Text style={{fontSize:12, fontWeight:'500', textAlign:'center', color:'white', marginTop: 328,}}>Best Value</Text>
      </View>
      </View>
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
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: 134,
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
    marginTop: 10,
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
  circleImage:{
    width:18,
    height:18
  },
  txt:{
    fontSize:14,
    fontWeight:'400',
    lineHeight:16.41,
    color:'#1F1F1F'
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
