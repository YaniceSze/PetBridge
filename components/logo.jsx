import React from 'react';
import { StyleSheet,Image, View, Text } from 'react-native';
import logoImage from "../assets/petLogo.png";

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} resizeMode='contain'/>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer:{
    marginTop: 40,
  },
  logo:{
    width: 200,
    height: 150
  }
})

export default Logo;