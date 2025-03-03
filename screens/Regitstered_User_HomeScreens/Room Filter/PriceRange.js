import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../../Redux/FilterSlice';
import Price from '../../../assets/images/room filter icons/price.svg';
import Checked from '../../../assets/images/myAcc_images/checked';
import Unchecked from '../../../assets/images/myAcc_images/unchecked';
import RadioChecked from '../../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../../assets/images/radioUnchecked.svg';
import ActionButtons from '../../../Components/UiComponents/ResetApplyButton';
import Header from '../../../Components/UiComponents/Header';

const App = () => {
  const [selectedDuration, setSelectedDuration] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handlePress = item => {
    setCheckedItems(prevItems =>
      prevItems.includes(item)
        ? prevItems.filter(i => i !== item)
        : [...prevItems, item],
    );
  };
  const applyFilters = () => {
    const filters = {
      selectedDuration,
      checkedItems,
      minPrice,
      maxPrice,
    };
    console.log('Applying Filters:', filters);
    dispatch(setFilters(filters));
    navigation.goBack();
  };

  return (
    <View style={styles.Maincontainer}>
      <Header title="Price Range" onBackPress={() => navigation.goBack()} />
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Price />
          </View>
          <Text style={styles.title}>Price Range</Text>
        </View>
        <View style={styles.priceContainer}>
          <TextInput keyboardType="number-pad" value={minPrice} onChangeText={setMinPrice} placeholder="Minimum Price" placeholderTextColor={'#6C757D'} style={styles.input}
          />
          <View style={styles.separator} />
          <TextInput keyboardType="number-pad" value={maxPrice} onChangeText={setMaxPrice} placeholder="Maximum Price" placeholderTextColor={'#6C757D'} style={styles.input}
          />
        </View>
        <Text style={styles.title}>Rent Duration</Text>
        <View style={styles.rowBetween}>
          <Text style={styles.optionText}>Monthly</Text>
          <TouchableOpacity onPress={() => setSelectedDuration('Monthly')}>
            {selectedDuration === 'Monthly' ? <RadioChecked /> : <RadioUnchecked />}
          </TouchableOpacity>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.optionText}>Yearly</Text>
          <TouchableOpacity onPress={() => setSelectedDuration('Yearly')}>
            {selectedDuration === 'Yearly' ? <RadioChecked /> : <RadioUnchecked />}
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.rowBetween}>
          <Text style={styles.optionText}>Bills Included</Text>
          <TouchableOpacity onPress={() => handlePress('Bills Included')}>
            {checkedItems.includes('Bills Included') ? <Checked /> : <Unchecked />}
          </TouchableOpacity>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.optionText}>Deposit</Text>
          <TouchableOpacity onPress={() => handlePress('Deposit')}>
            {checkedItems.includes('Deposit') ? <Checked /> : <Unchecked />}
          </TouchableOpacity>
        </View>
      </View>
      <ActionButtons
        onPressReset={() => {
          setSelectedDuration('');
          setCheckedItems([]);
          setMinPrice('');
          setMaxPrice('');
        }}
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
  card: {
    width: 384,
    height: 342,
    borderRadius: 14,
    backgroundColor: 'white',
    elevation: 3,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'column',
    padding: 12,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: 'black',
  },
  priceContainer: {
    width: 356,
    height: 54,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  input: {
    flex: 1,
  },
  separator: {
    marginRight:8,
    width: 1,
    height: 30,
    backgroundColor: '#E7E7E9',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: 'black',
  },
  divider: {
    width: '100%',
    borderWidth: 0.7,
    borderColor: '#E7E7E9',
    marginVertical: 8,
  },
});

export default App;
