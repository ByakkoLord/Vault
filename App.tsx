import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import NewItem from './components/NewItem';

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
    <View style={styles.container}>
      <NewItem state={isVisible}/>
      <ScrollView style={styles.scrowView}>
        {item.map((id) => (
          <View key={id} style={styles.item}>
          <Text style={styles.chargeName}>Name</Text>
          <Text style={styles.value}>Value</Text>
          <Text style={styles.date}>xx/xx/xx</Text>
        </View>
        ))}
        
      </ScrollView>
      <View style={styles.homeBar}>
        <View style={{position: 'relative', left: 0}}>
        <TouchableOpacity onPress={switchNewItemMenu} style={styles.Circle}>
          
          </TouchableOpacity>
          <View style={styles.invCircle}>
            <View style={styles.invSquareLeft}>
            <View style={styles.invSemiCircleLeft}></View>
            </View>
            <View style={styles.invSquareRight}>
            <View style={styles.invSemiCircleRight}></View>
            </View>
          </View>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
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
    backgroundColor: 'white',
    width: 20,
    height: 10
  },
  invSquareRight: {
    position: 'relative',
    right: -70,
    top: 33,
    backgroundColor: 'white',
    width: 20,
    height: 10
  },
  Circle: {
    margin: 'auto',
    bottom: 55,
    backgroundColor: 'black',
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
