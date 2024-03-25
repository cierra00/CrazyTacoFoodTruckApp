import {View, Text, Stylesheet, Modal, Button } from 'react-native'
import React, {useState} from 'react'
import ItemList from './ItemList';

const ShoppingList = ({cartPage, listData, onDelete, cartData, onAdd }) => {      
   
  return (
    <View>     
     {cartPage? (<ItemList data={cartData} cartPage={cartPage}  onDelete={onDelete} onAdd={onAdd} /> ): <ItemList data={listData} cartPage={cartPage}  onAdd={onAdd}/>}      
    </View>
  )}

  
  
  
export default ShoppingList