import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';

const Input = ({handleChangeText}) => (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholderTextColor="#477EFF" placeholder="Search..." onChangeText={handleChangeText}/>
    </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  input: {
    width:'100%',
    height:45,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#477EFF',
    paddingLeft:20,
    color:'#477EFF'
  }
})

export default Input;
