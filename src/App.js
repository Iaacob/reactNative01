import React from 'react';
import { View } from 'react-native';
import Input from './Input.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Input/>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
