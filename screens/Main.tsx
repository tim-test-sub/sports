import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyClubsScreen from './MyClubsScreen';
import MathedView from './MathedView';

// 내 정보 화면
function MyProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>내 정보</Text>
        </View>
    );
}


const Tab = createBottomTabNavigator();

function Main() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="클럽 정보" component={MyClubsScreen} />
                <Tab.Screen name="내 정보" component={MyProfileScreen} />
                <Tab.Screen name="내 대회" component={MathedView} />
            </Tab.Navigator>
    );
}

export default Main;
