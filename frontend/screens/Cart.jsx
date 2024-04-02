import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Footer from "../components/Footer";

const Cart = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          padding: 0,
        }}
      >
        <Header back={true} emptyCart={true} />

        <Heading
          text1="My"
          text2="Cart"
          containerStyle={{ paddingTop: 70, marginLeft: 35 }}
        />

        <View
          style={{
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {cartItems.length > 0 ? (
              cartItems.map((i, index) => (
                <CartItem
                  navigate={navigate}
                  key={i.service}
                  id={i.service}
                  name={i.name}
                  amount={i.price}
                  imgSrc={i.image}
                  index={index}
                />
              ))
            ) : (
              <Text style={{ textAlign: "center", fontSize: 18 }}>
                No items in your shopping cart, start browsing now!
              </Text>
            )}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 35,
          }}
        >
          <Text>{cartItems.length} Items</Text>
          <Text>₱{cartItems.reduce((prev, curr) => prev + curr.price, 0)}</Text>
        </View>

        <TouchableOpacity
          onPress={
            cartItems.length > 0
              ? () => navigate.navigate("confirmorder")
              : null
          }
        >
          <Button
            style={{
              backgroundColor: colors.color3,
              borderRadius: 100,
              padding: 5,
              margin: 30,
            }}
            icon={"cart"}
            textColor={colors.color2}
          >
            Checkout
          </Button>
        </TouchableOpacity>
      </View>
      <Footer />
    </>
  );
};

export default Cart;
