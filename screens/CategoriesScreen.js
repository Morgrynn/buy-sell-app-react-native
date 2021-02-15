import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  console.log('nav ', navigation);
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Categories</Text>
      <Button
        title='Products'
        onPress={() => navigation.navigate('CategoryProductsScreen')}
      />
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

export default CategoriesScreen;
