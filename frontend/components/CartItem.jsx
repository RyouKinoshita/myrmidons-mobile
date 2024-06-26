import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";
import { iconOptions } from "../screens/ServiceDetails";

export const CartItem = ({ name, amount, index, imgSrc, id, navigate }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        marginVertical: 10,
      }}
    >
      <View
        style={{
          width: "50%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 10,
        }}
      >
        <Image
          source={{
            uri: imgSrc,
          }}
          style={styles.img}
        />
      </View>
      <View
        style={{
          width: "32%",
          paddingHorizontal: 25,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
          }}
          onPress={() => navigate.navigate("servicedetails", { id })}
        >
          {name}
        </Text>

        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
            fontWeight: "900",
          }}
        >
          ₱{amount}
        </Text>
      </View>

      {/* <View style={styles.qtyContainer}>
        <TouchableOpacity
          onPress={() => decrementHandler(id, name, amount, imgSrc, stock, qty)}
        >
          <Avatar.Icon icon={"minus"} {...iconOptions} />
        </TouchableOpacity>

        <Text style={styles.qtyText}>{qty}</Text>

        <TouchableOpacity
          onPress={() => incrementhandler(id, name, amount, imgSrc, stock, qty)}
        >
          <Avatar.Icon icon={"plus"} {...iconOptions} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: "95%",
    resizeMode: "contain",
    top: "2%",
    left: "0%",
  },
  qtyText: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  qtyContainer: {
    alignItems: "center",
    width: "20%",
    height: 80,
    justifyContent: "space-between",
    alignSelf: "center",
  },
});

export default CartItem;
