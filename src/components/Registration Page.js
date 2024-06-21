import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

const RegistrationScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const validateEmail = email => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (!agreeTerms) {
      Alert.alert('Error', 'Please agree to the terms and conditions.');
      return;
    }

    const userData = {username, email, password};
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    console.log('Register button pressed', userData);
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAgreeTerms(false);
    navigation.navigate('SecondScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Register with Skenu</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ffffff"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#ffffff"
          autoCapitalize="none"
          autoCompleteType="email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox value={agreeTerms} onValueChange={setAgreeTerms} />
          <Text style={styles.checkboxText}>
            I agree to the terms and conditions
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
          disabled={!agreeTerms}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011D45',
  },
  header: {
    backgroundColor: '#F8CE58',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#011D45',
    alignItems: 'center',
    textAlign: 'center',
  },
  content: {
    marginTop: 20,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
    height: 50,
    backgroundColor: '#001533',
    borderColor: '#001533',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 5,
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#F8CE58',
  },
  checkboxText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#001533',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default RegistrationScreen;
