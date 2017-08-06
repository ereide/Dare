
import styles from "../styles";  

import React, { Component } from "react";
import { Alert, Button, StyleSheet, View, Image, Text, TextInput, Vibration, TouchableWithoutFeedback, Keyboard} from "react-native";
import PropTypes from "prop-types";


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
        this.state = { text: "Something Crazy", numb: "1" };
        this.submitbutton = this.submitbutton.bind(this);
    }

    submitbutton() {
        Vibration.vibrate();
        let numb = tryParse(this.state.numb);
        this.props.submit(this.state.text, numb);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.center}>
                    <Text style={styles.subheading}>What is your challenge?</Text>
                    <TextInput
                        style={{height: 40, width: 350, borderColor: "gray", borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        returnKeyType='done'
                        clearTextOnFocus={true}
                    />
                    <Text style={styles.subheading}>How many challengers?</Text>            
                    <TextInput
                        style={{height: 40, width: 40, borderColor: "gray", borderWidth: 1}}
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

Inputfield.PropTypes = {
    submit: PropTypes.func.isRequired
};

export default Inputfield;