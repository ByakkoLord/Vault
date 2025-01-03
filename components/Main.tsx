import { useContext, useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import NewItem from './NewItemCreator';
import { AppContext } from '../contexts/appContext';
import { LinearGradient } from "expo-linear-gradient";

export default function App() {

  const [item, setItem] = useState<number[]>([]);

  const addNewItem = () => {
    console.log('Item Adicionado')
    const newItem = {
      id: item.length + 1,
      name: `Item ${item.length + 1}`,
      value: `${Math.random() * 100}`
    }
    setItem([...item, newItem.id])
  }

  const {billInfo, setBillInfo, isActivated, setIsActivated } = useContext(AppContext)
  

  useEffect(() => {
    if(isActivated){addNewItem()}
    console.log(isActivated)
    setIsActivated(false)
  }, [isActivated, setIsActivated])

  const [isVisible, setIsVisible] = useState(false);
  const switchNewItemMenu = () => {
    console.log(billInfo)
    console.log(isActivated)
    if (!isVisible){setIsVisible(true)} else {setIsVisible(false)}
  }

  return (
    <View style={styles.container}>
      <NewItem state={isVisible}/>
      <ScrollView style={styles.scrowView}>
      {billInfo.map((info) => (
            <LinearGradient start={{x: 0.1, y: -6 }} end={{x: 1.9, y: 1 }} colors={['#2B2727', '#2B2727', '#B93254']} key={info.id} style={styles.item}>
                <Text style={styles.value}>R$ {info.value}</Text>
                
                <View style={styles.infoBlocks}>
                  <Text style={[styles.blockText, {fontSize: 20}]}>{info.name}</Text>
                </View>
                <View style={styles.infoBlocks1}>
                  <TouchableOpacity style={[styles.funcButton, {position: 'absolute', left: 25}]}>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.funcButton, {position: 'absolute', left: 95}]}>

                </TouchableOpacity>
                  <Text style={styles.chargeName}>{info.payer}</Text>
                  <Text style={styles.date}>{info.date}</Text>
                </View>
                
            </LinearGradient>
        ))}

        
      </ScrollView>
      <View style={styles.homeBar}>
        <View style={{position: 'relative', left: 125}}>
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
    marginTop: 45,
    width: '90%',
    height: 80,
    borderRadius: 25     
  },
  scrowView: {
    height: '100%',
    width: '100%',
    marginBottom: 105
  },
  chargeName: {
    position: 'absolute',
    top: 40,
    color: 'gray',
    fontSize: 30,
    left: 165
  },
  value: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 35,
    color: 'gray'
  },
  date:{
    position: 'absolute',
    top: 10,
    left: 165,
    fontSize: 25,
    color: 'gray'
  },
  input1: {
    width: 300,
    height: 90,
    color: 'black',
    backgroundColor: 'white'
},
  infoBlocks:{
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    top: -30,
    left: 45,
    width: 80,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 30,  
    backgroundColor: '#231E1E'
  },
  infoBlocks1:{
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 50,
    left: 70,
    width: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 80,  
    backgroundColor: '#231E1E'
  },
  blockText: {
    color: 'gray',
    marginTop: 7,
    textAlign: 'center'
  },
  funcButton: {
    width: 40,
    top: 20,
    height: 40,
    borderRadius: '50%',
    backgroundColor: 'gray'
  }
});
