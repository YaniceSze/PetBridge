import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  console.log("App executed");
  return (

    <View style={styles.container}>
      <Text>Hello PetBridge </Text>
      <Image 
        blurRadius={10}
        source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
