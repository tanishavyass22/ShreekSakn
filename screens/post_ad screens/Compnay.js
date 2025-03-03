import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../Components/UiComponents/Button';
import Header from '../../Components/UiComponents/Header';

const App = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <Header title="Adverstiser Type" onBackPress={() => navigation.goBack()} />
      <View style={{width:384, height:236, borderRadius:14, alignSelf:'center', backgroundColor:'white', elevation:5, marginTop:20}}>
        <View style={{flexDirection:'column', margin:15, gap:10}}>
        <Text style={{fontSize:16, fontWeight:'500'}}>Company</Text>
        <Text style={{fontSize:14, fontWeight:'500'}}>Advertising License Number</Text>
        <TextInput style={{width:356,height:52, borderRadius:12, borderWidth:1, borderColor:'#0D0C221A', elevation:2, backgroundColor:'white'}}/>
        <Text style={{fontSize:14, fontWeight:'500'}}>Property Ownership Deed Number</Text>
        <TextInput style={{width:356,height:52, borderRadius:12, borderWidth:1, borderColor:'#0D0C221A', elevation:2, backgroundColor:'white'}}/>
        </View>
      </View>
      <CustomButton
      title="Next"
      onPress={()=>{
        navigation.navigate("PropertyScreen")
      }} 
      style={{marginTop:100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
export default App;
