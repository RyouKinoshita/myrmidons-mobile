// ButtonBox.js
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, Button } from 'react-native-paper';
import { colors } from "../styles/styles";

const ButtonBox = ({ icon, text, handler, reverse = false, loading = false }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        backgroundColor: reverse ? colors.color3 : colors.color3,
        height: 80,
        width: 80,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
      }}
      onPress={() => handler(text)}
      disabled={loading}
    >
      <Avatar.Icon
        size={50}
        color={colors.color2}
        style={{ backgroundColor: reverse ? colors.color1 : colors.color3 }}
        icon={icon}
      />
      <Text
        style={{
          color: colors.color2,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonBox;
