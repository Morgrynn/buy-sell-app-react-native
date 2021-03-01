import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const EditProducts = ({ navigation }) => {
  // console.log(navigation);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ paddingLeft: 5 }}>
          <Ionicons
            name='menu'
            size={35}
            color={Platform.OS === 'android' ? 'white' : Colors.iHeader}
            onPress={() => navigation.toggleDrawer()}
            title='Menu'
          />
        </View>
      ),
      headerRight: () => (
        <View style={{ paddingRight: 8 }}>
          <Ionicons
            name='ios-person-outline'
            size={32}
            color={Platform.OS === 'android' ? 'white' : Colors.iHeader}
            onPress={() => navigation.navigate('UserScreen')}
            title='Menu'
          />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <Text>Edit Products</Text>
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

export default EditProducts;
