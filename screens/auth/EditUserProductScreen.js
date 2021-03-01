import React, { useState, useEffect, useCallback } from 'react';
import {
  ScrollView,
  Image,
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import * as ImagePicker from 'expo-image-picker';
import useGetUsersProducts from '../../hooks/useGetUsersProducts';
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import useEditProduct from '../../hooks/useEditProduct';
import axios from 'axios';
import { BASE_URL } from '../../config';

const EditUserProductScreen = ({ navigation, route }) => {
  const { token } = React.useContext(UserContext);
  const getProductDetails = (type) => {
    if (route.params) {
      switch (type) {
        case 'title':
          return route.params.title;
        case 'description':
          return route.params.description;
        case 'city':
          return route.params.city;
        case 'country':
          return route.params.country;
        case 'price':
          return route.params.price;
        case 'shipping':
          return route.params.shipping;
        case 'pickup':
          return route.params.pickup;
        case 'category':
          return route.params.category;
        case 'images':
          return route.params.images;
        case 'productId':
          return route.params.productId;
      }
    }
    return '';
  };

  const [title, setTitle] = useState(getProductDetails('title'));
  const [images, setImages] = useState(getProductDetails('images'));
  const [description, setDescription] = useState(
    getProductDetails('description')
  );
  const [price, setPrice] = useState(getProductDetails('price'));
  const [shipping, setShipping] = useState(getProductDetails('shipping'));
  const [city, setCity] = useState(getProductDetails('city'));
  const [country, setCountry] = useState(getProductDetails('country'));
  const [pickup, setPickup] = useState(getProductDetails('pickup'));
  const [category, setCategory] = useState(getProductDetails('category'));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled == true) {
      alert('Image picker cancelled or failed');
      return;
    }

    const fileNameSplit = pickerResult.uri.split('/');
    const fileName = fileNameSplit[fileNameSplit.length - 1];

    let postForm = new FormData();
    postForm.append('images', {
      uri: pickerResult.uri,
      name: fileName,
      type: 'image/jpeg' || 'image/jpg' || 'image/png',
    });
    postForm.append('title', title);
    postForm.append('description', description);
    postForm.append('city', city);
    postForm.append('country', country);
    postForm.append('price', price);
    postForm.append('shipping', shipping);
    postForm.append('category', category);
    setIsSubmitting(true);
    axios({
      method: 'post',
      url: `${BASE_URL}/products`,
      data: postForm,
      headers: {
        Authorization: `bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        //handle success
        console.log(response);
        alert('Image upload completed');
        setIsSubmitting(false);
      })
      .catch((response) => {
        //handle error
        console.log(response);
        alert('Image upload failed');
        setIsSubmitting(false);
      });
  };

  // const createProduct = async (
  //   title,
  //   description,
  //   price,
  //   shipping,
  //   city,
  //   country,
  //   category,
  //   images
  // ) => {
  //   try {
  //     await axios
  //       .post(`${BASE_URL}/products`, {
  //         headers: {
  //           Authorization: `bearer ${token}`,
  //           Accept: 'application/json',
  //           'Content-Type': 'multipart/form-data',
  //         },
  //         data: {
  //           title: title,
  //           description: description,
  //           city: city,
  //           country: country,
  //           price: price,
  //           shipping: shipping,
  //           category: category,
  //           images: images,
  //         },
  //       })
  //       .then((response) => {
  //         if (response.ok == false) {
  //           throw new Error('HTTP Code ' + response.status + ' - ' + response);
  //         }
  //         console.log('res ', response);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const editProduct = async (
  //   title,
  //   description,
  //   price,
  //   shipping,
  //   city,
  //   country,
  //   category,
  //   images
  // ) => {
  //   try {
  //     await axios
  //       .put(`${BASE_URL}/products/${getProductDetails('productId')}`, {
  //         headers: {
  //           Authorization: `bearer ${token}`,
  //           Accept: 'application/json',
  //           'Content-Type': 'multipart/form-data',
  //         },
  //         data: {
  //           title: title,
  //           description: description,
  //           city: city,
  //           country: country,
  //           price: price,
  //           shipping: shipping,
  //           category: category,
  //           images: images,
  //         },
  //       })
  //       .then((response) => {
  //         if (response.ok == false) {
  //           throw new Error('HTTP Code ' + response.status + ' - ' + response);
  //         }
  //         console.log('res ', response);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.headerTitle,
      headerRight: () => (
        <View style={{ paddingRight: 8 }}>
          <Ionicons
            name='ios-checkbox-outline'
            size={35}
            color={'purple'}
            title='Save'
            onPress={() => {
              navigation.navigate('UserProductLists');
            }}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.inputStyle}
            value={title}
            // onFocus={() => setenableShift(false)}
            mode='outlined'
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            label='Description'
            style={styles.inputStyle}
            value={description}
            // onFocus={() => setenableShift(false)}
            mode='outlined'
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            label='Price'
            style={styles.inputStyle}
            value={price}
            // onFocus={() => setenableShift(false)}
            // keyboardType='number-pad'
            mode='outlined'
            onChangeText={(text) => setPrice(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>City</Text>
          <TextInput
            label='City'
            style={styles.inputStyle}
            value={city}
            // onFocus={() => setenableShift(true)}
            mode='outlined'
            onChangeText={(text) => setCity(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Country</Text>
          <TextInput
            label='Country'
            style={styles.inputStyle}
            value={country}
            // onFocus={() => setenableShift(true)}
            mode='outlined'
            onChangeText={(text) => setCountry(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Shipping: set true / false</Text>
          <TextInput
            label='Shipping'
            style={styles.inputStyle}
            value={shipping}
            // onFocus={() => setenableShift(true)}
            mode='outlined'
            onChangeText={(text) => setShipping(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Category</Text>
          <TextInput
            label='category'
            style={styles.inputStyle}
            value={category}
            // onFocus={() => setenableShift(true)}
            mode='outlined'
            onChangeText={(text) => setCategory(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image Picker</Text>
          {isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <TouchableOpacity
              onPress={openImagePickerAsync}
              style={styles.imagePicker}>
              <Text>Pick a photo and start upload</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginVertical: 8,
  },
  inputStyle: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  imagePicker: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default EditUserProductScreen;
