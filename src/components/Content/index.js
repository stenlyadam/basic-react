import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Content = ({children}) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({});
