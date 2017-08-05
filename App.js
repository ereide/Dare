import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Image, Text, TextInput, Vibration, TouchableWithoutFeedback, Keyboard} from 'react-native';



function tryParse(number) {
  const input = Number.parseInt(number, 10);
  if (Number.isNaN(input)) {
    return 1;
  }
  return input;
}

class Inputfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Something Crazy', numb: "1" };
    this.submitbutton = this.submitbutton.bind(this);
  }

  submitbutton() {
    Vibration.vibrate();
    numb = tryParse(this.state.numb)
    this.props.submit(this.state.text, numb);
  }

  render() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.center}>
            <Text style={styles.subheading}>What is your challenge?</Text>
            <TextInput
              style={{height: 40, width: 350, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              returnKeyType='done'
              clearTextOnFocus={true}
            />
            <Text style={styles.subheading}>How many challengers?</Text>            
            <TextInput
              style={{height: 40, width: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(numb) => this.setState({numb})}
              value={this.state.numb}
              returnKeyType='done'
              clearTextOnFocus={true}
              keyboardType='numeric'
            />
            <Button title="Submit" onPress={this.submitbutton} />
          </View>
        </TouchableWithoutFeedback>
    );
  }
}



class ButtonArea extends React.Component {
  constructor(props) {
    super(props)
    challengersLeft = this.props.numb;
    this.state = {currentStatus: true, challengersLeft: this.props.challengeNumb }
    this.handleButton = this.handleButton.bind(this);


  }
  handleButton(isYes) {
    newStatus = this.state.currentStatus && isYes;
    Vibration.vibrate();
    if (this.state.challengersLeft === 1) {
        this.props.votesIn(newStatus);
    }
    else {
        state = {currentStatus: newStatus, challengersLeft: (this.state.challengersLeft - 1) }
        this.setState(state)
    }
  }

  render() {
    return (
      <View style= {{flex: 1, }} >
        <View style= {{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={styles.subheading}> Your challenge is:</Text>
          <Text style={styles.subheading}> {this.props.challengeText} </Text>

        </View>
        <View style= {{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={styles.subheading}> {this.state.challengersLeft.toString()} vote{(this.state.challengersLeft === 1) ? "" : "s"} left</Text>
        </View>
        <View style = {styles.buttonarea}>
          <Button title='Yes' color="green" onPress={() => this.handleButton(true)} />
          <Button title='NO' color="red" onPress={() => this.handleButton(false)} />
        </View>
      </View>
    );
  }


}

export default class DareApp extends Component {
  constructor(props) {
    super(props)
    this.state = {inputMode: true}
    this.challenge = this.challenge.bind(this);
    this.votesIn = this.votesIn.bind(this);
}

  challenge(challengeText, challengeNumb) {
    state = {inputMode: !this.state.inputMode, challengeText: challengeText, challengeNumb: challengeNumb}
    this.setState(state)
  }

  votesIn(success) {
    state = {inputMode: !this.state.inputMode}
    this.setState(state)
    if (success) {
      Alert.alert("Success! Everyone agrees. Go for it!");
    } 

    else {
      Alert.alert("The vote did not pass! It is all or nothing");
    }   
  }

  render() {
    let inputfield =  <Inputfield submit={this.challenge}/>;
    let votefield = <View />;
    if (!this.state.inputMode) {
      inputfield = <View />
      votefield = <ButtonArea votesIn={this.votesIn} challengeText={this.state.challengeText} challengeNumb={this.state.challengeNumb} />; 

  }
    return (
      <View style={{flex: 1}}>
        <View style={styles.tobpar}> 
          <Text style={styles.heading}>DARE</Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'powderblue'}}> 
          {inputfield}
        </View>
        <View style={{flex: 2, backgroundColor: 'steelblue'}}>
          {votefield}
        </View>
      </View>
    );
  }
}




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


