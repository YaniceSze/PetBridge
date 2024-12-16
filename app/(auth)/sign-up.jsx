import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import { Link } from 'expo-router';
import Logo from '../../components/logo';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {

  const [form,setForm] = useState({
    username: '',
    email: '',
    password: ''
  })  

  const [isSubmitting,setIsSubmitting] = useState(false)

  // Action after clicked the submit button
  const submit = () => {
    if (form.username === '' || form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      Alert.alert('Success', `Sign up as: ${form.username}`);
      setIsSubmitting(true);
    }
  }

  return (
    <ImageBackground 
      source={{ uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL2pvYjE1NzEtcmVtaXgtMTAtYy5qcGc.jpg' }}
      style={styles.imageContainer}
    >
      <View style={styles.formContainer}>

        <Logo/>
        <Text style={styles.title}>Sign Up</Text>

                
        <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e)=>setForm({...form, username: e})} // 1st parameter: destruct the existing form value, 2nd parameter: modify email to equal to event
          placeholder="Username"
        />
        
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e)=>setForm({...form, email: e})} // 1st parameter: destruct the existing form value, 2nd parameter: modify email to equal to event
          keyboardType="email-address" // useful for autofilling info such as email, names and so on
          placeholder="Email"
        />

        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e)=>setForm({...form, password: e})} 
          placeholder="Password"
        /> 

        <CustomButton
          title="Sign Up"
          handlePress={submit}
          isLoading={isSubmitting}
        />

        <View style={styles.signInContainer}>
          <Text style={styles.signInStatement}>Have an account already?{'  '}</Text>
          <Link style={styles.signIn} href="/sign-in">Sign In</Link>
        </View>

      </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: -200
  },
  title:{
    fontWeight: 'bold',
    fontSize: 25,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  signInContainer:{
    justifyContent: 'center',
    paddingTop: 20,
    flexDirection: 'row'
  },
  signInStatement:{
    fontWeight: 'bold',
    fontSize: 16
  },
  signIn:{
    fontWeight: 'bold',
    color: 'darkorange',
    fontSize: 16
  }
});
