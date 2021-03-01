import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import { SliderBox } from 'react-native-image-slider-box';

const baseUrl = 'https://backend-buy-sell.herokuapp.com';

const ProductDetailScreen = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/products`);
      const products = response.data.products;
      setAllProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: productTitle,
    });
  }, []);

  const { productId, productTitle } = props.route.params;
  const selectedProduct = allProducts
    .filter((prod) => prod.productid === productId)
    .map((prod, i) => {
      let ship, pick;
      if (prod.shipping === 'true') {
        ship = 'Yes';
        pick = 'No';
      } else {
        ship = 'No';
        pick = 'Yes';
      }
      return (
        <ScrollView key={i}>
          <View style={styles.imageContainer}>
            <SliderBox
              images={prod.images}
              sliderBoxHeight={200}
              dotColor='#FFEE58'
              inactiveDotColor='#90A4AE'
            />
          </View>
          {/* <Image style={styles.image} source={{ uri: prod.images[0] }} /> */}
          <View style={styles.textContainer}>
            <Text style={styles.price}>€{prod.price}</Text>
            <View style={styles.delivery}>
              <Text style={styles.shipping}>Shipping: {ship}</Text>
              <Text style={styles.shipping}>Pickup: {pick}</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>Ad Detail </Text>
            <Text style={styles.description}>{prod.description}</Text>
          </View>
          <View style={styles.location}>
            <Text style={styles.title}>Location: </Text>
            <Text style={styles.description}>{prod.city},</Text>
            <Text style={styles.description}>{prod.country}.</Text>
          </View>
          <View style={styles.contact}>
            <Text style={styles.title}>Contact: </Text>
            <Text style={styles.email}>{prod.email}</Text>
          </View>
        </ScrollView>
      );
    });

  return <>{selectedProduct}</>;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-around',
  },
  delivery: {},
  price: {
    fontSize: 22,
    color: 'black',
    textAlign: 'left',
  },
  shipping: {
    fontSize: 14,
    textAlign: 'left',
    color: '#888',
  },
  descriptionContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'left',
    marginHorizontal: 20,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  email: {
    fontSize: 16,
  },
});

export default ProductDetailScreen;
