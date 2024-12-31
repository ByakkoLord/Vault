import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import { useState } from "react";

type stateProps = {
    state: boolean
}

export default function NewItem({state}: stateProps) {
    

    return(
        
        <LinearGradient colors={['#2B2727', '#2B2727', '#B93254']} style={[styles.main, {display: state ? 'flex' : 'none'}]}>
        <TextInput
          placeholder="Nome"
          editable={true}
          style={[styles.input, {width: 300, height: 50,}]}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Pagador"
          editable={true}
          style={[styles.input, {width: 300, height: 50,}]}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Valor"
          editable={true}
          style={[styles.input, {width: 300, height: 50,}]}
          placeholderTextColor="gray"
        />
        <View style={{display: 'flex', flexDirection: 'row', width: 320, justifyContent: 'space-around'}}>
        <TextInput
          placeholder="1X"
          editable={true}
          style={[styles.input, {width: 80, height: 50,}]}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="dd/mm/yyyy"
          editable={true}
          style={[styles.input, {width: 200, height: 50,}]}
          placeholderTextColor="gray"
        />  
        </View>
        <TouchableOpacity style={styles.confirmButton}/>
      </LinearGradient>
      
        
    )
    
}
const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        backgroundColor: 'black, white',
        width: 350,
        top: 100,
        height: 330,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        zIndex: 100
    },
    input: {
        paddingLeft: 20,
        marginTop: 25,
        borderRadius: 10,
        fontSize: 20,
        color: 'black',
        backgroundColor: '#231F1F'
    },
    confirmButton: {
        width: 45,
        height: 45,
        borderRadius: '50%',
        backgroundColor: 'green'
    }
})

