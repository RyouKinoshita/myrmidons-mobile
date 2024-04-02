import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { TextInput, Button, RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../redux/actions/otherAction";
import { useMessageAndErrorOther } from "../utils/hooks";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import axios from "axios";
import { server } from "../redux/store";
import Loader from "../components/Loader";

const Payment = ({ navigation, route }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loaderLoading, setLoaderLoading] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const [form, setForm] = useState({
    address: "",
    city: "",
    country: "",
    pinCode: "",
    date: "",
    paymentMethod: "COD",
  });

  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const redirectToLogin = () => {
    navigation.navigate("login");
  };

  const formHandler = () => {
    const { address, city, country, pinCode, date, paymentMethod } = form;

    const itemsPrice = route.params.itemsPrice;
    const shippingCharges = route.params.shippingCharges;
    const taxPrice = route.params.tax;
    const totalAmount = route.params.totalAmount;

    dispatch(
      placeOrder(
        cartItems,
        { address, city, country, pinCode, date },
        paymentMethod,
        itemsPrice,
        shippingCharges,
        taxPrice,
        totalAmount
      )
    );
  };

  const handleChange = (name) => (value) => {
    setForm({ ...form, [name]: value });
  };

  const loading = useMessageAndErrorOther(
    dispatch,
    navigation,
    "profile",
    () => ({
      type: "clearCart",
    })
  );
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        containerStyle={{
          paddingTop: 70,
        }}
        text1="Event"
        text2="Information"
      />

      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          label="Address"
          value={form.address}
          onChangeText={handleChange("address")}
          style={styles.input}
        />
        <TextInput
          label="City"
          value={form.city}
          onChangeText={handleChange("city")}
          style={styles.input}
        />
        <TextInput
          label="Country"
          value={form.country}
          onChangeText={handleChange("country")}
          style={styles.input}
        />
        <TextInput
          label="Pin Code"
          value={form.pinCode}
          onChangeText={handleChange("pinCode")}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => setDatePickerVisible(true)}
          style={styles.datePickerButton}
        >
          <Text>{form.date ? form.date.toDateString() : "Select a date"}</Text>
        </TouchableOpacity>
        {datePickerVisible && (
          <DateTimePicker
            value={form.date || new Date()}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setDatePickerVisible(false);
              if (selectedDate) {
                setForm({ ...form, date: selectedDate });
              }
            }}
          />
        )}

        <RadioButton.Group
          onValueChange={handleChange("paymentMethod")}
          value={form.paymentMethod}
        >
          <View>
            <Text>COD</Text>
            <RadioButton value="COD" />
          </View>
          <View>
            <Text>Online Payment</Text>
            <RadioButton value="Online Payment" />
          </View>
        </RadioButton.Group>
        <Button
          mode="contained"
          onPress={formHandler}
          style={styles.loginButton}
          labelStyle={{ color: colors.color2 }}
          loading={loading}
        >
          Submit
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.color1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
    backgroundColor: colors.color2,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: colors.color3,
  },
  selected: {
    color: colors.color3,
    textDecorationLine: "underline",
  },
  unselected: {
    color: colors.color2,
  },
  datePickerButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: colors.color2,
    borderRadius: 5,
  },
  datePickerText: {
    color: colors.color3,
  },
});

export default Payment;
