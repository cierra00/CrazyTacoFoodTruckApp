import { View, TouchableOpacity } from 'react-native'
import {useState} from 'react';
import { Card,Text} from 'react-native-paper';
import { Swipeable } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';



const ListItem = ({title, qty, price, id, cartPage, onDelete, onAdd}) => {
  
 const renderLeftActions = (id)=>{
  return(
    <TouchableOpacity onPress={()=> onAdd(id)}>
<View style={{backgroundColor: 'green', height: '85%', width: 100, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
  <Ionicons name="add-outline" size={50} color="white" />
  </View>
    </TouchableOpacity>
  )
 }
  const renderRightActions = (id)=>{
  return(
    <TouchableOpacity onPress={()=> onDelete(id)}>
<View style={{backgroundColor: 'red', height: '85%', width: 100, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
  <Ionicons name="trash" size={50} color="white" />
  </View>
    </TouchableOpacity>
  )
 }
 
 return(
  
 <>
  <Swipeable
              renderRightActions={cartPage? ()=>renderRightActions(id) : null}
               renderLeftActions={ cartPage? null : ()=>renderLeftActions(id)}
              >
   <TouchableOpacity>
      <Card style={styles.container}>
    <Card.Title title={title} titleStyle={{fontSize: 20}}/>
      <View style={{height: 75}}>
      <Text style={styles.text}>{title}{id} {price} {cartPage? <Text style={styles.qty}>Qty: {qty}</Text>: null}</Text>
 
        
      </View>
  </Card>
   </TouchableOpacity>

</Swipeable>
  </>
  
    )
  
}

const styles = ({
  container:{
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center'
  },
  button:{
    width: '100%',
  },
  text:{
    fontSize: 15,
  
  },
  qty:{
    fontSize: 15
  }
})

export default ListItem