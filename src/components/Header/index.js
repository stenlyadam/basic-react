import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    padding: 10,
    margin: 5,
  },
  title: {
    fontSize: 18,
    color: '#00000',
    textAlign: 'center',
    fontWeight: '800',
  },
  subTitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
