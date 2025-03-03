import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RadioChecked from '../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../assets/images/radioUnchecked.svg';
import CustomButton from '../../Components/UiComponents/Button';
import Header from '../../Components/UiComponents/Header';

const App = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [containerHeight, setContainerHeight] = useState(203);

  const options = [
    { id: '1', label: 'Landlord' },
    { id: '2', label: 'Roommate' },
    { id: '3', label: 'Agent', subtext: "I'm advertising on a landlord's behalf." },
  ];

  const handleSelect = (id) => {
    setSelectedId(id);
    setSelectedOption(id === '3' ? null : selectedOption);
    setContainerHeight(id === '3' ? 284 : 203);
  };

  const handleNextPress = () => {
    const screenMap = {
      '1': 'LandlordScreen',
      '2': 'RoommateScreen',
      '3': selectedOption === 'Individual' ? 'IndividualScreen' : selectedOption === 'company' ? 'CompanyScreen' : null,
    };
    screenMap[selectedId] ? navigation.navigate(screenMap[selectedId]) : console.log("No option selected.");
  };

  return (
    <View style={styles.container}>
      <Header title="Advertiser Type" onBackPress={() => navigation.goBack()} />
      <View style={[styles.FlatListcontainer, { height: containerHeight }]}>
        <FlatList
          data={options}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.optionContainer} onPress={() => handleSelect(item.id)}>
              <View style={styles.textContainer}>
                <Text style={styles.label}>{item.label}</Text>
                {item.subtext && <Text style={styles.subtext}>{item.subtext}</Text>}

                {item.id === '3' && containerHeight === 284 && (
                  <View style={{ marginTop: 30 }}>
                    {['Individual', 'company'].map((opt, index) => (
                      <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#1F1F1F' }}>{opt}</Text>
                        <TouchableOpacity onPress={() => setSelectedOption(opt)}>
                          {selectedOption === opt ? <RadioChecked width={24} height={24} /> : <RadioUnchecked width={24} height={24} />}
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )}
              </View>
              {item.id !== '3' || containerHeight !== 284 ? (selectedId === item.id ? <RadioChecked width={24} height={24} /> : <RadioUnchecked width={24} height={24} />) : null}
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      <CustomButton
      title="Next"
      onPress={handleNextPress} 
      style={{marginTop:10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  FlatListcontainer: {
    alignSelf: 'center',
    width: 384,
    height: 203,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subtext: {
    marginTop: 5,
    fontSize: 12,
    color: '#777',
  },
  separator: {
    width: 352,
    height: 1,
    backgroundColor: '#0D0C2214',
    marginVertical: 5,
  },
  nextButton: { width: 384, height: 54, borderRadius: 12, backgroundColor: '#FD7E14', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', bottom: 20, position: 'absolute' },
  nextButtonText: { fontSize: 20, fontWeight: '700', color: '#FFFFFF' },
});
export default App;
