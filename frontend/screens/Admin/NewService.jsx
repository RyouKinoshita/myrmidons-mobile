import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Avatar, Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";
import Footer from "../../components/Footer";
const loading = false;
//  const loadingOther = false
const NewService = (navigation, route) => {
  const [visible, setVisible] = useState(false);

  // const [id] = useState(route.params.id)
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("LAPTOP");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "123", category: "Laptop" },
    { _id: "123", category: "Hatdog" },
    { _id: "123", category: "WEWS" },
  ]);

  const submitHandler = () => {
    // dispatch(updateService(id, name, description, price, stock, categoryID));
  };
  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color1,
        }}
      >
        <Header back={true} />
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Add Service</Text>
          {loading ? (
            <Loader />
          ) : (
            <ScrollView
              style={{
                padding: 15,
                elevation: 10,
                borderRadius: 10,
                backgroundColor: colors.color3,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  height: 650,
                }}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    alignSelf: "center",
                    marginBottom: 20,
                  }}
                >
                  <Avatar.Image
                    size={80}
                    style={{
                      backgroundColor: colors.color1,
                    }}
                    source={{
                      uri: image ? image : null,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("camera", { newService: true })
                    }
                  >
                    <Avatar.Icon
                      icon={"camera"}
                      size={30}
                      color={colors.color3}
                      style={{
                        backgroundColor: colors.color2,
                        position: "absolute",
                        bottom: 0,
                        right: -5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <Button
                  onPress={() =>
                    navigation.navigate("serviceimages", {
                      id,
                      images: [],
                    })
                  }
                  textColor={colors.color1}
                >
                  Manage Images
                </Button>

                <TextInput
                  {...inputOptions}
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  {...inputOptions}
                  placeholder="Description"
                  value={description}
                  onChangeText={setDescription}
                />

                <TextInput
                  {...inputOptions}
                  placeholder="Price"
                  keyboardType="number-pad"
                  value={price}
                  onChangeText={setPrice}
                />
                <TextInput
                  {...inputOptions}
                  placeholder="Stock"
                  value={stock}
                  keyboardType="number-pad"
                  onChangeText={setStock}
                />

                <Text
                  style={{
                    ...inputStyling,
                    textAlign: "center",
                    textAlignVertical: "center",
                    borderRadius: 3,
                  }}
                  onPress={() => setVisible(true)}
                >
                  {category}
                </Text>

                <Button
                  textColor={colors.color2}
                  style={{
                    backgroundColor: colors.color1,
                    margin: 20,
                    padding: 6,
                  }}
                  onPress={submitHandler}
                  loading={loading}
                  disabled={loading}
                >
                  Create
                </Button>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
      <SelectComponent
        categories={categories}
        setCategoryID={setCategoryID}
        setCategory={setCategory}
        visible={visible}
        setVisible={setVisible}
      />
      <Footer />
    </>
  );
};

export default NewService;
