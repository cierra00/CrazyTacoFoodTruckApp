import { View, StyleSheet } from 'react-native';
import ShoppingList from '../components/ShoppingList';


export default function MenuScreen({formData, listData, onAdd}) {
  return (
    <View>
      <ShoppingList cartPage={false} formData={formData} listData={listData} style={styles.menu} onAdd={onAdd}  />      
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
