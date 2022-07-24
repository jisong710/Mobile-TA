import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import Icon from '../assets/history.svg';



const GempaTerkini = ({ navigation }) => {
  const [data, setdata] = useState([]);
  const [cuaca, setcuaca] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json')
      .then(json => json.json())
      .then(res => {
        setdata(res.Infogempa.gempa);
      });
    fetch(
      'https://peta-maritim.bmkg.go.id/public_api/pelabuhan/0107_Cirebon.json',
    )
      .then(json => json.json())
      .then(res => {
        setcuaca(res.data[0].weather);
      });
    // var date = new Date().getDate(); //Current Date
    // var month = new Date().getMonth() + 1; //Current Month
    // var year = new Date().getFullYear(); //Current Year
    //var date = moment().format("DD MMM YYYY");
    // setCurrentDate(
    //  date + ''
    // );
  }, []);

  return (
    <View style={styles.backgroud}>


      <View style={styles.card4}>
        <Icon style={styles.iconstyel} />
        <View>
          <Text style={styles.text3}>HISTORY</Text>
          <Text style={styles.text4}>Data Gempa Terkini</Text>
        </View>
        <View style={{ width: 10, }} />
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            navigation.navigate('History');
          }}>
          <Text style={styles.ButtonText}>Lihat</Text>
        </TouchableOpacity>

      </View>
      <ScrollView>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{ flexDirection: 'row' }}
              onPress={() => {
                navigation.navigate('LokasiGempa');
              }}>
              <View style={styles.card2}>
                <Text style={styles.card2.text}>{item.Magnitude} SR</Text>
              </View>
              <View style={styles.card3}>
                <Text style={styles.card3.text2}>{item.Wilayah}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.card3.text1}>{item.Tanggal}</Text>
                  <Text style={styles.card3.text1}>{item.Jam}</Text>
                </View>
                <Text style={styles.card3.text2}>
                  Kedalaman : {item.Kedalaman}
                </Text>
                <Text style={styles.card3.text2}>{item.Potensi}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default GempaTerkini;

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: 140,
    // backgroundColor: '#273B69',
    borderRadius: 10,
    marginBottom: 7,

    text: {
      fontSize: 37,
      color: '#111111',
      marginLeft: 15,
      fontWeight: 'bold',
    },
  },
  text: {
    fontSize: 16,
    color: '#111111',
    marginLeft: 10,
  },
  text2: {
    marginTop: 20,
    fontSize: 16,
    color: '#111111',
    marginLeft: 10,
  },
  card2: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 75,
    height: 90,
    backgroundColor: '#0E1539',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 8,
    alignSelf: 'flex-start',
    marginLeft: 10,
    justifyContent: 'center',
    text: {
      fontSize: 18,
      color: '#C4C4C4',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
  card3: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: 230,
    height: 90,
    backgroundColor: '#C4C4C4',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 8,
    alignSelf: 'flex-start',
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    text1: {
      marginRight: 3,
      fontSize: 12,
      color: '#000000',
    },
    text2: {
      fontSize: 12,
      color: '#000000',
    },
  },
  card4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#C4C4C4',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  Button: {
    backgroundColor: '#273B69',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 30,
    alignItems: 'center',

  },
  ButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  iconstyel: {
    marginVertical: 12,
    marginLeft: 18,
  },
  text3: {
    fontSize: 20,
    color: '#000000',
  },
});
