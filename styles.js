import { Alert, Button, StyleSheet, View, Image, Text, TextInput, Vibration, TouchableWithoutFeedback, Keyboard} from 'react-native';

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  tobpar: {
    height: 80, 
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40, 
  }, 
  subheading: {
    fontSize: 20, 
  },

  center: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-around'
  },
  buttonarea: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    backgroundColor: 'white'}, 
});

export default styles
