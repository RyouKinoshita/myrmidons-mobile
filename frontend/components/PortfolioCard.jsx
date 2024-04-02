import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../styles/styles";

const PortfolioCard = ({ name, location, date, image, id, i }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text numberOfLines={2} style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 250,
    height: 300,
    borderRadius: 20,
    backgroundColor: colors.color1,
    overflow: "hidden",
    marginHorizontal: 10,
    marginBottom: 20,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentContainer: {
    padding: 10,
    alignItems: "center",
  },
  location: {
    color: colors.color2,
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 5,
  },
  date: {
    color: colors.color2,
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 15,
  },
  name: {
    color: colors.color2,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default PortfolioCard;
