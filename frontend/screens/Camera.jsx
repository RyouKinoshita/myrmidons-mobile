import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Avatar } from "react-native-paper";
import { colors, defaultStyle } from "../styles/styles";
import * as ImagePicker from "expo-image-picker";

const CameraComponent = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const [camera, setCamera] = useState(null);

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false)
      return alert("Permission to access gallery is required");

    const data = await ImagePicker.launchImageLibraryAsync();

    if (route.params?.newService)
      return navigation.navigate("newservice", {
        image: data.assets[0].uri,
      });

    if (route.params?.updateService)
      return navigation.navigate("serviceimages", {
        image: data.assets[0].uri,
      });
    if (route.params?.updateProfile)
      return navigation.navigate("profile", {
        image: data.assets[0].uri,
      });
    else
      return navigation.navigate("signup", {
        image: data.assets[0].uri,
      });
  };

  const clickPicture = async () => {
    const data = await camera.takePictureAsync();

    if (route.params?.newService)
      return navigation.navigate("newservice", {
        image: data.uri,
      });

    if (route.params?.updateService)
      return navigation.navigate("serviceimages", {
        image: data.uri,
      });
    if (route.params?.updateProfile)
      return navigation.navigate("profile", {
        image: data.uri,
      });
    else
      return navigation.navigate("signup", {
        image: data.uri,
      });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View />;

  if (hasPermission === false)
    return (
      <View style={defaultStyle}>
        <Text>
          The app has no access to the camera, please accept camera permission
          to use the camera.
        </Text>
      </View>
    );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Camera
        type={type}
        style={{
          flex: 1,
          aspectRatio: 1,
        }}
        ratio={"1:1"}
        ref={(e) => setCamera(e)}
      />

      <View
        style={{
          flexDirection: "row",
          bottom: 10,
          width: "100%",
          justifyContent: "space-evenly",
          position: "absolute",
        }}
      >
        <MyIcon icon="image" handler={openImagePicker} />
        <MyIcon icon="camera" handler={clickPicture} />
        <MyIcon
          icon="camera-flip"
          handler={() => {
            setType((prevType) =>
              prevType === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
      </View>
    </View>
  );
};

const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler}>
    <Avatar.Icon
      icon={icon}
      size={60}
      color={colors.color1}
      style={{
        backgroundColor: colors.color4,
      }}
    />
  </TouchableOpacity>
);

export default CameraComponent;
