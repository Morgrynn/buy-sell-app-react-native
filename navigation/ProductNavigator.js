import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailsScreen';

const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='CategoriesScreen'
          component={CategoriesScreen}
          options={{ title: 'Product Categories' }}
        />
        <Stack.Screen
          name='CategoryProductsScreen'
          component={CategoryProductsScreen}
        />
        <Stack.Screen
          name='ProductDetailScreen'
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProductNavigator;
