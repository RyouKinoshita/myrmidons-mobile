import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';
import { colors, defaultStyle } from '../../styles/styles';



const AdminPanel = ({ navigation }) => {


  const loading = true;

  return (
    <>
    <View style={defaultStyle}>
      <Header back={true} />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Categories</Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <>

        
        </>
      )}
    </View>
    <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 11,
    // backgroundColor: colors.color3,
  },
  headingContainer: {
    paddingTop: 70,
    marginBottom: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.color2,
    marginTop: 40
  },
  content: {
    flex: 1,
    padding: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
});

export default AdminPanel;
