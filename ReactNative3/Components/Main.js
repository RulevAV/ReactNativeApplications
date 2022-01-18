import { useState } from 'react';
import { Text, View, Button, FlatList,TouchableOpacity,Image,StyleSheet, Modal } from 'react-native';
import {gStyles}  from '../style/style'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Form from './Form';
export default function Main({navigation}) {
  const loadScren = ()=>{
    navigation.navigate('Contacts');
  } 
  const [news,setNews] = useState([
    {name:'Google', anons:"Google!!!", full:"Google is cool", key:"1", img:'https://avatars.mds.yandex.net/get-zen_doc/1950904/pub_5ede3f86e1a0c07e00fd3023_5edf83fd5c986c462f5273a1/scale_1200'},
    {name:'Apple', anons:"Apple!!!", full:"Apple is cool", key:"2", img:'https://avatars.mds.yandex.net/get-zen_doc/30884/pub_5c380ac35c17e000a9861d68_5c382f17561f7a00aa62eef2/scale_1200'},
    {name:'FaceBook', anons:"FaceBook!!!", full:"FaceBook is cool", key:"3", img:'https://proprikol.ru/wp-content/uploads/2020/10/kartinki-ogon-i-voda-32.jpg'}
  ]);
  const [modalWindow,setModalWindow]= useState(false);

  const addArticle = (article) =>{
      setNews((list)=>{
        article.key=Math.round().toString();
        return [
          article,
          ...list
        ]
      })
      setModalWindow(false);
  }
  return (
    <View style={gStyles.main}>
      <Modal visible={modalWindow}>
        <View style={gStyles.main}>
          <AntDesign name="closecircle" size={24} color="red" style={styles.iconClose} onPress={()=>setModalWindow(false)}/>
          <Text>Форма добавления строки</Text>
          <Form addArticle={addArticle}/>
        </View>
      </Modal>

      <Ionicons name="add-circle-sharp" size={24} color="green" style={styles.iconAdd} onPress={()=>setModalWindow(true)}/>
      <Text style={[gStyles.title,styles.header]}  >Главная страница</Text>
      <FlatList data={news} renderItem={({item})=>(
         <TouchableOpacity onPress={()=> navigation.navigate('FullInfo',item)}>
          <Image source={
            {
              uri: item.img,
              width: 400, 
              height: 400
            }}
             />

          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.anons}>{item.anons}</Text>
        </TouchableOpacity>
      )
       
      } />
    </View>
  );
 
}
const styles = StyleSheet.create({
  iconClose:{
    textAlign:'center',
  },
  iconAdd:{
    textAlign:'center',
    marginBottom:15
  },
  header:{
    marginBottom:30
  },
  item :{
   width:'100%',
   marginBottom:30,
  },
  title:{
    fontFamily:'mt-bold',
    fontSize:22,
    textAlign:"center",
    marginTop:20,
    color:'#474747',
  },
  anons:{
    fontFamily:'mt-light',
    fontSize:16,
    textAlign:"center",
    marginTop:20,
    color:'#474747',
  }
  });
  

