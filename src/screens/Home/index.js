import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.title}>Dashboard</Text> */}
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start', //main-axis
    // alignItems: 'center', //cross-axis
    // backgroundColor: 'yellow',
    // padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box2: {
    flex: 3,
    backgroundColor: 'red',
  },
  box3: {
    flex: 1,
    backgroundColor: 'green',
  },
});
