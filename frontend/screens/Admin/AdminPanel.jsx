import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyle, formHeading } from '../../styles/styles'
import Header from '../../components/Header'

const AdminPanel = () => {
  return (
    <View style={defaultStyle}>
        <Header back={true}/>
        <View style={{paddingTop: 70, marginBottom: 20}}>
            <Text style={formHeading}>AdminPanel</Text>
        </View>
      
    </View>
  )
}

export default AdminPanel