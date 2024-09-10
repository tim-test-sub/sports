import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Users, Trophy, User } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon;
                        if (route.name === 'Home') {
                            icon = <Home size={size} color={color} />;
                        } else if (route.name === 'Clubs') {
                            icon = <Users size={size} color={color} />;
                        } else if (route.name === 'Tournaments') {
                            icon = <Trophy size={size} color={color} />;
                        } else if (route.name === 'Profile') {
                            icon = <User size={size} color={color} />;
                        }
                        return icon;
                    },
                    tabBarActiveTintColor: '#1E88E5',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { backgroundColor: '#ffffff' },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Clubs" component={ClubsScreen} />
                <Tab.Screen name="Tournaments" component={TournamentsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
    );
};

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Featured Tournaments</Text>
                    <View style={styles.carouselPlaceholder}>
                        <Text>Carousel Placeholder</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Popular Clubs</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {[1, 2, 3, 4, 5].map(i => (
                            <View key={i} style={styles.clubItem}>
                                <View style={styles.clubAvatar} />
                                <Text style={styles.clubName}>Club {i}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>
                    {[1, 2, 3].map(i => (
                        <View key={i} style={styles.activityItem}>
                            <Text>Activity {i} summary</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const ClubsScreen = () => (
    <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Clubs</Text>
        <Text>Clubs content goes here</Text>
    </View>
);

const TournamentsScreen = () => (
    <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Tournaments</Text>
        <Text>Tournaments content goes here</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>My Profile</Text>
        <Text>Profile content goes here</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    section: {
        marginBottom: 20,
        padding: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    carouselPlaceholder: {
        height: 150,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    clubItem: {
        marginRight: 15,
        alignItems: 'center',
    },
    clubAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ddd',
        marginBottom: 5,
    },
    clubName: {
        fontSize: 12,
    },
    activityItem: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default MainScreen;
