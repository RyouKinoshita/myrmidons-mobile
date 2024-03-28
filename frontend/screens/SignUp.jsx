import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper';
import { colors } from '../styles/styles';
import { defaultImg, styles } from '../styles/styles';
import Footer from '../components/Footer';

const SignUp = ({ navigation }) => {
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = false;
    const submitHandler = () => {
        alert("Signed Up");
        navigation.navigate("login");
    };

    const disableBtn =
    !name || !email || !password ;

    return (
      <>
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.formContainer} >
                <Avatar.Image
                    style={styles.avatar}
                    size={80}
                    source={{
                        uri: avatar ? avatar : defaultImg,
                    }}
                />
                <TouchableOpacity onPress={() => navigation.navigate("camera")}>
                    <Button mode="text" style={styles.changePhotoButton}>Change Photo</Button>
                </TouchableOpacity>
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry
                />
                <Button
                    mode="contained"
                    onPress={submitHandler}
                    disabled={disableBtn}
                    style={styles.signUpButton}
                    labelStyle={{ color: colors.color2 }}
                >
                    Sign Up
                </Button>
                <TouchableOpacity style={styles.signInLink} onPress={() => navigation.navigate('login')}>
                    <Text style={styles.signInText}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
        <Footer/>
      </>
    );
};



export default SignUp;
