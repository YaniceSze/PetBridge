// Welcome Page
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import { Link, Redirect, router} from 'expo-router';
import { ImageBackground, View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import Logo from '../components/logo';

export default function App() {
  const [isChecked, setIsChecked] = useState(false)
  const handleButtonPress = () => {
    if(!isChecked){
      Alert.alert('Reminder','Please agree to the Terms and Privacy before proceeding.');
    } else {
      router.push('/sign-in');
    }
  }

  return (
    <ImageBackground 
      source={{uri: "https://i.pinimg.com/736x/de/94/22/de9422979d3a7dc0e3a88922ebed76f5.jpg"}} 
      style={styles.imageContainer}>

      <View style={styles.content}>

        <Logo/>
        <Image source={require("../assets/card.png")} style={styles.card} />

        <View style={styles.textContainer}>
          <Text style={styles.textStatement}>Explore different Communities with</Text>
          <Text style={styles.textAppName}>PetBridge</Text>
        </View>

        <CustomButton 
          title="Use Email"
          handlePress={handleButtonPress}
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity 
            style={[styles.checkbox, isChecked && styles.checked]} 
            onPress={() => setIsChecked(!isChecked)}
          >
            {/* Unicode Check Mark */}
            {isChecked && <Text style={styles.tick}>✔</Text>}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I have carefully read and agree with <Link href="https://vivacious-reflect-435537.framer.app/tos" style={styles.linkText}>"Terms"</Link> and <Link href="https://vivacious-reflect-435537.framer.app/privacy" style={styles.linkText}>"Privacy"</Link>.
          </Text>
        </View>

      </View>

      <StatusBar backgroundColor='#161622'/>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 350,
    marginTop: -50, 
    resizeMode: 'contain'
  },
  checked: {
    backgroundColor: '#495ce9', 
  },
  tick: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkbox:{
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#495ce9',
    marginRight: 10,
    borderRadius: 3,
    backgroundColor: 'white',
  },
  checkboxContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  checkboxText: {
    fontSize: 16,
    color: '#000',
  },
  linkText: {
    color: '#495ce9',  // CMB blue color
    textDecorationLine: 'underline',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode:'cover'
  },
  textContainer:{
    alignItems: 'center',
    marginTop: -30,
    marginBottom: 20,
    fontFamily: 'Open Sans',
  },
  textStatement: {
    color: '#495ce9', 
    fontWeight:'900', 
    fontSize: 20
  },
  textAppName: {
    color: 'darkorange', 
    fontWeight:'900', 
    fontSize: 25,
    fontStyle: 'italic'
  }

});
