import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import FormScreen from './screens/FormScreen'
import CartItemsScreen from './screens/CartItemsScreen'
import Ionicons from '@expo/vector-icons/Ionicons';
import {useState} from 'react'
import ListData from './data/ListData';
import uuid from 'react-native-uuid';
import { Keyboard } from 'react-native';


const Tab = createBottomTabNavigator();



export default function App(){
   const [formData, setFormData] = useState('');
   const [data, setData] = useState(ListData);
   const [title, setTitle] = useState('');
   const [price, setPrice] = useState('');
   const [ cart, setCart] = useState([])
   const [description, setDescription] = useState('');
   const handleTitleChange = (text) => {
    setTitle(text);
  };
 const cartData  = data.filter(item=> item.isInCart !== false );   
  const handlePriceChange = (text) => {
    setPrice(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

const handleSubmit = () => {
  
    setTitle(title)
    setDescription(description);
    setPrice(price);
    setTitle('');
    setPrice('');
    setDescription('');

    const newItem = {
        id: uuid.v4(),
        title: title,
        description: description,
        price: price,
        isInCart: false,
         }
         console.log(newItem)
       if(newItem.title !== '' && newItem.description !== '' && newItem.price !== ''){
        setData([newItem, ...data])
       }
         Keyboard.dismiss();
   };

    const handleDelete = (id)=>{
       const filteredData = data.filter((item)=> item.id !== id);
       setData(filteredData);
    }
    const handleAdd = (id)=>{
        
        const filteredData = data.map((item)=> {
            if(item.id === id){
                return {...item, isInCart: true}
            }
            return item;
        });
       
        setData(filteredData);
    }
    return(
        
    <NavigationContainer>
      <Tab.Navigator>
      
      <Tab.Screen 
        name="Home"
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        >            
          {(props) => <HomeScreen {...props} formData={formData}  />}
        </Tab.Screen>
        
        <Tab.Screen 
        name="Menu"
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-text-outline" size={size} color={color} />
            ),
          }}
        >
            
          {(props) => <MenuScreen {...props} formData={formData} listData={data} onAdd={handleAdd}   />}
        </Tab.Screen>

        <Tab.Screen 
        name="Add Item"
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        >
            
          {(props) => <FormScreen {...props} 
          formData={formData} 
          setFormData={setFormData}
         
          handleSubmit={handleSubmit}
          handleTitleChange={handleTitleChange}
          handleDescriptionChange={handleDescriptionChange}
          handlePriceChange={handlePriceChange}
          titleValue={title}
          descriptionValue={description}
          priceValue={price} 
          />}
        </Tab.Screen>

        <Tab.Screen 
        name="Cart"
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" size={size} color={color} />
            ),
          }}
        >
            
          {(props) => <CartItemsScreen {...props} formData={formData}  listData={data} cartData={cartData} onDelete={handleDelete} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    
    )
}