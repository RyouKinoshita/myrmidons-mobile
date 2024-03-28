import React, { useState } from 'react';
import { ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { colors } from '../styles/styles';
import Footer from '../components/Footer';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = false
    const submitHandler = () => {
        alert("YAHOO");
    };
//     const disableBtn =
//    !email || !password ;

    return (
        <>
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
                // left={<TextInput.Icon name="email" color="black" />}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                // left={<TextInput.Icon name="lock" color="black" />}
            />
            <TouchableOpacity onPress={() => navigation.navigate("forgetpassword")}>
                <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
            <Button
                mode="contained"
                onPress={submitHandler}
                loading={loading}
                style={styles.loginButton}
                disabled={email === "" || password === ""}
                labelStyle={{ color: colors.color2 }}
            >
                LOGIN
            </Button>
            <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('Register')}>
            <Button
                mode="text"
                onPress={() => navigation.navigate('signup')}
                labelStyle={{ color: colors.color3 }}
            >
                Don't have an account? Sign Up
            </Button>
        </TouchableOpacity>


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

export default Login;
