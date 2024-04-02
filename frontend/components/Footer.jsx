import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";
import { useSelector } from "react-redux";

const Footer = ({ activeRoute = "home" }) => {
  const navigate = useNavigation();
  // const loading = false;
  // const isAuthenticated = false;
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate("home");
        break;
      case 1:
        navigate.navigate("cart");
        break;
      case 2:
        if (isAuthenticated) navigate.navigate("profile");
        else navigate.navigate("login");
        break;
      default:
        navigate.navigate("home");
        break;
    }
  };

  const avatarOptions = {
    color: colors.color2,
    size: 30,
    style: {
      backgroundColor: colors.color1,
    },
  };

  return (
    loading === false && (
      <View style={styles.footer}>
      
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={0.8}
          onPress={() => navigationHandler(1)}
        >
          <Avatar.Icon
            {...avatarOptions}
            icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          activeOpacity={0.8}
          onPress={() => navigationHandler(0)}
        >
          <Avatar.Icon
            {...avatarOptions}
            icon={activeRoute === "home" ? "home" : "home-outline"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          activeOpacity={0.8}
          onPress={() => navigationHandler(2)}
        >
          <Avatar.Icon
            {...avatarOptions}
            icon={
              isAuthenticated === false
                ? "login"
                : activeRoute === "profile"
                ? "account"
                : "account-outline"
            }
          />
        </TouchableOpacity>

        
      </View>
    )
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.color3,
    borderTopWidth: 2,
    borderTopColor: colors.color1,
    paddingVertical: 10,
  },
  icon: {
    paddingHorizontal: 20,
  },
});

export default Footer;
