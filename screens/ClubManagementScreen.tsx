import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClubManagementScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Club Management</Text>
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

export default ClubManagementScreen;
