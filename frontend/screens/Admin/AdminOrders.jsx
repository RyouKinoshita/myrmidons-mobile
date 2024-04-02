import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading, styles } from "../../styles/styles";
import Header from "../../components/Header";
import { orders } from "../Order";
import OrderItem from "../OrderItem";
import Loader from "../../components/Loader";
import { useGetOrders, useMessageAndErrorOther } from "../../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import { Headline } from "react-native-paper";
import { useDispatch } from "react-redux";
import { processOrder } from "../../redux/actions/otherAction";

const AdminOrders = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const { loading, orders } = useGetOrders(isFocused, true);

  const processOrderLoading = useMessageAndErrorOther(
    dispatch,
    navigation,
    "adminpanel"
  );

  const updateHandler = (id) => {
    dispatch(processOrder(id));
  };
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Admin Orders</Text>
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
                  admin={true}
                  updateHandler={updateHandler}
                  loading={processOrderLoading}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default AdminOrders;
