import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
const {width: WIDTH} = Dimensions.get('window');
import bgImage from '../../images/bg.png';
import daily from '../../images/daily.png';
import fulops from '../../images/fulops.png';
import fumigationimg from '../../images/fumigation.png';
import {Container} from 'native-base';

const Login = ({navigation}) => (
  <ImageBackground source={bgImage} style={styles.bckgroundContainer}>
   <View>
     <Text style={styles.header}>Welcome to the cleaning checklist</Text>
   </View>

    <View>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          navigation.navigate('Cleaner');
        }}>
        <Image source={daily} style={styles.logo} />
      </TouchableOpacity>
    </View>
    
    <View>
      <TouchableOpacity
        style={styles.logotext}
        onPress={() => {
          navigation.navigate('Fulops');
        }}>
        
        <Image source={fulops} style={styles.logo} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          navigation.navigate('Fumigation');
        }}>

        <Image source={fumigationimg} style={styles.logo} />
      </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: '500',
    margin: 50,
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
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#364f6b',
    marginBottom: 40,
    textAlign:'center',
    top: -80,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
});
