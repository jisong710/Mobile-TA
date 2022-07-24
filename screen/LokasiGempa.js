import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LokasiGempa = () => {
  return (
    <View style={styles.backgroud}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: -6.973763772586012,
          longitude: 107.63046967155731,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: -6.973763772586012,
            longitude: 107.63046967155731,
          }}></Marker>
        <Marker
          coordinate={{
            latitude: -6.980472659687391,
            longitude: 107.6349755,
          }}></Marker>
        <Marker
          coordinate={{
            latitude: -6.9657602192826324,
            longitude: 107.63861727179004,
          }}></Marker>
      </MapView>
    </View>
  );
};

export default LokasiGempa;

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    alignItems: 'center',
  },
  maps: {
    width: '100%',
    height: '100%',
  },
});