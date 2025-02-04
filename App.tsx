import { useContext, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AppContext, AppProvider } from './contexts/appContext';

import Main from './components/Main';

export default function App() {

  const [item, setItem] = useState<number[]>([]);

  
  

  const addNewItem = () => {
    console.log('Item Adicionado')
    const newItemId = item.length + 1
    setItem([...item, newItemId])
  }

  

  const [isVisible, setIsVisible] = useState(false);
  const switchNewItemMenu = () => {
    if (!isVisible){setIsVisible(true)} else {setIsVisible(false)}
  }



  return (
    
    <AppProvider>
      <Main/>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBar: {
    backgroundColor: '#B911F0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,

  },
  invCircle: {
    margin: 'auto',
    bottom: 110,
    backgroundColor: '#151515',
    width: 80,
    borderRadius: '50%',
    height: 67,
    zIndex: 0
  },
  invSemiCircleLeft: {
    position: 'relative',
    backgroundColor: '#B911F0',
    borderRadius: 30,
    left: -29.7,
    width: 50,
    height: 40
  },
  invSemiCircleRight: {
    backgroundColor: '#B911F0',
    borderRadius: 30,
    width: 50,
    height: 40
  },
  invSquareLeft: {
    position: 'relative',
    left: -10,
    top: 43,
    backgroundColor: '#151515',
    width: 20,
    height: 10
  },
  invSquareRight: {
    position: 'relative',
    right: -70,
    top: 33,
    backgroundColor: '#151515',
    width: 20,
    height: 10
  },
  Circle: {
    margin: 'auto',
    bottom: 55,
    backgroundColor: '#B911F0',
    width: 67,
    borderRadius: '50%',
    height: 67,
    zIndex: 1
  },
  item: {
    backgroundColor: 'gray',
    margin: 'auto',
    marginTop: 15,
    width: '90%',
    height: 80     
  },
  scrowView: {
    height: '100%',
    width: '100%',
    marginBottom: 105
  },
  chargeName: {
    position: 'absolute',
    top: 15,
    left: 15
  },
  value: {
    position: 'absolute',
    top: 28,
    right: 15
  },
  date:{
    position: 'absolute',
    top: 50,
    left: 15
  },
  input1: {
    width: 300,
    height: 90,
    color: 'black',
    backgroundColor: 'white'
}
});
