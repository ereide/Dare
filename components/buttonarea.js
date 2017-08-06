
import styles from "../styles";  

import React from "react";
import { Button, StyleSheet, View, Image, Text, TextInput, Vibration, TouchableWithoutFeedback, Keyboard} from "react-native";
import PropTypes from "prop-types";



class ButtonArea extends React.Component {
    constructor(props) {
        super(props);
        challengersLeft = this.props.numb;
        this.state = {currentStatus: true, challengersLeft: this.props.challengeNumb };
        this.handleButton = this.handleButton.bind(this);


    }
    handleButton(isYes) {
        let newStatus = this.state.currentStatus && isYes;
        Vibration.vibrate();
        if (this.state.challengersLeft === 1) {
            this.props.votesIn(newStatus);
        }
        else {
            let state = {currentStatus: newStatus, challengersLeft: (this.state.challengersLeft - 1) };
            this.setState(state);
        }
    }

    render() {
        return (
            <View style= {{flex: 1, }} >
                <View style= {{alignItems: "center", justifyContent: "center", flex: 1}}>
                    <Text style={styles.subheading}> Your challenge is:</Text>
                    <Text style={styles.subheading}> {this.props.challengeText} </Text>

                </View>
                <View style= {{alignItems: "center", justifyContent: "center", flex: 1}}>
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

ButtonArea.PropTypes = {
    challengeNumb: PropTypes.number.isRequired,
    challengeText: PropTypes.string.isRequired,
    votesIn: PropTypes.func.isRequired
};

export default ButtonArea;

