import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const DeleteUser = ({ navigation }) => {
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
      <Text>Delete User Accoount</Text>
      <Text>No Going Back</Text>
      <Button title='Rethink' onPress={() => navigation.goBack()} />
      <Button title='Confirm' onPress={() => alert('deleted')} />
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

export default DeleteUser;
