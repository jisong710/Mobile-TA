import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Antisipasi1 from '../assets/RFA2.svg';

const InformasiPenting = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 1 </Text>
      </View>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 2 </Text>
      </View>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 3 </Text>
      </View>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 4 </Text>
      </View>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 5 </Text>
      </View>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 6 </Text>
      </View>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 7 </Text>
      </View>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 8 </Text>
      </View>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 9 </Text>
      </View>
      <View style={styles.card}>
          <Antisipasi1 style={styles.card.picture} />
           </View>
      <View style={styles.card1}>
      <Text style={styles.text}> Sensor 10 </Text>
      </View>
    </View>
    </ScrollView>
    
  );
};

export default InformasiPenting;

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#EEF2F5',
    marginHorizontal: 30,
    marginTop: 20,
    width: 312,
    height:142,
    alignItems: 'center',
    paddingVertical: 30,
    borderTopLeftRadius:15,
    borderTopRightRadius: 15, 

    picture : {
      
    }


    
          
  },
  card1: {
    backgroundColor: '#0E1539',
    marginHorizontal: 30,
    width: 312,
    height: 50,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 8,
    
 
    },
  text: {
    fontSize:16,
    color: '#FFFFFF',
    paddingVertical: 13,
    paddingHorizontal: 10,

   
    

  },

    


})

