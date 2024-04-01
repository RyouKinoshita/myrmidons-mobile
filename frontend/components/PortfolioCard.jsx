import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Button } from "react-native-paper";

const PortfolioCard = ({ name, location, date, image, id, i }) => {
  return (
    <View
      style={{
        elevation: 15,
        width: 250,
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
        borderRadius: 20,
        height: 400,
        backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: "75%",
          height: 200,
          resizeMode: "contain",
          position: "absolute",
          left: 30,
          top: 105,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            color: i % 2 === 0 ? colors.color2 : colors.color3,
            fontSize: 25,
            fontWeight: "300",
            width: "60%",
          }}
        >
          {location}
        </Text>

        <Text
          numberOfLines={2}
          style={{
            color: i % 2 === 0 ? colors.color2 : colors.color3,
            fontSize: 25,
            fontWeight: "300",
            width: "60%",
          }}
        >
          {date}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
          borderRadius: 0,
          paddingVertical: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          width: "100%",
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            color: i % 2 === 0 ? colors.color1 : colors.color2,
            fontSize: 35,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};

export default PortfolioCard;
