import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.screen}>
      <Text>Product Details Screen</Text>
      <Button title='Categories' onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductDetailScreen;
