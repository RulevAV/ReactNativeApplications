import React from 'react';
import { Text, View, Button,Image,StyleSheet,TextInput } from 'react-native';
import {gStyles}  from '../style/style'
import { Formik } from "formik";

export default function Form({addArticle}) {
 
  return (
    <View>
        <Formik initialValues={{name:"",anons:"",full:"",img:""}} onSubmit={(values)=>{
            addArticle(values);
        }}>
            {(props) => (
                <View>
                    <TextInput
                    style={styles.input} 
                    value={props.values.name} 
                    placeholder='Введите название' 
                    onChangeText={props.handleChange('name')}/>
                    <TextInput 
                     style={styles.input} 
                    multiline 
                    value={props.values.anons} 
                    placeholder='Введите анонс'
                     onChangeText={props.handleChange('anons')}/>
                    <TextInput 
                     style={styles.input} 
                    multiline 
                    value={props.values.full} 
                    placeholder='Введите статью'
                    onChangeText={props.handleChange('full')}/> 
                    
                    <TextInput 
                     style={styles.input} 
                    value={props.values.img} 
                    placeholder='Введите картинку' 
                    onChangeText={props.handleChange('img')}/>
                    
                    <Button style={styles.buttom}  title='Добавить' onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        marginTop:15,
        padding:15,
        borderColor:"silver",
        borderRadius:5
    },
    buttom:{
        marginTop:15,
    }
  });
  
