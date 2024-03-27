import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyle, colors } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
const categories = [
  { category: "Digital Marketing", _id: "digitalmarketing" },
  { category: "Social Media Management", _id: "smm" },
  { category: "Graphics & Video Production", _id: "gvp" },
];

const products = [
  {
    price: 12345,
    name: "product1",
    _id: "prod1",
    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpikwizard.com%2F&psig=AOvVaw3Ei0Ea7jYrbya6b-YSja1N&ust=1711658397023000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjD3cmmlYUDFQAAAAAdAAAAABAR",
      },
    ],
  },
];
const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

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
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
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
        {/* <View style={{ flex: 1 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((item, index) => (
            <ProductCard
              stock={item.stock}
              name={item.name}
              price={item.price}
              image={item.images[0]?.url}
              addToCardHandler={addToCardHandler}
              id={item._id}
              key={item._id}
              i={index}
              navigate={navigate}
            />
          ))}
        </ScrollView>
      </View> */}
      </View>
    </>
  );
};

export default Home;
