import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { colors, formHeading } from '../styles/styles';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import ButtonBox from '../components/ButtonBox';
import { Ionicons } from '@expo/vector-icons'; // Import the icon component

const transactions = [
    { id: 1, date: '2024-03-30', amount: 100 },
    { id: 2, date: '2024-03-29', amount: 150 },
    { id: 3, date: '2024-03-28', amount: 200 },
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
const user = {
  name: "John Radilh Mancao",
  email: "johnradilh.mancao@gmail.com",
};
const loading = false;

const logoutHandler = () => {
  dispatch(logout());
};

const Profile = ({ navigation }) => {
  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
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

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Profile</Text>

        {loading ? (
          <Loader />
        ) : (
          <>
            <TouchableOpacity style={styles.signOutButton} onPress={() => navigateHandler("Sign Out")}>
              <Ionicons name="exit-outline" size={20} color={colors.color2} />
            </TouchableOpacity>

            <View style={styles.avatarContainer}>
              <Avatar.Image
                source={require('../assets/me.jpg')}
                size={100}
                style={styles.avatar}
              />
              <TouchableOpacity onPress={() => navigation.navigate("camera", { updateProfile: true })}>
                <Button mode="contained"  style={styles.changePhotoButton}>Change Photo</Button>
              </TouchableOpacity>
            </View>

            <Text style={styles.name}>{user?.name}</Text>
            <Text style={styles.email}>{user?.email}</Text>

            <View style={styles.buttonContainer}>
              <ButtonBox handler={navigateHandler} text={"Orders"} icon={"format-list-bulleted-square"} />
              <ButtonBox handler={navigateHandler} icon={"view-dashboard"} text={"Admin"} reverse={true} />
              <ButtonBox handler={navigateHandler} text={"Profile"} icon={"pencil"} />
              <ButtonBox handler={navigateHandler} text={"Password"} icon={"lock"} />
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
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.color2,
    marginBottom: 20,
    marginTop: 100,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: 'bold',
    color: colors.color2,
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: colors.color2,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  aboutContainer: {
    backgroundColor: colors.color1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  aboutHeading: {
    fontSize: 18,
    fontWeight: 'bold',
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
    width: '100%',
    alignItems: 'center',
  },
  recentTransactionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.color2,
    marginBottom: 10,
  },
  signOutButton: {
    position: 'absolute',
    top: 60,
    right: 30,
    padding: 5,
  },
  transactionHistoryContainer: {
    backgroundColor: colors.color1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  transactionHistoryHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.color2,
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.color2,
  },
});


export default Profile;
