import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyle, colors } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import Header from "../components/Header";

const Home = () => {
  const categories = [
    { category: "Digital Marketing", _id: "digitalmarketing" },
    { category: "Social Media Management", _id: "smm" },
    { category: "Graphics & Video Production", _id: "gvp" },
  ];
  const [category, setCategory] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  // const categories = [
  //   "Digital Marketing",
  //   "Social Media Management",
  //   "Graphics & Video Production",
  //   "Web Development",
  //   "Customer Service & QA",
  //   "Project Management",
  //   "Photography",
  //   "KOL",
  //   "Studio Services",
  //   "PC/Mobile Game Management",
  // ];
  return (
    <View style={defaultStyle}>
      <Header />

      {/* heading row */}

      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* heading */}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Services</Text>
        </View>

        {/* search bar */}
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              size={50}
              color={"gray"}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}

      <View
        style={{
          flexDirection: "row",
          height: 80,
        }}
      >
        <ScrollView
          horizontal
          contentContainerStyle={{
            alignItems: "center",
          }}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item, index) => (
            <Button
              key={item._id}
              style={{
                backgroundColor:
                  category === item._id ? colors.color1 : colors.color5,
                borderRadius: 100,
                margin: 5,
              }}
              onPress={() => categoryButtonHandler(item._id)}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: category === item._id ? colors.color2 : "gray",
                }}
              >
                {item.category}
              </Text>
            </Button>
          ))}
        </ScrollView>
      </View>

      {/* Products */}
    </View>
  );
};

export default Home;
