import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyle, colors } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import ServiceCard from "../components/ServiceCard";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllServices,
  listAllServices,
} from "../redux/actions/serviceAction";
import { useSetCategories } from "../utils/hooks";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { services } = useSelector((state) => state.service);

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };
  const addToCardHandler = (id, name, price, image) => {
    dispatch({
      type: "addToCart",
      payload: {
        service: id,
        name,
        price,
        image,
      },
    });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
    console.log("Add to cart", id);
  };

  useSetCategories(setCategories, isFocused);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getAllServices(searchQuery, category));
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, searchQuery, category, isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {activeSearch && (
          <SearchModal
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setActiveSearch={setActiveSearch}
            services={services}
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
                Our
                <Text style={{ fontSize: 25, fontWeight: "900" }}>
                  {" "}
                  Services
                </Text>
              </Text>
            </View>

            {/* search bar */}
            {/* <View>
              <TouchableOpacity
                onPress={() => setActiveSearch((prev) => !prev)}
              >
                <Avatar.Icon
                  icon={"magnify"}
                  size={50}
                  color={"gray"}
                  style={{ backgroundColor: colors.color1, elevation: 12 }}
                />
              </TouchableOpacity>
            </View> */}
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
              <Button
                style={{
                  backgroundColor:
                    category === "all" ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 3,
                }}
                onPress={() => {
                  setCategory("all");
                  dispatch(listAllServices());
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === "all" ? colors.color2 : "gray",
                  }}
                >
                  All
                </Text>
              </Button>
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

          {/* Services */}
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {services.map((item, index) => (
                <ServiceCard
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
      </ScrollView>
      <Footer activeRoute={"home"} />
    </View>
  );
};

export default Home;
