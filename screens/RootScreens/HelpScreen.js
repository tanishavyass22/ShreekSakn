import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import DropDown from '../../assets/images/dropdownicon.svg';
import OptionsModal from './Help&SupportModal';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const App = () => {
  const navigation = useNavigation();
  const { userDetails } = useSelector(state => state.user);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [userInfo, setUserInfo] = useState({
    firstName: userDetails?.firstName || 'N/A',
    email: userDetails?.email || 'N/A',
  });
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../../assets/images/Frame.png')} style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Help & Support</Text>
          <Image source={require('../../assets/images/quickChat.png')} style={styles.Image} />
        </View>
      </ImageBackground>

      <View style={styles.box}>
        <View style={styles.TexxtContainer}>
          <Text style={styles.title}>Get in touch</Text>
          <Text style={styles.Subtitle}>We're Here to Help - Reach Out Anytime!</Text>
        </View>
        <TouchableOpacity 
        onPress={()=>setModalVisible(true)}
        style={{ width:350, height:54, borderRadius:12, borderWidth:1,borderColor:'#FD7E14',alignSelf:'center',marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
            <TextInput 
             style={{fontSize:16, fontWeight:'500', lineHeight:20, color:'black', marginTop:-9, justifyContent:'center', alignItems:'center'}}
            value={selectedOption}
            onChangeText={setSelectedOption}
            editable={false}
            placeholder='Select an subject'/>
            <DropDown style={{marginTop:-9}}/>
        </TouchableOpacity>

        {['First Name', 'Email', 'Subject', 'Message'].map((label, index) => (
          <View key={index}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={label === 'Message' ? styles.inputMessage : styles.input}
              value={label === 'First Name' ? userInfo.firstName : label === 'Email' ? userInfo.email : label === 'Subject' ? subject : message}
              onChangeText={label === 'First Name' ? (value) => setUserInfo(prev => ({ ...prev, firstName: value })) : label === 'Email' ? (value) => setUserInfo(prev => ({ ...prev, email: value })) : label === 'Subject' ? setSubject : setMessage}
              keyboardType="default"
            />
          </View>
        ))}
      </View>
      <View style={styles.circle}>
        <Image source={require('../../assets/images/send.png')} style={styles.sendImage} />
      </View>

      <OptionsModal visible={modalVisible} onClose={() => setModalVisible(false)} onSelect={setSelectedOption} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: 412,
    height: 320,
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
  Image:{
    width:266,
    height:112,
    marginTop:100,
    marginLeft:-135
  },
  box:{
    marginTop:-107,
    width:380,
    height:638,
    borderRadius:14,
    backgroundColor:'white',
    alignSelf:'center',
    elevation:5
  },
  TexxtContainer:{
    marginTop:15,
    marginLeft:15
  },
  title:{
    fontSize:22,
    fontWeight:'600',
    lineHeight:25.78,
    color:'#0D0C22'
  },
  Subtitle:{
        fontSize:14,
        fontWeight:'400',
        lineHeight:20,
        color:'#6C757D'
   },
   btn1:{
    height:40,
    width:166,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FD7E14',
    borderRadius:12
   },
   btn2:{
    height:40,
    width:166,
    justifyContent:'center',
    alignItems:'center'
   },
   btnTxt1:{
    fontSize:16,
    fontWeight:'500',
    lineHeight:20,
    color:'#FFFFFF'
   },
   btnTxt2:{
    fontSize:16,
    fontWeight:'500',
    lineHeight:20,
    color:'#FD7E14'
   },
   label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0D0C22',
    marginTop: 15,
    lineHeight: 16.41,
    marginLeft: 15,
  },
  input: {
    width: 350,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 10,
    borderColor: '#0D0C221A',
    borderWidth: 1,
    marginLeft: 15,
    paddingHorizontal: 15,
    color: '#000000',
  },
  inputMessage: {
    width: 350,
    height: 107,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 10,
    borderColor: '#0D0C221A',
    borderWidth: 1,
    marginLeft: 15,
    paddingHorizontal: 15,
    color: '#000000',
  },
  circle:{
    marginBottom:20,
    width: 68,
    height:68,
    backgroundColor:"#FD7E14",
    marginTop:0,
    alignSelf:'center',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  sendImage:{
    width: 36,
    height:36,
  }
});
export default App;
