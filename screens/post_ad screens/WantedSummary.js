import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import InfoModal from './WantedSummaryInfo';
import Dropdown from '../../assets/images/dropdownicon.svg'
import CallIcon from '../../assets/images/SVGs/call.svg'
import Checked from '../../assets/images/myAcc_images/checked';
import Unchecked from '../../assets/images/myAcc_images/unchecked';
const App = () => {
    const [isChecked, setIsChecked] = useState(false); 
     const [phoneNumber, setPhoneNumber] = useState('');
     const [modalVisible, setModalVisible] = useState(false);
       useEffect(() => {
         setModalVisible(true);
       }, []);
     
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Summary</Text>
        </View>
      </ImageBackground>
      <View style={{flexDirection:'column', gap:10, margin:15}}>
        <View  style={{flexDirection:'column', gap:5}}>
            <Text style={{fontSize:14, fontWeight:'500', color:'black'}}>Ad Title</Text>
            <TextInput 
            placeholder='e.g., shared room, a room, en-suite'
            placeholderTextColor={'#0D0C2252'}
            style={{width:380, height:52, borderWidth:1, borderColor:'#5B8CCA38', backgroundColor:'white', elevation:2, alignSelf:'center',borderRadius:12, textAlign:'left', padding:15}}/>
        </View>
        <View  style={{flexDirection:'column', gap:5}}>
            <Text style={{fontSize:14, fontWeight:'500', color:'black'}}>Ad Description</Text>
            <TextInput style={{width:380, height:102, borderWidth:1, borderColor:'#5B8CCA38', backgroundColor:'white', elevation:2, alignSelf:'center',borderRadius:12}}/>
        </View>
        <View style={{flexDirection:'row', gap:5}}>
        <Text style={{fontSize:14, fontWeight:'400', color:'#6C757D'}}>Check out tips for great descrpition.</Text>
        <TouchableOpacity 
        onPress={()=>{
          setModalVisible(true);
        }}
        >
        <Text style={{fontSize:14, fontWeight:'500', color:'#FD7E14', textDecorationLine:'underline', textDecorationStyle:'solid'}}>Tap to view</Text>
        </TouchableOpacity>
        </View>
        <View  style={{flexDirection:'column', gap:5, marginTop:8}}>
            <Text style={{fontSize:14, fontWeight:'500', color:'black'}}>Phone Number</Text>
           <View style={styles.inputWrapper}>
                       <Image
                         source={require('../../assets/images/phone_logo.png')}
                         style={styles.logo}
                       />
                       <Text style={styles.helloText}>+966</Text>
                       <Dropdown style={{marginLeft:5, marginTop:2}}/>
                       <View style={styles.line} />
                       <TextInput
                         style={styles.input}
                         value={phoneNumber}
                         onChangeText={v => {
                           setPhoneNumber(v);
                         }}
                         keyboardType="phone-pad"
                         placeholder="51253627"
                         placeholderTextColor="#FFFFFF75"
                       />
                     </View>
        </View>
      </View>
      <View style={{flexDirection:'row',width:380, height:52, backgroundColor:'white', elevation:2, borderRadius:14, alignSelf:'center', marginTop:270, alignItems:'center', marginBottom:10}}>
              <CallIcon style={{marginLeft:8}}/>
              <Text style={{fontSize:16, fontWeight:'500', lineHeight:20, color:'#1F1F1F', marginLeft:10}}>Short term lets considered</Text>
              <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
              {isChecked ? <Checked style={{ marginLeft: 110 }} /> : <Unchecked style={{ marginLeft: 110 }} />} 
              </TouchableOpacity>
              </View>
          <TouchableOpacity 
                  onPress={()=>{
                    navigation.navigate('WantedPhotosScreen')
                  }}
                  style={{width:380, height:54, backgroundColor:'#FD7E14', borderRadius:12, alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:8}}>
                      <Text style={{fontSize:20, fontWeight:'700', lineHeight:24, color:'#FFFFFF'}}>Next</Text>
                  </TouchableOpacity>
      <InfoModal visible={modalVisible} onClose={() => setModalVisible(false)} />
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth:1,
    borderColor:'#5B8CCA38',
    height:54,
    elevation:0
  },
  logo: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  helloText: {
    fontSize: 16,
    marginLeft: 8,
    color: 'black',
    fontWeight: '500',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default App;