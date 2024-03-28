import { View, Text } from "react-native";
import React from "react";

const Heading = ({ text1 = "Our", text2 = "Services", containerStyle }) => {
  return (
    <View style={containerStyle}>
      <Text style={{ fontSize: 25 }}>
        {text1} <Text style={{ fontSize: 25, fontWeight: "900" }}>{text2}</Text>
      </Text>
    </View>
  );
};

export default Heading;
