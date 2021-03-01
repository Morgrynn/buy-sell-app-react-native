import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const EditUser = ({ navigation }) => {
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
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <Text>Edit User Details</Text>
      <Text>Email address</Text>
      <Text>Username</Text>
      <Text>First Name</Text>
      <Text>Last Name</Text>
      <Text>street address</Text>
      <Text>number address</Text>
      <Text>Postcode</Text>
      <Text>City</Text>
      <Text>Country</Text>
      <Text>Phone number</Text>
      <Button title='Back' onPress={() => navigation.goBack()} />
      <Button
        title='Delete Account'
        onPress={() => navigation.navigate('DeleteUser')}
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

export default EditUser;
