import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/Store'

const HomeScreen = () => {
  const CoffeeList = useStore( (state: any) => state.CoffeeList );
  const BeanList = useStore( (state: any) => state.BeanList );
  // console.log('CoffeeLIST =', CoffeeList.length)

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({})

export default HomeScreen