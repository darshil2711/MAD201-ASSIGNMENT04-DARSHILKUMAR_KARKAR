/*
 * Course: MAD201-01
 * Student: Darshilkumar Karkar(A00203357)
 * Description: Main entry point setup with Stack Navigation.
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ContactScreen from './ContactScreen';
import HomeScreen from './HomeScreen';
import ProjectsScreen from './ProjectsScreen';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import { ThemeSwitch } from './theme/ThemeSwitch';

export type RootStackParamList = {
  Home: undefined;
  Projects: undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: colors.header },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
        headerRight: () => <ThemeSwitch />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Portfolio' }}/>
      <Stack.Screen name="Projects" component={ProjectsScreen} options={{ title: 'Projects' }}/>
      <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact Me' }}/>
    </Stack.Navigator>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}