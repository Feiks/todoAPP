import React from 'react';
import { useState } from 'react';
import { Button, FlatList, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function AppTodo({submitHandler}) {
    const[text, setText] = useState(' ');
      const changeHandler =(val)=> {
            setText(val);
    }
    
    return(
        <View>
                <TextInput 
                style= {styles.Input}
                placeholder ='Что мне сделать... '
                onChangeText = {changeHandler }/>

                <Button  onPress={()=> submitHandler(text)} title = 'Добавить' color = 'coral' />
                    







        </View>




    );




}

const styles = StyleSheet.create({
    Input: {
        marginBottom: 10,
        paddingHorizontal: 8 ,
        paddingVertical: 6,
        borderBottomWidth: 1,
     borderColor: 'red'

    }


})