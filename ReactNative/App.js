import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './assets/Components/Header';
import ListItem from './assets/Components/ListItem';
import Form from './assets/Components/Form';
export default function App() {
  const [listOfItems,setListOfItems] = useState([
    {text:"Купить молоко", key:"1"},
    {text:"Помыть машину", key:"2"},
    {text:"Купить картошку", key:"3"},
    {text:"Стать миллионером  ", key:"4"}
  ]);
  const addHeadler = (text)=>{
    setListOfItems((list)=>{
      return [
        {text:text, key:Math.random().toString(36).substring(7)},
        ...list,
      ];
    });
  }
  const deleteHeandler = (key)=>{
    console.log(key);
setListOfItems((list)=>{
  return list.filter(listOfItems => listOfItems.key!=key)
});
  }
  return (
    <View style={styles.main}>
      <View  style={styles.header}>
      <Header/>
    <Form addHeadler={addHeadler}/>
      </View>
      <View  style={styles.content}>
          <FlatList data={listOfItems} renderItem={({item})=>(
            <ListItem el={item} deleteHeandler={deleteHeandler}/>
          )}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:"yellow"
  },
  header:{
    flex:1,
  },
  content:{
    flex:3,
  }

});

