import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const navigateToRegister = () => {
    navigation.navigate('Registration');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = email => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Both fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    try {
      const userDataString = await AsyncStorage.getItem('user');
      const userData = JSON.parse(userDataString);

      if (
        userData &&
        userData.email === email &&
        userData.password === password
      ) {
        console.log('Login button pressed');
        setEmail('');
        setPassword('');
        navigation.navigate('UserData', {userData});
      } else {
        Alert.alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred during login.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bacgroundimage.png')}
      style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.heading}>Sign into your account</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#000000"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCompleteType="email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#000000"
              value={password}
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <Text style={styles.registerLink}>FORGET PASSWORD</Text>

          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={styles.registerLink}>
              Don't have an account? Register here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    color: '#011D45',
    marginTop: 30,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    borderColor: '#F8CE58',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    fontSize: 12,
    color: '#000000',
  },
  button: {
    backgroundColor: '#011D45',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 95,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F8CE58',
    textAlign: 'center',
  },
  registerLink: {
    fontSize: 12,
    color: '#011D45',
    marginTop: 10,
  },
});

export default LoginScreen;
