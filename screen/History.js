import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react'
import { Table, Row, Rows } from 'react-native-table-component';

export default function History() {
    
    const [state,setstate]=useState({
        tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
        tableData: [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
          ['1', '2', '3', '456\n789'],
          ['a', 'b', 'c', 'd'],
          ['a', 'b', 'c', 'd'],
        ]
      }
  );
  const hist = async () => {
    try {
      const response = await fetch(
        'link buat history nya'
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });