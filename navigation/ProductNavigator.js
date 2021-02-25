import React from 'react';
import { Platform, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import Colors from '../constants/Colors';
import UserScreen from '../screens/UserScreen';
import { Ionicons } from 'react-native-vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.iHeader,
      }}>
      <Stack.Screen
        name='CategoriesScreen'
        component={CategoriesScreen}
        options={{
          headerTitle: 'Categories',
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
  );
};

const UserNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.iHeader,
      }}>
      <Stack.Screen
        name='UserScreen'
        component={UserScreen}
        options={{
          headerTitle: 'Post FREE AD',
        }}
      />
      <Stack.Screen
        name='ProductDetailScreen'
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: { fontSize: 25 },
        }}>
        <Tab.Screen
          name='Main'
          component={ProductNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='ios-home' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Post'
          component={UserNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='ios-add-circle-outline' color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const DrawerNavigator = () => {
  <NavigationContainer>
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        component={CategoriesScreen}
        options={{
          headerTitle: 'Categories',
        }}
      />
      <Drawer.Screen name='Post FREE AD' component={UserNavigator} />
      <Drawer.Screen name='Login' component={UserNavigator} />
      <Drawer.Screen name='Create account' component={UserNavigator} />
    </Drawer.Navigator>
  </NavigationContainer>;
};

export default DrawerNavigator;
