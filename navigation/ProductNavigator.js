import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailsScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        }}>
        <Stack.Screen
          name='CategoriesScreen'
          component={CategoriesScreen}
          options={{
            headerTitle: 'Main Categories',
          }}
          

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
