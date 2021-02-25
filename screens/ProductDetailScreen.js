import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import IoniconsHeaderButton from '../components/IoniconsHeaderButton';
import { Ionicons } from 'react-native-vector-icons';
import { PRODUCTS } from '../data/dummy-data';

const ProductDetailScreen = ({ navigation, route }) => {
  const { productId } = route.params;
  const selectedProduct = PRODUCTS.find((product) => product.id === productId);

  const ReusableItem = ({ onPress }) => <Item title='Edit' onPress={onPress} />;

  const ReusableHiddenItem = ({ onPress }) => (
    <HiddenItem title='hidden2' onPress={onPress} />
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedProduct.title,
      headerRight: () => (
        <Button onPress={() => alert('search')} title='Search' />
      ),
      // headerRight: () => {
      //   <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      //     <Item
      //       title='search'
      //       iconName='ios-search'
      //       onPress={() => alert('search')}
      //     />
      //     <ReusableItem onPress={() => alert('Edit')} />
      //     <OverflowMenu
      //       style={{ marginHorizontal: 10 }}
      //       OverflowIcon={<Ionicons name='ios-more' size={23} color='blue' />}>
      //       <HiddenItem title='hidden1' onPress={() => alert('hidden1')} />
      //       <ReusableHiddenItem onPress={() => alert('hidden2')} />
      //     </OverflowMenu>
      //   </HeaderButtons>;
      // },
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <Text>{selectedProduct.title}</Text>
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
