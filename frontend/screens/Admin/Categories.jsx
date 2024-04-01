import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import { colors, defaultStyle } from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { categories } from "../Home";

const Categories = ({ navigation }) => {
  const [newCategory, setNewCategory] = useState("");
  const [categoryList, setCategoryList] = useState(categories);

  const addCategoryHandler = () => {
    if (newCategory.trim() === "") {
      return;
    }
    const newCategoryItem = {
      category: newCategory,
      _id: newCategory.toLowerCase().replace(/\s/g, ""),
    };
    setCategoryList([...categoryList, newCategoryItem]);
    setNewCategory("");
  };

  const deleteCategoryHandler = (categoryId) => {
    const updatedCategories = categoryList.filter(
      (category) => category._id !== categoryId
    );
    setCategoryList(updatedCategories);
  };

  const loading = false;

  return (
    <>
      <View style={defaultStyle}>
        <Header back={true} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Categories</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          {/* {categoryList.map((category, index) => (
          <View key={category._id} style={styles.categoryItem}>
            <Text style={styles.categoryName}>{category.category}</Text>
            <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => editCategoryHandler(category._id)}>
                <MaterialIcons name="edit" size={24} color={colors.color2} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteCategoryHandler(category._id)}>
                <MaterialIcons name="delete" size={24} color={colors.color2} />
              </TouchableOpacity>
            </View>
          </View>
        ))} */}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter category"
            value={newCategory}
            onChangeText={(text) => setNewCategory(text)}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={addCategoryHandler}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
    borderTopWidth: 1,
    borderTopColor: colors.color1,
    paddingTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: colors.color1,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: colors.color1,
    color: "black",
  },
  addButton: {
    backgroundColor: colors.color1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: colors.color3,
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 2,
  },
  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.color1,
  },
  categoryName: {
    fontSize: 15,
    color: colors.color2,
  },
  iconContainer: {
    flexDirection: "row",
  },
});

export default Categories;
