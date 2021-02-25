import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CategoriesScreen = ({ navigation }) => {
  console.log(navigation);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ paddingLeft: 5 }}>
          <Ionicons
            name='menu'
            size={35}
            color={Platform.OS === 'android' ? 'white' : Colors.iHeader}
            // onPress={() => navigation.toggleDrawer()}
            title='Menu'
          />
        </View>
      ),
    });
  }, [navigation]);
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        image={itemData.item.image}
        onSelect={() => {
          navigation.navigate('CategoryProductsScreen', {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
