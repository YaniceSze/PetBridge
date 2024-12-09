import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import LoginPage from './components/Login';
import RegistrationPage from './components/Registration';

// export default function App() {

//   console.log("App executed");
//   return (
    
//     <LoginPage/>)
   
        
// //     <View style={styles.container}>
// //       <Text>Hello PetBridge </Text>
// //       <Image 
// //         blurRadius={10}
// //         fadeDuration={10000}
// //         source={{
// //         width: 200,
// //         height: 300,
// //         uri: "https://picsum.photos/200/300"
// //       }} />
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'dodgerblue',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// });
export default function App() {
  return <RegistrationPage />;
}