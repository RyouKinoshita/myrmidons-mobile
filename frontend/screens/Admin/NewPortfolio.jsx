import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import { useMessageAndErrorOther } from "../../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addPortfolio, deletePortfolio } from "../../redux/actions/otherAction";
import { colors, defaultStyle, formHeading, inputOptions } from "../../styles/styles";
import Header from "../../components/Header";

const NewPortfolio = ({ navigation }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [images, setImages] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const loading = useMessageAndErrorOther(dispatch, navigation, "adminpanel");

  const deleteHandler = (id) => {
    dispatch(deletePortfolio(id));
  };

  const submitHandler = () => {
    // Assuming addPortfolio requires an object with name, location, date, and images
    dispatch(addPortfolio({ name, location, date, images }));
  };

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>New Portfolio</Text>
      </View>

      <ScrollView style={{ marginBottom: 20 }}>
        <View style={{ backgroundColor: colors.color2, padding: 20, minHeight: 400 }}>
          {portfolios.map((p) => (
            <PortfolioCard
              name={p.portfolio}
              id={p._id}
              key={p._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          {...inputOptions}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          {...inputOptions}
          placeholder="Date"
          value={date}
          onChangeText={setDate}
        />
        <Button
          mode="contained"
          style={{ margin: 20 }}
          // onPress={() => /* Implement image selection */}
          >
          Add Images
        </Button>

        <Button
          textColor={colors.color2}
          style={{ backgroundColor: colors.color1, margin: 20, padding: 6 }}
          loading={loading}
          disabled={!name || !location || !date || images.length === 0}
          onPress={submitHandler}
        >
          Add Portfolio
        </Button>
      </View>
    </View>
  );
};

const PortfolioCard = ({ name, id, deleteHandler }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity onPress={() => deleteHandler(id)}>
      <Avatar.Icon
        icon={"delete"}
        size={30}
        style={{ backgroundColor: colors.color1 }}
      />
    </TouchableOpacity>
  </View>
);

export default NewPortfolio;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },

  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
