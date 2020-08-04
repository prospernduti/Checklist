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
const Cleaner = () => {
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
      <Text style={styles.header}>Daily checklist</Text>
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
          Outside the warehouse
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
          Inside the warehouse/ Floor
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
          Louvers,Cabinet, windows,doors, handles
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
          Computers,keyboards,mice,printers, scanners
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
          Scissors, balance
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          checked={state.selectedLang6}
          color="green"
          fillColor="red"
          onPress={() =>
            setState({...state, selectedLang6: !state.selectedLang6})
          }
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.checkBoxTxt,
            color: state.selectedLang6 ? 'blue' : 'gray',
            fontWeight: state.selectedLang6 ? 'bold' : 'normal',
          }}>
          Shelves
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          checked={state.selectedLang7}
          color="green"
          fillColor="red"
          onPress={() =>
            setState({...state, selectedLang7: !state.selectedLang7})
          }
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.checkBoxTxt,
            color: state.selectedLang7 ? 'blue' : 'gray',
            fontWeight: state.selectedLang7 ? 'bold' : 'normal',
          }}>
          Fridge 1,2,3
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          checked={state.selectedLang8}
          color="green"
          fillColor="red"
          onPress={() =>
            setState({...state, selectedLang8: !state.selectedLang8})
          }
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.checkBoxTxt,
            color: state.selectedLang8 ? 'blue' : 'gray',
            fontWeight: state.selectedLang8 ? 'bold' : 'normal',
          }}>
          Freezer 1,2,3
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
            navigation.navigate('Home')
          }
        }}>
        <Text style={{color: 'white'}}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cleaner;

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
