import { View, StyleSheet } from 'react-native';
import ShoppingList from '../components/ShoppingList';


export default function MenuScreen({listData, onDelete, onAdd, cartData}) {
  return (
    <View>
      <ShoppingList cartPage={true} style={styles.menu}  listData={listData} cartData={cartData} onDelete={onDelete} onAdd={onAdd} />      
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  menu: {
   flex:1,
   width: '100%',
   fontSize: 30,
  },
});
