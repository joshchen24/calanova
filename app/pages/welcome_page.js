import React from 'react';
import {ImageBackground, StyleSheet, View, Text} from "react-native";

function Welcome_page(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpeg")}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CalaNova</Text>
                <Text>Your Calorie Solution</Text>
            </View> 
            <View style={styles.loginButton}></View>
            <View style={styles.signupButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "blue"
    },
    signupButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'navy'
    },
    title:
    {
        textAlign: 'center',
        alignItems: "center",
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        top: -50
    },
    titleContainer:{
        position: "absolute",
        top: 200,
        alignItems: "center",
        width: 700
    }
})

export default Welcome_page;