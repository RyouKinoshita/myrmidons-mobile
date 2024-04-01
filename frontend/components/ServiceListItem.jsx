import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { colors } from "../styles/styles";
import MyModal from "../components/MyModal";

const ServiceListItem = ({
  navigate,
  deleteHandler,
  i,
  id,
  price,
  name,
  category,
  description,
  imgSrc,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setOpenModal(true)}
        onPress={() => navigate.navigate("servicedetails", { id })}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: i % 2 === 0 ? colors.color1 : colors.color1,
          }}
        >
          <Image
            source={{
              uri: imgSrc,
            }}
            style={styles.image}
          />

          <Text style={styles.text}>{price}</Text>

          <Text numberOfLines={1} style={styles.text}>
            {name}
          </Text>

          <Text style={styles.text}>{category}</Text>

          <Text style={styles.text}>{description}</Text>
        </View>
      </TouchableOpacity>

      {openModal && (
        <MyModal
          id={id}
          deleteHandler={deleteHandler}
          navigate={navigate}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20, // half of width and height to create a circle
    resizeMode: "cover",
  },
  text: {
    flex: 1,
    color: colors.color3,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default ServiceListItem;
