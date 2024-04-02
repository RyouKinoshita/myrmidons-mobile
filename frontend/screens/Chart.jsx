import { View, Dimensions } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";
import { colors } from "../styles/styles";

const screenWidth = Dimensions.get("screen").width - 60 - 75;

const Chart = ({ inStock = 0, outOfStock = 0 }) => {
  const data = [
    {
      name: "Out of Stock",
      population: outOfStock,
      color: colors.color1,
      legendFontColor: colors.color2,
    },
    {
      name: "In Stock",
      population: inStock,
      color: colors.color1_light2,
      legendFontColor: colors.color2,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: colors.color3,
    backgroundGradientTo: colors.color3,
    color: (opacity = 1) => `rgba(255, 159, 67, ${opacity})`, // Orange color
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={130}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        absolute
      />
    </View>
  );
};

export default Chart;
