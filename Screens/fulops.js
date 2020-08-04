import React, {useState} from 'react';
import {StackActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width: WIDTH} = Dimensions.get('window');
import {CheckBox} from 'native-base';
const Fulops = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    selectedLang1: false,
    selectedLang2: false,
    selectedLang3: false,
  });
  const [didUserTrySubmit, setDidUserTrySubmit] = useState(false);
  const isComplete =
    state.selectedLang1 && state.selectedLang2 && state.selectedLang3;
  return (
    <View>
      <Text style={styles.header}>Fulfilment operators</Text>
      <View style={styles.item}>
        <CheckBox
          checked={state.selectedLang1}
          color="green"
          onPress={() =>
            setState({...state, selectedLang1: !state.selectedLang1})
          }
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.checkBoxTxt,
            color: state.selectedLang1 ? 'blue' : 'gray',
            fontWeight: state.selectedLang1 ? 'bold' : 'normal',
          }}>
          Incubator/agitator
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          checked={state.selectedLang2}
          color="green"
          onPress={() =>
            setState({...state, selectedLang2: !state.selectedLang2})
          }
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.checkBoxTxt,
            color: state.selectedLang2 ? 'blue' : 'gray',
            fontWeight: state.selectedLang2 ? 'bold' : 'normal',
          }}>
          Thawer
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          checked={state.selectedLang3}
          color="green"
          onPress={() =>
            setState({...state, selectedLang3: !state.selectedLang3})
          }
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.checkBoxTxt,
            color: state.selectedLang3 ? 'blue' : 'gray',
            fontWeight: state.selectedLang3 ? 'bold' : 'normal',
          }}>
          AC
        </Text>
      </View>

      {!isComplete && didUserTrySubmit && (
        <Text>Warning! You have not completed all the tasks.</Text>
      )}
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          if (!isComplete) {
            setDidUserTrySubmit(true);
          } else {
            // TODO this is where you would save the data to google sheets
            navigation.dispatch(StackActions.pop(1));
          }
        }}>
        <Text style={{color: 'white'}}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Fulops;
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
    alignItems: 'center',
    opacity: 0.5,
  },
  item: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  header: {
    fontSize: 30,
    alignContent:'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#364f6b',
    marginBottom: 40,
  },
  checkBoxTxt: {
    marginLeft: 20,
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
  submit: {
    width: '20%',
    backgroundColor: '#fc5185',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    left: 150,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
});
