import {StyleSheet, TextInput, View, Button} from 'react-native';
import React, {useState} from 'react';

const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email: ', email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Masukan Email Anda"
        onChangeText={setEmail}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
