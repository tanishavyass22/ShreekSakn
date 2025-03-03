import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';

const App = () => {     
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.Mcontainer}>
      <ImageBackground 
        source={require('../../assets/images/featureBg.png')} 
        style={styles.fullScreenBackground}
      >
        <ImageBackground
          source={require('../../assets/images/Frame.png')}
          style={styles.backgroundImage}>
          <View style={styles.smallView}>
            <View style={styles.orangeBox}>
              <TouchableOpacity onPress={handleBackPress}>
                <ArrowLeft />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}> Feature Ad</Text>
          </View>
        </ImageBackground>
        <View style={{flexDirection:'column'}}>
        <View style={{width:314, height:44, alignSelf:'center', marginTop:30, justifyContent:'center', alignItems:'center'}}>
        <Text style={{textAlign:'center',fontSize:18, fontWeight:'500', lineHeight:22, color:'#FD7E14'}}>Your ad has been posted. Do you want to feature your Ad ?</Text>
        </View> 
        <View style={{with:212, height:212, alignSelf:'center', justifyContent:'center',alignItems:'center'}}>
        <Image
        source={require('../../assets/images/featureRocket.png')} 
        style={{width:176.53, height:176.66}}
      />
        </View>
        <View style={{flexDirection:'column',gap:10, width:320, height:104, alignSelf:'center', alignItems:'center'}}>
        <Text>Feature Ad</Text>
        <View style={{width:320, height:66,justifyContent:'center', alignItems:'center'}}>
        <Text style={{textAlign:'center', fontSize:16, fontWeight:'400', lineHeight:22, color:'#6C757D'}}>Boost Your Ad Now for Only 10 SAR! Get More Visibility and Reach Potential Roommates Faster!</Text>
        </View>
        </View>
        <View style={{width:384, height:186, borderRadius:14, backgroundColor:'white', elevation:3, alignSelf:'center', marginTop:60,}}>
            <View style={{flexDirection:'column',margin:20, gap:5}}>
            <Text style={{fontSize:18, fontWeight:'500', lineHeight:21.09, color:'black'}}>Perks</Text>
            <Text style={{fontSize:14, fontWeight:'400', lineHeight:22, color:'#6C757D'}}><View style={styles.orangeDot}/>   Get your ad list on top in your area</Text>
            <Text style={{fontSize:14, fontWeight:'400', lineHeight:22, color:'#6C757D'}}><View style={styles.orangeDot}/>   Will be spotlight for 7 days</Text>
            <Text style={{fontSize:14, fontWeight:'400', lineHeight:22, color:'#6C757D'}}><View style={styles.orangeDot}/>   Easy vivibility</Text>
            <View style={{width:356, alignSelf:'center',borderWidth:.8,borderColor:'#0D0C221A', marginTop:7}}></View>
            <View style={{flexDirection:'row', width:356, height:20, alignSelf:'center', justifyContent:'space-between', marginTop:7}}>
                    <Text style={{fontSize:16, fontWeight:'500', lineHeight:20, color:'black'}}>Duration: 7 days</Text>
                    <Text style={{fontSize:16, fontWeight:'600', lineHeight:20, color:'#FD7E14'}}>32 Sar/Ad</Text>
            </View>
            </View>
        </View>
        <View style={{width:428, height:80, borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'white', elevation:10, marginTop:60,overflow: 'visible', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:15, marginLeft:-5}}>
        <TouchableOpacity style={{width:183, height:52, borderRadius:12, borderWidth:1, borderColor:'#6C757D',justifyContent:'center', alignItems:'center'}}>
           <Text style={{fontSize:16, fontWeight:'500',lineHeight:20, color:'#6C757D'}}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:183, height:52, borderRadius:12, backgroundColor:'#FD7E14',justifyContent:'center', alignItems:'center'}}>
           <Text style={{fontSize:16, fontWeight:'500',lineHeight:20, color:'#FFFFFF'}}>Feature</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    
  
    </View>
  );
  
};
const styles = StyleSheet.create({
  Mcontainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  fullScreenBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  backgroundImage: {
    width: 412,
    height: 110,
    resizeMode: 'cover',
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
  orangeDot: {
    width: 6,  
    height: 6, 
    borderRadius: 6, 
    backgroundColor: '#FD7E14',
  },
});

export default App;
