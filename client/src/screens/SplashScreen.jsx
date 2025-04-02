import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { screenWidth } from '../utils/Constants'
import { resetAndNavigate } from '../utils/NavigationUtils'

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    let timer = setTimeout(() => {
      resetAndNavigate('HomeScreen')
    }, 1200)
    return ()=> clearTimeout(timer)
  },[])
  return (
    <View style={styles.container}>
    <Image source={require('../assets/images/g.png')} style={styles.img}  />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  img:{
width: screenWidth * 0.8,
height: screenWidth * 0.8,
resizeMode:"contain"
  }
})