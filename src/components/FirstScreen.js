// HomePage.js
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';


const HomePage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/bacgroundimage.png')}
      style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('SecondScreen')}>
          <Text style={[styles.buttonText, styles.loginButtonText]}>
            LOG IN WITH EMAIL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, styles.registerButton]}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={[styles.buttonText, styles.registerButtonText]}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 110,
    marginVertical: 10,
    marginTop: 510,
  },
  button2: {
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 135,
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#F8CE58',
  },
  registerButton: {
    backgroundColor: '#011D45',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  loginButtonText: {
    color: '#011D45',
  },
  registerButtonText: {
    color: '#FFFFFF',
  },
});

export default HomePage;
