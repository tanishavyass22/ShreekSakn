import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const MapScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocationPermission = async () => {
      const permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (permissionStatus === RESULTS.GRANTED) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLocation(position.coords);
          },
          error => console.log(error),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      } else {
        await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }
    };

    getLocationPermission();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {location ? (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={location} />
        </MapView>
      ) : (
        <Text style={{marginTop:100}}>Loading location...</Text>
      )}
    </View>
  );
};

export default MapScreen;
