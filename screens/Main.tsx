import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';  // useNavigation 추가
import { Home, Users, Trophy, User } from 'lucide-react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ClubDetailScreen from './ClubDetailScreen';
import MathedView from './MathedView';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ClubsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ClubMain" component={ClubsScreen} />
            <Stack.Screen name="ClubDetailScreen" component={ClubDetailScreen} />
        </Stack.Navigator>
    );
};

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
            <Tab.Screen name="Clubs" component={ClubDetailScreen} />
            <Tab.Screen name="Tournaments" component={MathedView} />
            <Tab.Screen  name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const HomeScreen = () => {
    const navigation = useNavigation();  // navigation 객체 사용

    const handleClubPress = (clubId: any) => {
        // @ts-ignore
        console.log(clubId);
        // @ts-ignore
        navigation.navigate('ClubDetailScreen', { clubId });  // "ClubDetail"으로 이동
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleTournaments = () => {
        // @ts-ignore
        navigation.navigate('Clubs');  // "ClubsScreen"으로 이동
    };
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
                            <TouchableOpacity key={i} onPress={() => handleClubPress(i)}>
                                <View style={styles.clubItem}>
                                    <View style={styles.clubAvatar} />
                                    <Text style={styles.clubName}>Club {i}</Text>
                                </View>
                            </TouchableOpacity>
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
    // 추가된 screenTitle 스타일
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
export default MainScreen;
