import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Content from './components/Content';
import Header from './components/Header';

const App = () => {
  const [hello, setHello] = useState('Welcome');

  const handleClick = () => {
    // console.log('Button Pressed!!!');
    setHello('Selamat Datang');
  };

  return (
    <View>
      <Text style={styles.welcome}>{hello}</Text>
      <Header title="Dashboard" subTitle="Ini adalah halaman dashboard" />
      <Header title="Products" subTitle="Ini adalah halaman products" />

      <Content>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </Content>
      <Button title="Press Me" onPress={handleClick} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
});
