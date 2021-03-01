import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from '../screens/auth/ProductDetailScreen';
import UserProductListScreen from '../screens/auth/UserProductListScreen';
import EditUserProductScreen from '../screens/auth/EditUserProductScreen';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'UserProductLists'}
        component={UserProductListScreen}
        options={{
          title: 'Users Product List',
        }}
      />
      <MainStack.Screen
        name={'ProductDetailScreen'}
        component={ProductDetailScreen}
        options={{ title: 'Product Details' }}
      />
      <MainStack.Screen
        name={'EditUserProductScreen'}
        component={EditUserProductScreen}
        options={{ title: 'Edit Product' }}
      />
    </MainStack.Navigator>
  );
}
