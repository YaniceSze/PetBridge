import { TouchableOpacity,Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, isLoading}) => {
  return (
    <TouchableOpacity 
        style={styles.button}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'darkorange',
        borderRadius: 20,
        width: 250,
        height: 42,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default CustomButton