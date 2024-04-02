import { TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const Header = ({ back, emptyCart = false }) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const emptyCartHandler = () => {
    dispatch({
      type: "clearCart",
    });
    Toast.show({
      type: "info",
      text1: "Removed all items from cart",
    });
  };

  return (
    <>
      {back && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            zIndex: 10,
          }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            style={{
              backgroundColor: colors.color1,
            }}
            icon={"arrow-left"}
            color={
              route.name === "servicedetails" ? colors.color2 : colors.color3
            }
            size={40} // Set the size of the icon
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 40,
          zIndex: 10,
        }}
        onPress={emptyCart ? emptyCartHandler : () => navigate.navigate("cart")}
      >
        {route.name === "cart" && (
          <Avatar.Icon
            style={{
              backgroundColor: colors.color1,
            }}
            icon="delete-outline"
            color={
              route.name === "servicedetails" ? colors.color2 : colors.color3
            }
            size={40} // Set the size of the icon
          />
        )}
      </TouchableOpacity>
    </>
  );
};

export default Header;
