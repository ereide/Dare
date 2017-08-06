import React from "react";
import { Alert, View, Text } from "react-native";

import styles from "./styles";  
import ButtonArea from "./components/buttonarea";
import Inputfield from "./components/inputfield";

export default class DareApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputMode: true};
        this.challenge = this.challenge.bind(this);
        this.votesIn = this.votesIn.bind(this);
    }

    challenge(challengeText, challengeNumb) {
        let state = {inputMode: !this.state.inputMode, challengeText: challengeText, challengeNumb: challengeNumb};
        this.setState(state);
    }

    votesIn(success) {
        let state = {inputMode: !this.state.inputMode};
        this.setState(state);
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
            inputfield = <View />;
            votefield = <ButtonArea votesIn={this.votesIn} challengeText={this.state.challengeText} challengeNumb={this.state.challengeNumb} />; 

        }
        return (
            <View style={{flex: 1}}>
                <View style={styles.tobpar}> 
                    <Text style={styles.heading}>DARE</Text>
                </View>
                <View style={{flex: 3, backgroundColor: "powderblue"}}> 
                    {inputfield}
                </View>
                <View style={{flex: 2, backgroundColor: "steelblue"}}>
                    {votefield}
                </View>
            </View>
        );
    }
}



