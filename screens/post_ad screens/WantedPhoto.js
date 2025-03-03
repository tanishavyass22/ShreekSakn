import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import TipsModal from './WantedTipsModal';

const App = () => {
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
          <Text style={styles.text}>Photos</Text>
        </View>
      </ImageBackground> 
      <View style={{width:334, height:250,alignSelf:'center', marginTop:220, flexDirection:'column', gap:10}}>
        <Image
            source={require('../../assets/images/camera.png')}
            style={{width:84, height:84, alignSelf:'center'}}
            />
            <Text style={{fontSize:20, fontWeight:'600', textAlign:'center'}}>Add Photos of your roommate</Text>
            <View style={{width:334, height:44}}>
                <Text style={{fontSize:14, fontWeight:'400',lineHeight:22, textAlign:'center', color:'#6C757D'}}>Please upload at-least 3 images. Don't include web urls, contact details, company names or logos </Text>
            </View>
            <View style={{flexDirection:'row', gap:15, width:272, height:46, alignSelf:'center'}}>
                <TouchableOpacity 
                onPress={()=>{
                    setModalVisible(true);
                  }}
                style={{width:128, height:46, borderWidth:1, borderColor:'#FD7E14', justifyContent:'center', alignItems:'center', borderRadius:12}}>
                    <Text style={{fontSize:16, fontWeight:'700',color:'#FD7E14'}}>See Tips</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('WantedAddPhotosScreen')
                  }}
                style={{width:128, height:46, borderWidth:1, borderColor:'#FD7E14', justifyContent:'center', alignItems:'center',borderRadius:12, backgroundColor:'#FD7E14'}}>
                    <Text style={{fontSize:16, fontWeight:'700',color:'white'}}>Add Photos</Text>
                </TouchableOpacity>
            </View>
      </View>
      <TouchableOpacity 
            style={{width:380, height:54, backgroundColor:'#FD7E14', borderRadius:12, alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:230}}>
            <Text style={{fontSize:20, fontWeight:'700', lineHeight:24, color:'#FFFFFF'}}>Post Ad</Text>
    </TouchableOpacity>
      <TipsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
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
});

export default App;
