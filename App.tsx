import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//chamar a funçao Welcome, n/ a page
import {Welcome} from './src/pages/Welcome';


export default function App() {
  return (
    <View style={styles.container}>
    
       <Welcome />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
    //justifyContent: 'center',  
  },
});
