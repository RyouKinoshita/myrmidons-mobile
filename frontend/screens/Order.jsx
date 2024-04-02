import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "./OrderItem";
import Footer from "../components/Footer";
import { useGetOrders } from "../utils/hooks";
import { useIsFocused } from "@react-navigation/native";

const Order = () => {
  const isFocused = useIsFocused();
  const { loading, orders } = useGetOrders(isFocused);
  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true} />

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Orders</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <View
            style={{
              padding: 10,
              flex: 1,
            }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              {orders.length > 0 ? (
                orders.map((item, index) => (
                  <OrderItem
                    key={item._id}
                    id={item._id}
                    i={index}
                    price={item.totalAmount}
                    status={item.orderStatus}
                    paymentMethod={item.paymentMethod}
                    orderedOn={item.createdAt.split("T")[0]}
                    address={`${item.eventInfo.address}, ${item.eventInfo.city}, ${item.eventInfo.country} ${item.eventInfo.pinCode}`}
                  />
                ))
              ) : (
                <Headline style={{ textAlign: "center" }}>
                  No Orders Yet
                </Headline>
              )}
            </ScrollView>
          </View>
        )}
      </View>
      <Footer />
    </>
  );
};

export default Order;
