import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import Footer from "../components/Footer";
import { getServiceDetails } from "../redux/actions/serviceAction";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};

const ServiceDetails = ({ route: { params } }) => {
  const {
    service: { name, price, description, images },
  } = useSelector((state) => state.service);

  const isCarousel = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const addToCardHandler = () => {
    dispatch({
      type: "addToCart",
      payload: {
        product: params.id,
        name,
        price,
        image: images[0]?.url,
        quantity,
      },
    });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
  };

  useEffect(() => {
    dispatch(getServiceDetails(params.id));
  }, [dispatch, params.id, isFocused]);

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          padding: 0,
          backgroundColor: colors.color1,
        }}
      >
        <Header back={true} />
        {/* carousel */}
        <Carousel
          layout="stack"
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          ref={isCarousel}
          data={images}
          renderItem={CarouselCardItem}
        />

        <View
          style={{
            backgroundColor: colors.color2,
            padding: 35,
            flex: 1,
            marginTop: -380,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              fontSize: 25,
            }}
          >
            {name}
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "900",
            }}
          >
            ₱{price}
          </Text>

          <Text
            style={{
              letterSpacing: 1,
              lineHeight: 20,
              marginVertical: 15,
            }}
            numberOfLines={8}
          >
            {description}
          </Text>

          <TouchableOpacity activeOpacity={0.9} onPress={addToCardHandler}>
            <Button icon={"cart"} style={style.btn} textColor={colors.color2}>
              Add Item To Cart
            </Button>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },

  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ServiceDetails;
