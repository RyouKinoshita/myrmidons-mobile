import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyle, colors } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
const categories = [
  { category: "Digital Marketing", _id: "digitalmarketing" },
  { category: "Social Media Management", _id: "smm" },
  { category: "Graphics & Video Production", _id: "gvp" },
];

export const products = [
  {
    price: 12345,
    stock: 5,
    name: "product1",
    _id: "prod1",
    images: [
      {
        url: "https://picsum.photos/id/7/400/300",
      },
    ],
  },
  {
    price: 54321,
    stock: 2,
    name: "product2",
    _id: "prod2",
    images: [
      {
        url: "https://picsum.photos/id/45/400/300",
      },
    ],
  },
];
const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };
  const addToCardHandler = (id, name, price, image, stock) => {
    // if (stock === 0)
    //   return Toast.show({
    //     type: "error",
    //     text1: "Out Of Stock",
    //   });
    // dispatch({
    //   type: "addToCart",
    //   payload: {
    //     product: id,
    //     name,
    //     price,
    //     image,
    //     stock,
    //     quantity: 1,
    //   },
    // });
    // Toast.show({
    //   type: "success",
    //   text1: "Added To Cart",
    // });
    console.log("Add to cart", id);
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
            <Text style={{ fontSize: 25 }}>
              Our{" "}
              <Text style={{ fontSize: 25, fontWeight: "900" }}>Services</Text>
            </Text>
          </View>

          {/* search bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.color1, elevation: 12 }}
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
                  margin: 3,
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
        <View style={{ flex: 1 }}>
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
        </View>
      </View>

      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
