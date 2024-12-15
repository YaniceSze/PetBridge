import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const FormField = ({title, value, placeholder, handleChangeText, ...props}) => {

  const [showPassword,setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false); // use to change input color when it is focused

  return (
    <View style={styles.formContainer}>
        
      <Text style={{alignSelf: 'flex-start', fontWeight:'bold'}}>{title}</Text>

      <View style={[styles.inputContainer,isFocused && {borderColor: 'darkorange'}]}>

        <TextInput 
           style={styles.input}
           value={value}
           placeholder={placeholder}
           placeholderTextColor="#7b7b8b"
           onChangeText={handleChangeText}
           secureTextEntry={title === 'Password' && !showPassword}
           onFocus={()=>setIsFocused(true)}
           onBlur={() => setIsFocused(false)}
        />

        {/* EyeHide */}
        {title === 'Password' && (
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)} // Toggle showPassword
          >
            <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        )}
         
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  formContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{
    width: 250,
    height: 35,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1, // frame of border
    // borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    flex: 1
  }
})
export default FormField