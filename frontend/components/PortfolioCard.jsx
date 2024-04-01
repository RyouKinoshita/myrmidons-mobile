// import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
// import React from "react";
// import { colors } from "../styles/styles";
// import { Button } from "react-native-paper";

// const PortfolioCard = ({ name, location, date, image, id, i }) => {
//   return (
//     <TouchableOpacity
//       activeOpacity={1}
//       onPress={() => navigate.navigate("portfoliodetails", { id })}
//     >
//       <View
//         style={{
//           elevation: 15,
//           width: 250,
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginHorizontal: 10,
//           borderRadius: 20,
//           height: 400,
//           backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
//         }}
//       >
//         <Image
//           source={{
//             uri: image,
//           }}
//           style={{
//             width: "75%",
//             height: 200,
//             resizeMode: "contain",
//             position: "absolute",
//             left: 30,
//             top: 105,
//           }}
//         />

//         <View
//           style={{
//             flexDirection: "row",
//             padding: 20,
//             justifyContent: "space-between",
//             width: "100%",
//           }}
//         >
//           <Text
//             numberOfLines={2}
//             style={{
//               color: i % 2 === 0 ? colors.color2 : colors.color3,
//               fontSize: 25,
//               fontWeight: "300",
//               width: "60%",
//             }}
//           >
//             {name}
//           </Text>

//           <Text
//             numberOfLines={2}
//             style={{
//               color: i % 2 === 0 ? colors.color2 : colors.color3,
//               fontSize: 25,
//               fontWeight: "300",
//               width: "60%",
//             }}
//           >
//             {date}
//           </Text>

//           <Text
//             numberOfLines={2}
//             style={{
//               color: i % 2 === 0 ? colors.color2 : colors.color3,
//               fontSize: 20,
//               fontWeight: "700",
//             }}
//           >
//             {location}
//           </Text>
//         </View>

//         <TouchableOpacity
//           style={{
//             backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
//             borderRadius: 0,
//             paddingVertical: 5,
//             borderBottomRightRadius: 20,
//             borderBottomLeftRadius: 20,
//             width: "100%",
//           }}
//         >
//           <Button
//             onPress={() => addToCardHandler(id, name, price, image, stock)}
//             textColor={i % 2 === 0 ? colors.color1 : colors.color2}
//           >
//             Add To Cart
//           </Button>
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default PortfolioCard;
