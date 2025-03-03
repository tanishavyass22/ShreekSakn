import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CheckedBox from '../../assets/images/checked_box.svg';
import UncheckedBox from '../../assets/images/unchecked_box.svg';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../Components/UiComponents/Button';
import Header from '../../Components/UiComponents/Header';
const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = setCheckedFunction => {
    setCheckedFunction(prevState => !prevState);
  };
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
    <Header title="Advertiser Type" onBackPress={() => navigation.goBack()} />
      <View
        style={{
          width: 384,
          height: 200,
          borderRadius: 14,
          alignSelf: 'center',
          backgroundColor: 'white',
          elevation: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            width: 356,
            height: 154,
            margin: 25,
            flexDirection: 'column',
            gap: 10,
          }}>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#6C757D'}}>
            I confirm that I am currently a resident in the accommodation and
            that I am advertising a room in a shared house solely to find a
            roommate. I am not a licensed real estate agent and I do not benefit
            commercially from this advertisement. I take full legal
            responsibility if the advertisement is used for any other purposes.
          </Text>
          <View style={{flexDirection: 'row', gap: 5}}>
            <TouchableOpacity
              style={styles.CheckBox}
              onPress={() => handleCheckboxChange(setIsChecked)}>
              {isChecked ? (
                <CheckedBox width={24} height={24} fill="orange" />
              ) : (
                <UncheckedBox width={24} height={24} fill="orange" />
              )}
            </TouchableOpacity>
            <Text>Roommate</Text>
          </View>
        </View>
      </View>
      <CustomButton
  title="Next"
  onPress={() => {
    if (!isChecked) return; 
    navigation.navigate("PropertyScreen");
  }}
  style={{
    marginTop: 100,
    backgroundColor: isChecked ? '#FD7E14' : '#D3D3D3',
  }}
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
