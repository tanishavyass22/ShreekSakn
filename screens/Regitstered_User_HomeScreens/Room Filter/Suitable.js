import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../../Redux/FilterSlice';
import { Gender, Age, Occupation, Smoking, RadioChecked, RadioUnchecked } from '../../../Constants/Icon';
import ActionButtons from '../../../Components/UiComponents/ResetApplyButton';
import Header from '../../../Components/UiComponents/Header';

const App = () => {
  const [gender, setGender] = useState('');
  const [minage, setMinage] = useState('');
  const [maxage, setMaxage] = useState('');
  const [occupation, setOccupation] = useState('');
  const [smoking, setSmoking] = useState('');
  const dispatch = useDispatch();s
  const navigation = useNavigation();
  const applyFilters = () => {
    dispatch(setFilters({ gender, minage, maxage, occupation, smoking }));
    navigation.goBack();
  };
  return (
    <View style={styles.Maincontainer}>
      <Header title="Suitable For" onBackPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
  <View style={styles.cardContainer}>
    {[{ title: 'Gender', value: gender, setValue: setGender, options: ['No Preference', 'Male', 'Female'], Icon: Gender },
      { title: 'Age', value: `${minage} - ${maxage}`, setValue: null, options: [], Icon: Age },
      { title: 'Occupation', value: occupation, setValue: setOccupation, options: ['No Preference', 'Student', 'Professional'], Icon: Occupation },
      { title: 'Smoking', value: smoking, setValue: setSmoking, options: ['No Preference', 'Smoking Allowed', 'No-Smoking'], Icon: Smoking }]
      .map(({ title, value, setValue, options, Icon }, index) => (
        <View key={index} style={styles.sectionContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.iconContainer}><Icon/></View>
            <View>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.highlightText}>{value}</Text>
            </View>
          </View>
          {title === 'Age' ? (
            <View style={styles.ageContainer}>
              {[{ label: 'Minimum', value: minage, setValue: setMinage }, { label: 'Maximum', value: maxage, setValue: setMaxage }].map(({ label, value, setValue }) => (
                <View key={label}>
                  <Text>{label}</Text>
                  <TextInput value={value} onChangeText={setValue} placeholder={`${label} Age`} style={styles.inputBox} />
                </View>
              ))}
            </View>
          ) : (
            options.map(option => (
              <View key={option} style={styles.optionContainer}>
                <Text style={styles.optionText}>{option}</Text>
                <TouchableOpacity onPress={() => setValue(option)}>
                  {value === option ? <RadioChecked /> : <RadioUnchecked />}
                </TouchableOpacity>
              </View>
            ))
          )}
          <View style={styles.divider} />
        </View>
      ))}
  </View>
  <View style={styles.spacer} />
</ScrollView>
      <ActionButtons 
        onPressReset={() => { setGender(''); setMaxage(''); setMinage(''); setOccupation(''); setSmoking(''); }}
        onPressApply={applyFilters} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: { flex: 1, backgroundColor: 'white' },
  cardContainer: { width: 384, height: 680, borderRadius: 16, backgroundColor: 'white', elevation: 3, alignSelf: 'center' },
  sectionContainer: { flexDirection: 'column', margin: 15, gap: 8 },
  rowContainer: { flexDirection: 'row' },
  iconContainer: { width: 42, height: 42, borderRadius: 12, backgroundColor: '#FD7E141A', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  titleText: { fontSize: 16, fontWeight: '500', lineHeight: 20, color: 'black' },
  highlightText: { fontSize: 14, fontWeight: '400', lineHeight: 20, color: '#FD7E14' },
  optionContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  optionText: { fontSize: 16, fontWeight: '400', lineHeight: 22, color: 'black' },
  divider: { width: 356, alignSelf: 'center', borderWidth: 0.7, borderColor: '#E7E7E9' },
  ageContainer: { width: 356, height: 76, flexDirection: 'row', gap: 8 },
  inputBox: { width: 170, height: 53, borderRadius: 12, borderWidth: 1, borderColor: '#E7E7E9' },
  spacer: { margin: 50 },
});
export default App;

