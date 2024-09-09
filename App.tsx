import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ClubManagementScreen from './screens/ClubManagementScreen';
import TournamentManagementScreen  from './screens/TournamentManagementScreen';
import SignUpScreen from './screens/SignUpScreen.tsx';
import Main from './screens/Main.tsx';
import MyClubsScreen from './screens/MyClubsScreen.tsx';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Club Management" component={ClubManagementScreen} />
            <Stack.Screen name="Tournament Management" component={TournamentManagementScreen} />
            <Stack.Screen name="MyClubsScreen" component={MyClubsScreen} />


        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
