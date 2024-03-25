import { View,Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React,{ useState} from 'react';
import ListItem from './ListItem';
import { GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';


const ItemList = ({data, cartPage, onDelete, onAdd}) => {
 
  return (
    
        <FlatList 
        data ={data}
        style={{}}   
        cartPage={cartPage}     
        renderItem={({item})=>{
          return(          
           
           
          
            <GestureHandlerRootView>
             
              <ListItem title={item.title} price={item.price} qty={item.qty} cartPage={cartPage} id={item.id}
            onDelete={onDelete} onAdd={onAdd}/>
             
            </GestureHandlerRootView>
         
            );     
        }}
        keyExtractor={item => item.id}
          />
    );
      }
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FAFBFF'
  },
  leftAction:{
    backgroundColor: '#38ae3c',
    justifyContent: 'center',
    flex: 1,
    height: '100%'
  },
  actionText: {
    color: '#fff',
    fontWeight: 600,
    padding: 20
  }
})

export default ItemList