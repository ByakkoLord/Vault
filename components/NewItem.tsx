import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

export default function NewItem() {
    return(
        
        <View style={styles.main}>
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

