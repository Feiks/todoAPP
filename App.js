import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header'; 
import TodoItem from './components/todoItem';
import AppTodo from './components/addtodo';
export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Сделать кофе', key: '1' },

    { text: 'Научиться Redux', key: '2' },

    { text: 'GYM - Sport', key: '3' },

    { text: 'drink Coffee', key: '4' },

  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter (todo=> todo.key != key);
     
      }  )
  }

  const submitHandler = (text)=> {
    setTodos((prevTodos)=> {
      return[
        {text: text, key: Math.random().toString() },
        ...prevTodos
      ];


    })
  }
  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
      console.log('dismissed Keyboard')
    }}>
    <View style={styles.container}>

      <Header />

      <View style={styles.content}>

          <AppTodo submitHandler = {submitHandler}/>

        <View style={styles.list}>

          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item  = {item} pressHandler = {pressHandler}/>
            )} 

          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    backgroundColor: 'pink',
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1, 
  }


});