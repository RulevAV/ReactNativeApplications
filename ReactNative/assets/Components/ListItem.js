import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({el,deleteHeandler}) {
  return (
    <TouchableOpacity onPress={()=>{deleteHeandler(el.key)}}>
        <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text:{
      padding:20,
      textAlign:"center",
      borderRadius:5,
      backgroundColor:"#fafafa",
      borderWidth:1,
      margin:20,
      width:'60%',
      marginLeft:"20%"
  }
});
