import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StackScreenProps } from '@react-navigation/stack';

// Params 타입 정의
type RootStackParamList = {
    MapScreen: {
        latitude: number;
        longitude: number;
        name: string;
    };
};

// Props 타입 정의
type MapScreenProps = StackScreenProps<RootStackParamList, 'MapScreen'>;

const MapScreen: React.FC<MapScreenProps> = ({ route }) => {
    const { latitude, longitude, name } = route.params;

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker coordinate={{ latitude, longitude }} title={name} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default MapScreen;
