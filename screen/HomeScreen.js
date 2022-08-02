import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  LineChart
} from "react-native-chart-kit";
import IconProfil from '../assets/profile.svg';

import { getData } from '../utils';
import moment from 'moment';

const HomeScreen = ({ navigation }) => {
  const [name, setname] = useState('');
  const [currentDate, setCurrentDate] = useState(moment().format("DD MMM YYYY"));
  useEffect(() => {
    getData('token').then(token => {
      fetch('http://20.205.61.111/api/profile', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token.value,
        },
      })
        .then(json => json.json())
        .then(res => {
          setname(res.data.name);
        })
        .catch(err => {
          console.log(err);
        });

    });
  }, []);
  const kejadian = async () => {
    try {
      const response = await fetch('yang penting link buat kejadian nya', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      return json.teks;
    } catch (error) {
      console.error(error);
    }
  };
  const antisipasi1 = async () => {
    try {
      const response = await fetch('yang penting link buat kejadian nya', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      return json.teks;
    } catch (error) {
      console.error(error);
    }
  };
  const antisipasi2 = async () => {
    try {
      const response = await fetch('yang penting link buat kejadian nya', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      return json.teks;
    } catch (error) {
      console.error(error);
    }
  };
  const antisipasi3 = async () => {
    try {
      const response = await fetch('yang penting link buat kejadian nya', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      return json.teks;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.backgroud}>
      <View style={{ flexDirection: 'row', marginTop: 20 }} >

        <IconProfil width={32} height={36} style={{ color: '#EEF2F5' }} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text}>Hai,</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
      <ScrollView horizontal={true} decelerationRate={0} bounces={true} style={{ padding: 10, }}>
        <View style={styles.card}>
          <LineChart 
          data ={antisipasi1}
          style={styles.card.picture}/>
          <Text style={styles.card.text}>
            Random Forest Algorithm
          </Text>
        </View>
        <View style={styles.card}>
        <LineChart
        data ={antisipasi2}
        style={styles.card.picture}/>
          <Text style={styles.card.text}>
            Naive Bayes Algorithm
          </Text>
        </View>
        <View style={styles.card}>
        <LineChart
        data ={antisipasi3}
        style={styles.card.picture}/>
          <Text style={styles.card.text}>
            Super Vector Machine Algorithm
          </Text>
        </View>
      </ScrollView>
      <View style={styles.card2}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.card2.text}>{kejadian.toString}</Text>
            <Text style={styles.card2.text2}>{currentDate}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.Button.ButtonStyle}
          onPress={() => {
            navigation.navigate('LokasiGempa');
          }}>
          <Text style={styles.Button.ButtonText}>Evakuasi</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.card3}
        onPress={() => {
          navigation.navigate('InformasiPenting');
        }}>
        <Text style={styles.card3.text}>Status Sensor</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,

    paddingHorizontal: 15,
    backgroundColor: '#273B69',
  },
  card: {
    justifyContent: 'center',
    width: 162,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#EEF2F5',
    marginRight: 15,

    picture: {
      marginTop: 10,
      alignSelf: 'center',
      height: 95,
      width: 85,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    text: {
      paddingHorizontal: 15,
      marginTop: 7,
      textAlign: 'center',
      fontSize: 14,
      color: '#535E79',
      marginLeft: 7,
    },
  },
  text: {
    fontSize: 14,
    color: '#EEF2F5',
    marginLeft: 7,
  },
  card2: {
    paddingVertical: 10,
    paddingHorizontal: 20,

    width: '90%',
    backgroundColor: '#EEF2F5',
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    text: {
      fontSize: 20,
      color: '#535E79',

    },
    text2: {
      fontSize: 13,
      color: '#000000',

      fontWeight: 'normal',
    },

  },
  card3: {
    width: '90%',
    height: 50,
    backgroundColor: '#0E1539',
    alignSelf: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 100,
    paddingHorizontal: 20,
    text: {
      paddingVertical: 10,
      fontSize: 18,
      color: '#FFFFFF',
      marginLeft: 7,
    },
  },
  Button: {
    ButtonStyle: {
      alignSelf: 'flex-end',
      width: 160,
      backgroundColor: '#273B69',
      borderRadius: 20,
      paddingVertical: 10,
      marginTop: 10,
      alignItems: 'center',
    },
    ButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    },
  },
});
