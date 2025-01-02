import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import { useContext, useState } from "react";
import { AppContext } from "../contexts/appContext";

type stateProps = {
    state: boolean
}

export default function NewItem({state}: stateProps) {

      const {billInfo ,setBillInfo, setIsActivated} = useContext(AppContext)

      const [name, setName] = useState<string>('')
      const [payer, setPayer] = useState<string>('')
      const [value, setValue] = useState<string>('')
      const [portion, setPortion] = useState<string>('')
      const [date, setDate] = useState<string>('')
      

      const createItem = () => {
        setBillInfo([name, payer, value, portion, date])
        setIsActivated(true)
        console.log(billInfo)
      }

    return(
        
        <LinearGradient colors={['#2B2727', '#2B2727', '#B93254']} style={[styles.main, {display: state ? 'flex' : 'none'}]}>
        <TextInput
          placeholder="Nome"
          editable={true}
          style={[styles.input, {width: 300, height: 50,}]}
          placeholderTextColor="gray"
          onChangeText={setName}
        />
        <TextInput
          placeholder="Pagador"
          editable={true}
          style={[styles.input, {width: 300, height: 50,}]}
          placeholderTextColor="gray"
          onChangeText={setPayer}
        />
        <TextInput
          placeholder="Valor"
          editable={true}
          style={[styles.input, {width: 300, height: 50,}]}
          placeholderTextColor="gray"
          onChangeText={setValue}
        />
        <View style={{display: 'flex', flexDirection: 'row', width: 320, justifyContent: 'space-around'}}>
        <TextInput
          placeholder="1X"
          editable={true}
          style={[styles.input, {width: 80, height: 50,}]}
          placeholderTextColor="gray"
          onChangeText={setPortion}
        />
        <TextInput
          placeholder="dd/mm/yyyy"
          editable={true}
          style={[styles.input, {width: 200, height: 50,}]}
          placeholderTextColor="gray"
          onChangeText={setDate}
        />  
        </View>
        <TouchableOpacity onPress={createItem} style={styles.confirmButton}/>
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
        color: 'gray',
        backgroundColor: '#231F1F'
    },
    confirmButton: {
        width: 45,
        height: 45,
        borderRadius: '50%',
        backgroundColor: 'green'
    }
})

