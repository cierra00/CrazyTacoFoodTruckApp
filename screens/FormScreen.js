import { View, Text } from 'react-native'
import React from 'react'
import AddItem from '../components/AddItem'

const FormScreen = ({formData, setFormData, onPressChange, handleTitleChange, handleDescriptionChange, handlePriceChange, handleSubmit, titleValue, descriptionValue, priceValue}) => {
  return (
    <View>
      <AddItem formData={formData}  
      setFormData={setFormData} 
      onPressChange={onPressChange} 
      handleSubmit={handleSubmit}
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      handlePriceChange={handlePriceChange}
      titleValue={titleValue}
      descriptionValue={descriptionValue}
      priceValue={priceValue}
      />
    </View>
  )
}

export default FormScreen