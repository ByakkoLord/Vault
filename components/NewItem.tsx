import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import { useState } from "react";

type stateProps = {
    state: boolean
}

export default function NewItem({state}: stateProps) {
    

    return(
        
        <View style={[styles.main, {display: state ? 'flex' : 'none'}]}>
        <TextInput
          placeholder="Name"
          editable={true}
          style={styles.input1}
          placeholderTextColor="gray"
        />
      </View>
        
    )
    
}
const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        backgroundColor: 'black',
        width: 350,
        top: 10,
        height: 600,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        zIndex: 100
    },
    input1: {
        position: 'absolute',
        width: 300,
        height: 90,
        color: 'black',
        backgroundColor: 'white'
    }
})

