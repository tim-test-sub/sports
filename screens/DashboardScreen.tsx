import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface Props {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Badminton Tournament App</Text>
            <Button title="Go to Club Management" onPress={() => navigation.navigate('Club Management')} />
            <Button title="Go to Tournament Management" onPress={() => navigation.navigate('Tournament Management')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DashboardScreen;
