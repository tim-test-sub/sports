// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React , { useRef ,useState} from 'react';
import {  Animated, PanResponder, View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';  // useNavigation 추가
import { Home, Users, Trophy, User } from 'lucide-react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ClubDetailScreen from './ClubDetailScreen';
import MathedView from './MathedView';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {  Provider as PaperProvider,FAB } from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';
import FriendList from './FriendList.tsx';

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
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ],
                { useNativeDriver: false } // 두 번째 인자로 옵션 전달
            ),
            onPanResponderRelease: () => {
                pan.extractOffset();
            },
        }),
    ).current;
    return (
        <PaperProvider>
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
                        }else if (route.name === 'myFriends') {
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
                <Tab.Screen  name="myFriends" component={FriendList} />

            </Tab.Navigator>
            <Animated.View
                style={{
                    transform: [{translateX: pan.x}, {translateY: pan.y}],
                    bottom: 100,
                }}
                {...panResponder.panHandlers}>

                <TouchableOpacity style={styles.floatingbtn} onPress={()=>{console.log('hello');}}>
                    <Icons name='plus' size={30} color='white' />
                </TouchableOpacity>
            </Animated.View>
        </PaperProvider>
    );
};


const HomeScreen = () => {
    const navigation = useNavigation();  // navigation 객체 사용

    const handleClubPress = (clubId: any) => {
        // @ts-ignore
        console.log(clubId);

        //'SettingsTab', { screen: 'DetailSettings' }
        // @ts-ignore
        navigation.navigate('Clubs', {screen:'ClubDetailScreen' });  // "ClubDetail"으로 이동
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleTournaments = () => {
        // @ts-ignore
        navigation.navigate('Clubs');  // "ClubsScreen"으로 이동
    };
    // 위치를 저장할 Animated.Value 설정

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
    floatingbtn:{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        position: 'absolute',
        bottom: 5,
        right: 10,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 100,
    },

    fabGroup: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
});
export default MainScreen;

