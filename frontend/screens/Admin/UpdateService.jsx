import { View, Text, ScrollView } from "react-native";
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
import { Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";
import Footer from "../../components/Footer";

const loadingOther = false;
const UpdateService = (navigation, route) => {
  const [visible, setVisible] = useState(false);
  const loading = false;
  // const [id] = useState(route.params.id)
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
          <Text style={formHeading}>Update Service</Text>
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
                  loading={loadingOther}
                  disabled={loadingOther}
                >
                  Update
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

export default UpdateService;
