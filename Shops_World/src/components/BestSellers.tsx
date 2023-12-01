import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import here we are shop because all the cards content is same if we want we can get 
//we have array we can make same cards no need to write same code alredy in home section and shops section making card almost same if we have the backend
//we will have the array of data from that we can get that and make cards and show 
import Shop from './Shop'
const BestSellers = () => {
  return (
    <View>
      <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold'}}>BestSellers</Text>
      <Shop/>
    </View>
  )
}

export default BestSellers

const styles = StyleSheet.create({})