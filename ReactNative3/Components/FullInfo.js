import { Text, View, Button,Image,StyleSheet } from 'react-native';
import {gStyles}  from '../style/style'

export default function FullInfo({route,navigation}) {
  const loadScren = ()=>{
    navigation.goBack();
  } 
  return (
    <View style={gStyles.main}>
      <Image source={
            {
              uri: route.params.img,
              width: 400, 
              height: 400
            }}
             />
      <Text style={gStyles.title}  >{route.params.name}</Text>
      <Text style={styles.title}  >{route.params.anons}</Text>
      <Text style={styles.full}  >{route.params.full}</Text>
      <Button title={'Назад'} onPress={loadScren}/>
    </View>
  );
 
}

const styles = StyleSheet.create({

  title:{
    fontFamily:'mt-bold',
    fontSize:22,
    textAlign:"center",
    marginTop:20,
    color:'#474747',
  },
  full:{
    fontFamily:'mt-light',
    fontSize:16,
    textAlign:"center",
    marginTop:20,
    color:'#474747',
  }
  });
  