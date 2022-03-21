import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import warnOnce from 'react-native/Libraries/Utilities/warnOnce';
import Content from './components/Content';
import Header from './components/Header';
import Home from './screens/Home';
import Register from './screens/Register';

const App = () => {
  const [welcome, setWelcome] = useState('Welcome');

  const handleClick = () => {
    setWelcome('Selamat Datang');
  };

  return (
    // {/* <Text style={styles.welcome}>{welcome}</Text>
    // <Header title="Dashboard" subTitle="Ini adalah halaman dashboard" />
    // <Header title="Products" subTitle="Ini adalah halaman products" />
    // <Content>
    //   <Text>Hello World</Text>
    // </Content>
    // <Button title="Press Me" onPress={handleClick} /> */}
    // {/* <Register /> */}
    // <Register />
    <Home />
  );
};

export default App;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
});
