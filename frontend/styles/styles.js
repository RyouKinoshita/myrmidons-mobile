import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
  color1: "#F4CE14",
  color1_light: "rgba(227,25,99,1)",
  color1_light2: "rgba(199,0,73,0.8)",
  color2: "white",
  color3: "#212125",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
};

export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color2,
});

export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});

export const formHeading = {
  fontSize: 25,
  fontWeight: "500",
  textAlign: "center",
  backgroundColor: colors.color3,
  color: colors.color2,
  padding: 5,
  borderRadius: 5,
};

export const inputOptions = {
  style: inputStyling,
  mode: "outlined",
  activeOutlineColor: colors.color1,
};

export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },

  forget: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "flex-end",
    fontWeight: "100",
  },

  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },

  or: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "100",
    color: colors.color2,
  },

  link: {
    alignSelf: "center",
    color: colors.color2,
    fontSize: 18,
    textTransform: "uppercase",
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.color1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
  },
  avatar: {
    alignSelf: "center",
    backgroundColor: colors.color2,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    width: "100%",
    backgroundColor: colors.color2,
  },
  signUpButton: {
    marginTop: 20,
    backgroundColor: colors.color3,
    width: "100%",
  },
  signInLink: {
    marginTop: 20,
  },
  signInText: {
    color: colors.color3,
    textDecorationLine: "underline",
  },
  logo: {
    height: 150,
    width: "80%",
    marginBottom: 20,
  },
  changePhotoButton: {
    marginTop: 10,
    color: colors.color3,
  },
});

export const defaultImg =
  "https://p.kindpng.com/picc/s/451-4517876_default-profile-hd-png-download.png";
