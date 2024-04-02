import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { colors, formHeading } from "../styles/styles";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../redux/actions/otherAction";
import { useMessageAndErrorOther } from "../utils/hooks";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const loading = useMessageAndErrorOther(dispatch, navigation, "verify");

  const submitHandler = () => {
    dispatch(forgetPassword(email));
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.heading}>Forgot Password</Text>
        </View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        <Button
          loading={loading}
          disabled={email === ""}
          mode="contained"
          onPress={submitHandler}
          style={styles.loginButton}
          labelStyle={{ color: colors.color2 }}
        >
          Send OTP
        </Button>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigation.navigate("signup")}
        >
          <Button
            mode="text"
            onPress={() => navigation.navigate("signup")}
            labelStyle={{ color: colors.color3 }}
          >
            Don't have an account? Sign Up
          </Button>
        </TouchableOpacity>
      </ScrollView>
      <Footer activeRoute="profile" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.color1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
    backgroundColor: colors.color2,
  },
  forgot: {
    textAlign: "right",
    color: colors.color3,
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: colors.color3,
  },
  signUp: {
    marginTop: 20,
    alignItems: "center",
  },
  signUpText: {
    color: colors.color3,
    textDecorationLine: "underline",
  },
  logo: {
    height: 150,
    width: "100%",
    marginBottom: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.color3,
    marginTop: 20,
  },
});

export default ForgetPassword;
