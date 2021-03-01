import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Logout = (props) => {
  return (
    <View>
      <Button title='Logout' onPress={() => alert('logout')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Logout;
