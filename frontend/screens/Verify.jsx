import React, { useState } from 'react';
import { ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { colors } from '../styles/styles';
import Footer from '../components/Footer';

const Verify = ({ navigation }) => {
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');

    const loading = false
    const submitHandler = () => {
        alert("Reset Success");
        navigation.navigate("login")
    };

    return (
        <>
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <TextInput
                label="OTP"
                value={otp}
                onChangeText={setOtp}
                keyboardType="number-pad"
                style={styles.input}
            
            />
            <TextInput
                label="New Password"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
               
            />
            <Button
                mode="contained"
                onPress={submitHandler}
                disabled={otp === "" || password === ""}
                style={styles.loginButton}
                labelStyle={{ color: colors.color2 }}
            >
                Reset
            </Button> 
        
            <Button
                mode="text"
                onPress= {() => navigation.navigate("forgetpassword")}
                labelStyle={{ color: colors.color3 }}
                style={{ alignSelf: 'center', marginTop: 20 }}
            >
                Resend OTP
            </Button>

        </ScrollView>
        <Footer/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: colors.color1,
        justifyContent: 'center',
    },
    input: {
        marginBottom: 10,
        backgroundColor: colors.color2,
    },
    forgot: {
        textAlign: 'right',
        color: colors.color3,
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: colors.color3,
    },
    signUp: {
        marginTop: 20,
        alignItems: 'center',
    },
    signUpText: {
        color: colors.color3,
        textDecorationLine: 'underline',
    },
    logo: {
        height: 150,
        width: '100%',
        marginBottom: 20,
    },
});




export default Verify