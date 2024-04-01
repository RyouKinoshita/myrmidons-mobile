import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import { colors, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ButtonBox from "../../components/ButtonBox";
import ServiceListHeading from "../../components/ServiceListHeading";
import { services } from "../Home";
import ServiceListItem from "../../components/ServiceListItem";
import Footer from "../../components/Footer";
import Chart from "../Chart";

const deleteServiceHandler = (id) => {
  console.log(`Deleting Service with ID: ${id}`);
};

const AdminPanel = ({ navigation }) => {
  const navigationHandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("categories");
        break;
      case "All Orders":
        navigation.navigate("adminorders");
        break;
      case "Service":
        navigation.navigate("newservice");
        break;

      default:
        navigation.navigate("adminorders");
        break;
    }
  };

  const loading = false;

  return (
    <>
      <View style={styles.container}>
        <Header back={true} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Admin Panel</Text>
        </View>
        {loading ? (
          <Loader />
        ) : (
          <>
            <View
              style={{
                backgroundColor: colors.color3,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Chart inStock={12} outOfStock={2} />
            </View>

            <View style={styles.content}>
              <View style={styles.buttonRow}>
                <ButtonBox
                  icon={"plus"}
                  text={"Service"}
                  handler={navigationHandler}
                />
                <ButtonBox
                  icon={"format-list-bulleted-square"}
                  text={"All Orders"}
                  handler={navigationHandler}
                />
                <ButtonBox
                  icon={"plus"}
                  text={"Category"}
                  handler={navigationHandler}
                />
              </View>
              <ServiceListHeading />
              <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                  {services.map((item, index) => (
                    <ServiceListItem
                      key={item._id}
                      id={item._id}
                      i={index}
                      price={item.price}
                      stock={item.stock}
                      name={item.name}
                      category={item.category?.category}
                      imgSrc={item.images[0].url}
                      deleteHandler={deleteServiceHandler}
                      navigate={navigation}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color3,
  },
  headingContainer: {
    paddingTop: 70,
    marginBottom: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.color2,
    marginTop: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
});

export default AdminPanel;
