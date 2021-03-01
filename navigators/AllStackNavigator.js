import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllListScreen from '../screens/auth/AllListScreen';
import ProductDetailScreen from '../screens/auth/ProductDetailScreen';

const AllStack = createStackNavigator();

export default function AllStackNavigator() {
  return (
    <AllStack.Navigator>
      <AllStack.Screen
        name={'AllListScreen'}
        component={AllListScreen}
        options={{
          title: 'All Access',
        }}
      />
      <AllStack.Screen
        name={'ProductDetailScreen'}
        component={ProductDetailScreen}
        options={{ title: 'Product Details' }}
      />
    </AllStack.Navigator>
  );
}
