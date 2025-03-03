import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import RangeSlider from 'rn-range-slider';
import {useNavigation} from '@react-navigation/native';
import {Gender, Age, Nationality, Language, Roommate, Smoking, RadioChecked, RadioUnchecked} from '../../../Constants/Icon';
import DropDown from '../../../assets/images/dropdownicon.svg';
import {useDispatch} from 'react-redux';
import {setFilters} from '../../../Redux/FilterSlice';
import ActionButtons from '../../../Components/UiComponents/ResetApplyButton';
import Header from '../../../Components/UiComponents/Header';

const App = () => {
  const [sharinggender, setSharingGender] = useState('');
  const [sharingminage, setsharingMinage] = useState('');
  const [sharingmaxage, setsharingMaxage] = useState('');
  const [sharinglanguage, setSharingLanguage] = useState('');
  const [sharingsmoking, setSharingSmoking] = useState('');
  const [roommates, setRoommates] = useState(1);
  const min = 1;
  const max = 10;
  const dispatch = useDispatch();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [sharingNationality, setSharingNationality] = useState('');
  const nationality = ['India', 'UK', 'Africa', 'Canada'];
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const selectNationality = selectedNationality => {
    setSharingNationality(selectedNationality);
    setDropdownVisible(false);
  };
  const applyFilters = () => {
    const filters = {
      sharinggender,
      sharingminage,
      sharingmaxage,
      sharinglanguage,
      sharingsmoking,
      sharingNationality,
    };

    console.log('Applying Filters:');
    dispatch(setFilters(filters));
    navigation.goBack(); 
  };
  const navigation = useNavigation();
  return (
    <View style={styles.Maincontainer}>
      <Header title="Sharing With" onBackPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
        <View style={{flexDirection: 'column', margin: 15, gap: 8}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconContainer}>
              <Gender />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  lineHeight: 20,
                  color: 'black',
                }}>
                Household Composition
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#FD7E14',
                }}>
                {sharinggender}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: 'black',
              }}>
              No Preference
            </Text>
            <TouchableOpacity onPress={() => setSharingGender('No Preference')}>
              {sharinggender === 'No Preference' ? (
                <RadioChecked />
              ) : (
                <RadioUnchecked />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: 'black',
              }}>
              Male
            </Text>
            <TouchableOpacity onPress={() => setSharingGender('Male')}>
              {sharinggender === 'Male' ? <RadioChecked /> : <RadioUnchecked />}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: 'black',
              }}>
              Fe-male
            </Text>
            <TouchableOpacity onPress={() => setSharingGender('Fe-male')}>
              {sharinggender === 'Fe-male' ? (
                <RadioChecked />
              ) : (
                <RadioUnchecked />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 356,
            alignSelf: 'center',
            borderWidth: 0.7,
            borderColor: '#E7E7E9',
          }}></View>
        <View style={{flexDirection: 'column', margin: 15, gap: 8}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconContainer}>
              <Smoking />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  lineHeight: 20,
                  color: 'black',
                }}>
                Smoking
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#FD7E14',
                }}>
                {sharingsmoking}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: 'black',
              }}>
              No Preference
            </Text>
            <TouchableOpacity
              onPress={() => setSharingSmoking('No Preference')}>
              {sharingsmoking === 'No Preference' ? (
                <RadioChecked />
              ) : (
                <RadioUnchecked />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: 'black',
              }}>
              Smoking Allowed
            </Text>
            <TouchableOpacity
              onPress={() => setSharingSmoking('Smoking Allowed')}>
              {sharingsmoking === 'Smoking Allowed' ? (
                <RadioChecked />
              ) : (
                <RadioUnchecked />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: 'black',
              }}>
              No-Smoking
            </Text>
            <TouchableOpacity onPress={() => setSharingSmoking('No-Smoking')}>
              {sharingsmoking === 'No-Smoking' ? (
                <RadioChecked />
              ) : (
                <RadioUnchecked />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 356,
            alignSelf: 'center',
            borderWidth: 0.7,
            borderColor: '#E7E7E9',
          }}></View>
        <View style={{flexDirection: 'column', margin: 15, gap: 8}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconContainer}>
              <Age />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  lineHeight: 20,
                  color: 'black',
                }}>
                Age
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#FD7E14',
                }}>
                {' '}
                {`${sharingminage} - ${sharingmaxage}`}
              </Text>
            </View>
          </View>
          <View style={{width: 356, height: 76, flexDirection: 'row', gap: 8}}>
            <View style={{flexDirection: 'column'}}>
              <Text>Minimum</Text>
              <TextInput
                value={sharingminage}
                onChangeText={setsharingMinage}
                placeholder="18 year"
                style={{
                  width: 170,
                  height: 53,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#E7E7E9',
                }}
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text>Maximum</Text>
              <TextInput
                value={sharingmaxage}
                onChangeText={setsharingMaxage}
                placeholder="99 year"
                style={{
                  width: 170,
                  height: 53,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#E7E7E9',
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: 356,
            alignSelf: 'center',
            borderWidth: 0.7,
            borderColor: '#E7E7E9',
          }}></View>
        <View style={{flexDirection: 'column', margin: 15, gap: 8}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconContainer}>
              <Nationality />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  lineHeight: 20,
                  color: 'black',
                }}>
                Nationality
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#FD7E14',
                }}>
                {sharingNationality}
              </Text>
            </View>
          </View>
          <Text>Nationality</Text>
          <TouchableOpacity
            onPress={toggleDropdown}
            style={{
              width: 356,
              height: 54,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#0D0C221A',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text>{sharingNationality}</Text>
            <DropDown />
          </TouchableOpacity>
        </View>
        {isDropdownVisible && (
          <View style={styles.dropdown}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              style={styles.scrollView}>
              {nationality.map(nation => (
                <TouchableOpacity
                  key={nation}
                  style={styles.dropdownItem}
                  onPress={() => selectNationality(nation)}>
                  <Text style={styles.itemText}>{nation}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        <View
          style={{
            width: 356,
            alignSelf: 'center',
            borderWidth: 0.7,
            borderColor: '#E7E7E9',
          }}></View>
        <View style={{flexDirection: 'column', margin: 15, gap: 8}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconContainer}>
              <Roommate />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  lineHeight: 20,
                  color: 'black',
                }}>
                Number of Roomate
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#FD7E14',
                }}>
                {setRoommates}
              </Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:"center"}}>
            <Text style={{color:'#6C757D'}}>0 Roommate</Text>
            <Text style={{color:'#6C757D'}}>10 Roommate</Text>
          </View>
          <View style={styles.labelsContainer}>
        {Array.from({ length: max - min + 1 }, (_, index) => (
          <Text key={index} style={styles.label}>
            {index + min}
          </Text>
        ))}
      </View>
          <RangeSlider
      style={{ width: '100%', height: 40 }}
      min={min}
      max={max}
      step={1}
      low={roommates}
      onValueChanged={(low) => setRoommates(low)}
      selectionColor="#FD7E14"
      blankColor="#E7E7E9"
      thumbBorderWidth={2}
      thumbRadius={10}
      lineHeight={4}
      renderThumb={() => <View style={styles.thumb} />}
      renderRail={() => <View style={styles.rail} />}
      renderRailSelected={() => <View style={styles.railSelected} />}/>
        </View>
        <View
          style={{
            width: 356,
            alignSelf: 'center',
            borderWidth: 0.7,
            borderColor: '#E7E7E9',
          }}></View>
        <View style={{flexDirection: 'column', margin: 15, gap: 8}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconContainer}>
              <Language />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  lineHeight: 20,
                  color: 'black',
                }}>
                Language
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 20,
                  color: '#FD7E14',
                }}>
                {sharinglanguage}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: 'black',
              }}>
              Both
            </Text>
            <TouchableOpacity onPress={() => setSharingLanguage('Both')}>
              {sharinglanguage === 'Both' ? (
                <RadioChecked />
              ) : (
                <RadioUnchecked />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: 'black',
              }}>
              English
            </Text>
            <TouchableOpacity onPress={() => setSharingLanguage('English')}>
              {sharinglanguage === 'English' ? (
                <RadioChecked />
              ) : (
                <RadioUnchecked />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: 'black',
              }}>
              Arabic
            </Text>
            <TouchableOpacity onPress={() => setSharingLanguage('Arabic')}>
              {sharinglanguage === 'Arabic' ? (
                <RadioChecked />
              ) : (
                <RadioUnchecked />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{margin:50}}/>
        </ScrollView>
      <ActionButtons 
        onPressReset={() => { setSharingGender('');
          setsharingMaxage('');
          setsharingMinage('');
          setsharingMaxage('');
          setSharingSmoking('');
          setSharingLanguage('');
          setSharingNationality(''); }}
        onPressApply={applyFilters} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FD7E141A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dropdown: {
    alignSelf: 'center',
    width: 384,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: 'white',
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#FD7E14',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  rail: {
    flex: 1,
    height: 4,
    backgroundColor: '#E7E7E9',
  },
  railSelected: {
    flex: 1,
    height: 4,
    backgroundColor: '#FD7E14',
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  label: {
    color: "#6C757D",
    fontSize: 12,
  },
  card:{
    width: 384,
    height: 1011,
    borderRadius: 16,
    backgroundColor: 'white',
    elevation: 3,
    alignSelf: 'center',
    flexDirection: 'column',
  }

});

export default App;
