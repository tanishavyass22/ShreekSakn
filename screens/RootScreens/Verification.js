import React,{useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
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
          <Text style={styles.text}>Verification</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          height: 76,
          width: 384,
          margin: 25,
          flexDirection: 'column',
          gap: 5,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            lineHeight: 25.78,
            color: '#0D0C22',
          }}>
          Photo ID Check
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 22,
            color: '#6C757D',
          }}>
          Stand out on Shreek Sakn and increase trust with tenants by Getting
          verified. To do so, we’ll check.
        </Text>
      </View>
      <View
        style={{
          width: 384,
          height: 116,
          alignSelf: 'center',
          flexDirection: 'column',
          gap: 15,
          
        }}>
        <View style={{flexDirection:'row', gap:13}}>
          <Image
            source={require('../../assets/images/verificationCall.png')}
            style={{width:42, height:42}}
          />
          <Text style={{fontSize:16, fontWeight:'500', lineHeight:20, color:'#1F1F1F', marginTop:9}}>Mobile Phone Number</Text>
        </View>
        <View style={{width:384, height:2, backgroundColor:'#0D0C221A'}}></View>
        <View style={{flexDirection:'row', gap:13}}>
          <Image
            source={require('../../assets/images/id.png')}
            style={{width:42, height:42}}
          />
          <View style={{marginTop:-5}}>
          <Text style={{fontSize:16, fontWeight:'500', lineHeight:20, color:'#1F1F1F',  marginTop:9}}>Photo Id</Text>
            <Text style={{fontSize:14, fontWeight:'400', lineHeight:16.41, color:'#6C757D'}}>(Drivers license, Passport, National ID)</Text>
          </View>
        </View>
      </View>
      <Text style={{marginLeft:25, marginTop:30, fontSize:14, fontWeight:'400', lineHeight:22, color:'#6C757D'}}>After, you’ll see your verification status here:</Text>
      <View style={{flexDirection:'column', justifyContent:'flex-start'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection:'row', marginBottom:10}}>
        <View style={{width:306, height:179, borderRadius:14, borderWidth:1, borderColor:'#0D0C221A', backgroundColor:'#FFFFFF', marginLeft:25, marginTop:15,elevation:5,}}>
      <View style={{width:279, height:109, marginTop:26, marginLeft:26, borderTopLeftRadius:10, borderTopWidth:28, borderLeftWidth:1, borderColor:'#FD7E14'}}>
        <View style={{flexDirection:'row', gap:8, marginTop:-22, marginLeft:8}}>
        <Image
            source={require('../../assets/images/verified.png')}
            style={{width:14.31, height:16,}}
          />
            <Text style={{color:'white'}}>Verified User</Text>
        </View>
        <Text style={{marginTop:10, marginLeft:10, fontSize:14, fontWeight:'400'}}>Photo Id used to verify:</Text>
        <View style={{flexDirection:'row', gap:5, marginLeft:10, marginTop:8}}>
        <Image
            source={require('../../assets/images/tick.png')}
            style={{width:10, height:8, marginTop:6}}
          />
            <Text style={{fontSize:12, fontWeight:'400'}}>Name*</Text>
        </View>
        <View style={{flexDirection:'row', gap:5, marginLeft:10,}}>
        <Image
            source={require('../../assets/images/tick.png')}
            style={{width:10, height:8, marginTop:6}}
          />
            <Text style={{fontSize:12, fontWeight:'400'}}>Date of Birth</Text>
        </View>
      </View>
      <View style={{width:306, height:2, backgroundColor:'#0D0C221A'}}></View>
      <View style={{flexDirection:'row', gap:150,marginTop:8}}>
        <Text style={{marginLeft:15}}>Ad Details</Text>
        <Text style={{color:'#FD7E14', fontSize:14, fontWeight:'400'}}>SEE MORE</Text>
      </View>
      </View>
      <View style={{width:306, height:179, borderRadius:14, borderWidth:1, borderColor:'#0D0C221A', backgroundColor:'#FFFFFF', marginLeft:18, marginTop:15, elevation:5}}>
        <View style={{flexDirection:'row', gap:10, marginLeft:10, marginTop:20}}>
            <Image
            source={require('../../assets/images/DWimg.png')}
            style={{width:50, height:50}}
            />
            <View style={{flexDirection:'column', gap:10}}>
                <Text style={{fontSize:14, fontWeight:'600', color:'black'}}>Lorem Ipsum</Text>
                <Text style={{fontSize:12, fontWeight:'400', color:'grey'}}>Lorem Ipsum</Text>
                <Text style={{fontSize:12, fontWeight:'400', color:'grey'}}>Lorem Ipsum</Text>
            </View>
        </View>
      <View style={{width:306, height:2, backgroundColor:'#0D0C221A', marginTop:37}}></View>
      <View style={{flexDirection:'row', gap:150,marginTop:8}}>
        <Text style={{marginLeft:15}}>Messages</Text>
        <Text style={{color:'#FD7E14', fontSize:14, fontWeight:'400'}}>SEE MORE</Text>
      </View>
      </View>
        </View>
      </ScrollView>
      <View style={{width:384, height:110, marginTop:30, marginLeft:30}}>
        <Text style={{fontSize:15, fontWeight:'400', color:'#6C757D', textAlign:'left', marginTop:-12, marginLeft:-5}}>By tapping on Start Verification or otherwise continuing to use this service, you agree you have read, understand and accept the Onfido Facial Scan Policy and Release, Privacy Policy and Terms of Service and the SpareRoom Terms & Conditions and Privacy Policy.</Text>
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
    marginTop: 20,
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
    marginTop: -10,
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
