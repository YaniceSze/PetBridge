import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

// Import the local logo
import LogoImage from '../../assets/petlogo.png'; // Adjust the path to your logo image

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={LogoImage}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100, // Adjust based on your design
    height: 100,
    borderRadius: 50, // Adjust based on your design
  },
});

export default Logo;
