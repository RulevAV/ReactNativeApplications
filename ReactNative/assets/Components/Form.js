import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, View,TextInput} from 'react-native';

export default function Form({addHeadler}) {
     const [text,setValue] = useState("");
    const onChange = (text)=>{
        setValue(text);
    };
  return (
    <View>
        <TextInput 
        style={styles.input} 
        onChangeText={onChange} 
        placeholder="Впишите задачу" />
        <Button title={"Добавить задачу"} onPress={()=>addHeadler(text)}/>
    </View>
  );
}
const styles = StyleSheet.create({
 input:{
     borderBottomWidth:1,
     borderColor:"#000",
     padding:10,
     marginVertical:30,
     marginHorizontal:"20%",
     width:"60%"
 }
});
