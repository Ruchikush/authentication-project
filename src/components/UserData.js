import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const UserData = ({navigation}) => {
  const navigateToRegister = () => {
    navigation.navigate('Registration');
  };

  const [useralldata, setUseralldata] = useState('');
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem('user'));
      console.log('userData1234', userData);
      setUseralldata(userData);
      console.log('userDatahfghdf', useralldata);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bacgroundimage.png')}
      style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.input}>Username : {useralldata.username}</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.inputContainer}>
            <Text style={styles.input}>Email: {useralldata.email}</Text>
          </View>
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
    padding: 2,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  container2: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    padding: 2,
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
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginTop: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#000000',
    justifyContent: 'center',
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

export default UserData;
