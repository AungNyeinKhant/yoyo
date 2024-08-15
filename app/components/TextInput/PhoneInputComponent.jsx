import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Modal, ActivityIndicator } from 'react-native';
import theme from '../../style/colors';

const PhoneInputComponent = ({ label, value, onChangeText }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1'); // Default to US code
  const [modalVisible, setModalVisible] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch('https://country-code-au6g.vercel.app/Country.json');
        const data = await response.json();
        setCountryData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country data:', error);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, []);

  const renderCountryCodeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryCodeItem}
      onPress={() => {
        setSelectedCountryCode(item.dial_code);
        setModalVisible(false);
      }}
    >
      <Text style={styles.countryCodeText}>{item.emoji} {item.name} ({item.dial_code})</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.countryCodeButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.countryCodeText}>{selectedCountryCode}</Text>
        </TouchableOpacity>
        
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={theme.colors.textInputColor}
          keyboardType="phone-pad"
        />
      </View>

      {/* Modal for selecting country code */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={countryData}
              keyExtractor={(item) => item.code}
              renderItem={renderCountryCodeItem}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#01070F',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  countryCodeButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#E0E0E0',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  countryCodeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#02000A',
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 10,
    backgroundColor: '#F1F1F1',
    color: '#02000A',
    fontWeight: '500',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  countryCodeItem: {
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default PhoneInputComponent;
