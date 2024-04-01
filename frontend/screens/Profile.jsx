import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Button } from "react-native-paper";
import {
  colors,
  defaultImg,
  defaultStyle,
  formHeading,
} from "../styles/styles";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import ButtonBox from "../components/ButtonBox";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  useMessageAndErrorOther,
  useMessageAndErrorUser,
} from "../utils/hooks";
import { loadUser, logout } from "../redux/actions/userActions";
import { useIsFocused } from "@react-navigation/native";
import mime from "mime";
import { updatePic } from "../redux/actions/otherAction";

const transactions = [
  { id: 1, date: "2024-03-30", amount: 100 },
  { id: 2, date: "2024-03-29", amount: 150 },
  { id: 3, date: "2024-03-28", amount: 200 },
];

const TransactionItem = ({ date, amount }) => (
  <View style={styles.transactionItem}>
    <Text>{date}</Text>
    <Text>{amount}</Text>
  </View>
);
const TransactionHistory = () => (
  <View style={styles.transactionHistoryContainer}>
    <Text style={styles.transactionHistoryHeading}>Transaction History</Text>
    {transactions.map((transaction) => (
      <TransactionItem
        key={transaction.id}
        date={transaction.date}
        amount={transaction.amount}
      />
    ))}
  </View>
);

const Profile = ({ navigation, route }) => {
  const { user } = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState(defaultImg);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const loading = useMessageAndErrorUser(navigation, dispatch, "login");

  const logoutHandler = () => {
    dispatch(logout());
  };
  const navigateHandler = (text) => {
    switch (text) {
      case "Admin Dashboard":
        navigation.navigate("adminpanel");
        break;
      case "View Orders":
        navigation.navigate("orders");
        break;
      case "Update Profile":
        navigation.navigate("updateprofile");
        break;
      case "Update Password":
        navigation.navigate("changepassword");
        break;
      case "Sign Out":
        logoutHandler();
        break;
      default:
        navigation.navigate("orders");
        break;
    }
  };

  const loadingPic = useMessageAndErrorOther(dispatch, null, null, loadUser);

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
      // dispatch updatePic Here
      const myForm = new FormData();
      myForm.append("file", {
        uri: route.params.image,
        type: mime.getType(route.params.image),
        name: route.params.image.split("/").pop(),
      });
      dispatch(updatePic(myForm));
    }

    dispatch(loadUser());
  }, [route.params, dispatch, isFocused]);

  useEffect(() => {
    if (user?.avatar) {
      setAvatar(user.avatar.url);
    }
  }, [user]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>My Profile</Text>

        {loading ? (
          <Loader />
        ) : (
          <>
            <TouchableOpacity
              style={styles.signOutButton}
              onPress={() => navigateHandler("Sign Out")}
            >
              <Ionicons name="exit-outline" size={20} color={colors.color2} />
            </TouchableOpacity>

            <View style={styles.avatarContainer}>
              <Avatar.Image
                source={{
                  uri: avatar,
                }}
                size={100}
                style={styles.avatar}
              />
              <TouchableOpacity
                disabled={loadingPic}
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }
              >
                <Button
                  disabled={loadingPic}
                  loading={loadingPic}
                  mode="contained"
                  style={styles.changePhotoButton}
                >
                  Change Photo
                </Button>
              </TouchableOpacity>
            </View>

            <Text style={styles.name}>{user?.name}</Text>
            <Text style={styles.email}>{user?.email}</Text>

            <View style={styles.buttonContainer}>
              <ButtonBox
                handler={navigateHandler}
                text={"View Orders"}
                icon={"format-list-bulleted-square"}
              />
              {user?.role === "admin" && (
                <ButtonBox
                  handler={navigateHandler}
                  icon={"view-dashboard"}
                  text={"Admin Dashboard"}
                  reverse={true}
                />
              )}
              <ButtonBox
                handler={navigateHandler}
                text={"Update Profile"}
                icon={"pencil"}
              />
              <ButtonBox
                handler={navigateHandler}
                text={"Update Password"}
                icon={"lock"}
              />
            </View>

            <View style={styles.transactionHistoryContainer}>
              <TransactionHistory />
            </View>
          </>
        )}
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color3,
    padding: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.color2,
    marginBottom: 20,
    marginTop: 100,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: colors.color1,
    marginRight: 20,
  },
  changePhotoButton: {
    marginTop: 10,
    width: 150,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.color2,
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: colors.color2,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  aboutContainer: {
    backgroundColor: colors.color1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  aboutHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.color2,
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: colors.color2,
    marginBottom: 5,
  },
  recentTransaction: {
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  recentTransactionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.color2,
    marginBottom: 10,
  },
  signOutButton: {
    position: "absolute",
    top: 60,
    right: 30,
    padding: 5,
  },
  transactionHistoryContainer: {
    backgroundColor: colors.color1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  transactionHistoryHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.color2,
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.color2,
  },
});

export default Profile;
