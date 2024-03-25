import { View, Text, Stylesheet, Modal, Button } from 'react-native'
import React, {useState} from 'react'
import ItemList from './ItemList';
import ListData from '../data/ListData';


const CartList = ({modal, cartPage}) => {
  const [listItems, setListItems] = useState(ListData);
  const [cartPaged, setCartPaged] = useState(false);

  return (
    <View >
      <ItemList data={listItems} cartPage={cartPaged} style={styles.container} /> 
              
    </View>
  )}

  
  const styles = Stylesheet.create({
    container:{
      width: 0
    }
  })
  
export default CartList