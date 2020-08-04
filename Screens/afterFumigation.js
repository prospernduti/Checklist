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
const Fumigation = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    selectedLang1: false,
    selectedLang2: false,
    selectedLang3: false,
    selectedLang4: false,
    selectedLang5: false,
    selectedLang6: false,
    selectedLang7: false,
    selectedLang8: false,
  });
  const [didUserTrySubmit, setDidUserTrySubmit] = useState(false);
  const isComplete =
    state.selectedLang1 &&
    state.selectedLang2 &&
    state.selectedLang3 &&
    state.selectedLang4 &&
    state.selectedLang5 &&
    state.selectedLang6 &&
    state.selectedLang7 &&
    state.selectedLang8;
  return (
    <View>
      <Text style={styles.header}>Post fumigation</Text>
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
          Open windows for 2 hours
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
          Mopping the floor
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
          Wiping shelves, tables, computers using furniture cleaner aerosols
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          checked={state.selectedLang4}
          color="green"
          fillColor="red"
          onPress={() =>
            setState({...state, selectedLang4: !state.selectedLang4})
          }
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.checkBoxTxt,
            color: state.selectedLang4 ? 'blue' : 'gray',
            fontWeight: state.selectedLang4 ? 'bold' : 'normal',
          }}>
          Move chairs and everything on the floor
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          checked={state.selectedLang5}
          color="green"
          fillColor="red"
          onPress={() =>
            setState({...state, selectedLang5: !state.selectedLang5})
          }
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.checkBoxTxt,
            color: state.selectedLang5 ? 'blue' : 'gray',
            fontWeight: state.selectedLang5 ? 'bold' : 'normal',
          }}>
          Check dead bags and vacuum them
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
export default Fumigation;
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#364f6b',
    marginBottom: 40,
    textAlign:'center',
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
    left: 150,
    margin: 5,
  },
  submit: {
    width: '20%',
    backgroundColor: '#fc5185',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginTop: 40,
    left: 150,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
});
