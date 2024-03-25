import { View, Text, StyleSheet, Image} from 'react-native'
//import {useNavigation} from '@react-navigation/native';


export default function HomeScreen({navigation, route, cartCount}){
    //const navigation = useNavigation();
   const user = "Cierra"
  return (
    <View style={styles.container}>
     
      {<Text styles={styles.text}>{route.params?.result}</Text>}
      <Text>Welcome {user}</Text>
      <Image
        source={require('../assets/crazyTaco.jpg')}
        style={styles.image}
      />
    <Text style={styles.h2}>Crazy Taco App</Text>
    <Text style={styles.p}>Order a varieity of our delicios tacos directly from our mobile app. 
      Introducing "Crazy Taco's" – the ultimate food truck mobile ordering app that brings the zesty flavors of authentic Mexican cuisine straight to your fingertips. </Text>
      <Text style={styles.p}>Whether you're craving the fiery kick of a classic carne asada taco or the cool, refreshing bite of a Baja fish taco, Crazy Taco's has you covered with its innovative and user-friendly platform.</Text>
    </View>
  )
}

const styles = ({
    container: {
        flex: 1,
        
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    image: {
      width: '100%',
      height: 300,
    },
    h2:{
      fontWeight: 'bold',
      fontSize: 30,
      alignSelf: 'center',
      marginTop: 20
    }, 
    p:{
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      fontWeight: 500
    }
})
