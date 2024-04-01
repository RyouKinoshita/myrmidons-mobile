import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading } from '../styles/styles'
import Header from '../components/Header'
import Loader from '../components/Loader'
import { Headline } from 'react-native-paper'
import OrderItem from './OrderItem'
import Footer from '../components/Footer'

export const orders = [
  {
    _id: "asdasdasd",
    shippingInfo: {
      address: "73 Easter",
      city: "New York",
      Country: "India",
      pinCode: 221231
    },
    createdAt: "12-2022T3231",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 20000,
  },
  {
    _id: "wews",
    shippingInfo: {
      address: "73 Alabang",
      city: "Manila",
      Country: "Philippines",
      pinCode: 123512
    },
    createdAt: "12-2022T3231",
    orderStatus: "Delivered",
    paymentMethod: "ONLINE",
    totalAmount: 4500,
  },
]

const loading = false

const Order = () => {
  return (
    <>
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>

      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {
        loading ? <Loader /> : (
          <View
            style={{
              padding: 10,
              flex: 1,
            }}>
           <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
          </View>
        )
      }

    </View>
<Footer/>
    </>
  )

  
}

export default Order
