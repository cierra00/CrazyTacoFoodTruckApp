import { View, Text, StyleSheet, Button} from 'react-native'
//import {useNavigation} from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export default function CartScreen({navigation, route}){
 // const navigation = useNavigation();
 const {name} = route.params;
 useLayoutEffect(()=>{
  navigation.setOptions({
    title: name
  })
 }, [navigation, name])
  return (
    <View style={styles.container}>
      {/* <Text styles={styles.text}>{name}</Text>
      <Button title="Update Name" onPress={()=>{navigation.setParams({
        "name": "Cierra"
      })}} />
      <Button 
      title="Send Data Back"
      onPress={()=>
      navigation.navigate("Home", {
        result: "Data from Cart"})
      }
      /> */}
    </View>
  )
}

const styles = ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
})
