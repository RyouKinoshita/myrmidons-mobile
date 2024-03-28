import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, Button } from 'react-native-paper';
import { colors, defaultStyle, formHeading } from '../styles/styles';
import ButtonBox from '../components/ButtonBox';
import Footer from '../components/Footer';

const user = {
  name: "John Radilh Mancao",
  email: "johnradilh.mancao@gmail.com",
};
const loading = false;
const Profile = ({ navigation }) => {
  const navigateHandler = () => {
    // Navigation logic
  };

  return (
    <>
    <View style={defaultStyle}>
      <View style={{ marginBottom: 20 }}>
        <Text style={formHeading}>Profile</Text>
      </View>

      <View style={styles.container}>
        <Avatar.Image
          // source={require('../assets/defaultAvatar.png')}
          size={100}
          style={{ backgroundColor: colors.color1 }}
        />

        <TouchableOpacity onPress={() => navigation.navigate("camera", { updateProfile: true })}>
          <Button textColor={colors.color1}>Change Photo</Button>
        </TouchableOpacity>

        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.buttonRow}>
        <ButtonBox handler={navigateHandler} text={"Orders"} icon={"format-list-bulleted-square"} />
        <ButtonBox handler={navigateHandler} icon={"view-dashboard"} text={"Admin"} reverse={true} />
        <ButtonBox handler={navigateHandler} text={"Profile"} icon={"pencil"} />
      </View>

        <View style={styles.buttonRow}>
        <ButtonBox handler={navigateHandler} text={"Password"} icon={"pencil"} />
        <ButtonBox handler={navigateHandler} text={"Sign Out"} icon={"exit-to-app"} />
      </View>
    </View>
<Footer/>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  changePhotoButton: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: colors.color1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: colors.color2,
  },
  email: {
    fontSize: 12,
    color: colors.color2,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default Profile;
