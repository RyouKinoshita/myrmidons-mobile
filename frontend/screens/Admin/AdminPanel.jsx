import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ButtonBox from "../../components/ButtonBox";
import ServiceListHeading from "../../components/ServiceListHeading";
import ServiceListItem from "../../components/ServiceListItem";
import Footer from "../../components/Footer";
import Chart from "../Chart";
import { useAdminServices, useMessageAndErrorOther } from "../../utils/hooks";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { deleteService } from "../../redux/actions/otherAction";
import { getAdminServices } from "../../redux/actions/serviceAction";

const AdminPanel = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { loading, services } = useAdminServices(dispatch, isFocused);

  const navigationHandler = (text) => {
    switch (text) {
      case "Add New Category":
        navigation.navigate("categories");
        break;
      case "View All Orders":
        navigation.navigate("adminorders");
        break;
      case "Add New Service":
        navigation.navigate("newservice");
        break;
      default:
        navigation.navigate("adminorders");
        break;
    }
  };

  const deleteServiceHandler = (id) => {
    dispatch(deleteService(id));
  };

  const loadingDelete = useMessageAndErrorOther(
    dispatch,
    null,
    null,
    getAdminServices
  );

  return (
    <>
      <View style={styles.container}>
        <Header back={true} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Admin Dashboard</Text>
        </View>
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* <View
              style={{
                backgroundColor: colors.color3,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Chart inStock={12} outOfStock={2} />
            </View> */}

            <View style={styles.content}>
              <View style={styles.buttonRow}>
                <ButtonBox
                  icon={"plus"}
                  text={"Add New Service"}
                  handler={navigationHandler}
                />
                <ButtonBox
                  icon={"format-list-bulleted-square"}
                  text={"View All Orders"}
                  handler={navigationHandler}
                />
                <ButtonBox
                  icon={"plus"}
                  text={"Add New Category"}
                  handler={navigationHandler}
                />
              </View>
              <ServiceListHeading />
              <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                  {!loadingDelete &&
                    services.map((item, index) => (
                      <ServiceListItem
                        key={item._id}
                        id={item._id}
                        i={index}
                        price={item.price}
                        description={item.description}
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
