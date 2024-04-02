import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import { colors, defaultStyle, formHeading, inputOptions, inputStyling } from "../../styles/styles";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { createPortfolio } from "../../redux/actions/portFolioAction";
import { useSetCategories, useMessageAndErrorOther } from "../../utils/hooks";
import mime from "mime";
import Header from "../../components/Header";

const NewPortfolio = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("date", date);
    formData.append("file", {
      uri: image,
      type: mime.getType(image),
      name: image.split("/").pop(),
    });

    dispatch(createPortfolio(formData));
  };

  useEffect(() => {
    if (route.params?.image) setImage(route.params.image);
  }, [route.params]);

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true} />

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>New Portfolio</Text>
        </View>

        <ScrollView
          style={{
            padding: 20,
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

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              {...inputOptions}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
            />
            <TextInput
              {...inputOptions}
              placeholder="Date"
              value={date}
              onChangeText={setDate}
            />

            <Button
              textColor={colors.color2}
              style={{
                backgroundColor: colors.color1,
                margin: 20,
                padding: 6,
              }}
              onPress={submitHandler}
              disabled={!name || !location || !date || !image}
            >
              Create
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default NewPortfolio;
