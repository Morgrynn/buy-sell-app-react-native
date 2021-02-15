import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>
        Category Products Screen
      </Text>
      <Button
        title='Product1'
        onPress={() => navigation.navigate('ProductDetailScreen')}
      />
      <Button title='Go Back' onPress={() => navigation.goBack()} />
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

export default CategoryProductsScreen;
