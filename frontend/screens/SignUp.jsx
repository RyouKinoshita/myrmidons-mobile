import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { defaultImg, styles } from "../styles/styles";
import Footer from "../components/Footer";
import mime from "mime";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/userActions";
import { useMessageAndErrorUser } from "../utils/hooks";

const SignUp = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const disableBtn = !name || !email || !password;

  const dispatch = useDispatch();

  const submitHandler = () => {
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);

    if (avatar !== "") {
      myForm.append("file", {
        uri: avatar,
        type: mime.getType(avatar),
        name: avatar.split("/").pop(),
      });
    }

    dispatch(register(myForm));
  };

  const loading = useMessageAndErrorUser(navigation, dispatch, "home");

  useEffect(() => {
    if (route.params?.image) setAvatar(route.params.image);
  }, [route.params]);
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.formContainer}>
          <Avatar.Image
            style={styles.avatar}
            size={80}
            source={{
              uri: avatar ? avatar : defaultImg,
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("camera")}>
            <Button mode="text" style={styles.changePhotoButton}>
              Change Photo
            </Button>
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
            loading={loading}
            mode="contained"
            onPress={submitHandler}
            disabled={disableBtn}
            style={styles.signUpButton}
            labelStyle={{ color: colors.color2 }}
          >
            Sign Up
          </Button>
          <TouchableOpacity
            style={styles.signInLink}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.signInText}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;
