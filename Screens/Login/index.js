import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Button,
  Dimensions,
} from 'react-native';
const {width: WIDTH} = Dimensions.get('window');
import bgImage from '../../images/bg.png';

const Login = ({navigation}) => (
  <ImageBackground source={bgImage} style={styles.bckgroundContainer}>
    <View>
      <Text style={styles.logotext}>Login</Text>
    </View>
    <View>
      <TextInput
        style={styles.input}
        placeholder={'username'}
        placeholderTextColor={'rgb(255.255.255.0.7)'}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder={'password'}
        placeholderTextColor={'rgb(255.255.255.0.7)'}
        underlineColorAndroid="transparent"
        secureTextEntry={true}
      />

      <Button title="Sign in" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  </ImageBackground>
);

export default Login;

const styles = StyleSheet.create({
  bckgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 120,
  },
  logotext: {
    color: 'red',
    fontSize: 40,
    fontWeight: '500',
    margin: 10,
    opacity: 0.5,
  },

  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'cyan',
    color: 'red',
    margin: 5,
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
});
