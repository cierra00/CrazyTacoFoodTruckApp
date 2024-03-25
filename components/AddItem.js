import { View, TextInput, Text, StyleSheet, Pressable, KeyboardAvoidingView } from 'react-native';


import {useState} from 'react'


const AddItem = ({formData, handleSubmit, handleTitleChange, handleDescriptionChange, handlePriceChange, titleValue, priceValue, descriptionValue,}) => {
 
 

 

  
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={handleTitleChange}
        value={titleValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        onChangeText={handlePriceChange}
        value={priceValue}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={handleDescriptionChange}
        value={descriptionValue}
        multiline
      /> 
      <Pressable style={styles.pressable}
      onPress={handleSubmit}
      >
        <Text>Press me</Text>
      </Pressable>
    {/* Conditionally display form data */}
    {formData && (
        <View style={styles.formDataContainer}>
          <Text style={styles.formText}>Title: {formData.title}</Text>
          <Text style={styles.formText}>Price: {formData.price}</Text>
          <Text style={styles.formText}>Description: {formData.description}</Text>
        </View>
      )}
      {!formData && (
        <View style={styles.noDataContainer}>
          <Text></Text>
        </View>
      )}
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexDirection: 'column',
      padding: 25,
    },
    input: {
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 20,
      paddingHorizontal: 10,
      marginTop: 20,
    },
    pressable:{
     padding: 10,
     width: '100%',
     backgroundColor: 'green',
     border: 'red',
     color: 'red',
     height: 50,
    },
    formDataContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
      },
  });
export default AddItem