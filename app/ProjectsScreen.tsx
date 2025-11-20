/*
 * Course: MAD201-01
 * Student: Darshilkumar Karkar(A00203357)
 * Description: Projects screen logic.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Define the shape of a Project object
interface Project {
  id: string;
  title: string;
  description: string;
}

// Sample Data
const projectData: Project[] = [
  { id: '1', title: 'Personal Portfolio', description: 'React Native app demonstrating Flexbox and Navigation.' },
  { id: '2', title: 'Weather App', description: 'Fetches live weather data using an API.' },
  { id: '3', title: 'Budget Tracker', description: 'Cross-platform app with SQLite integration.' },
  { id: '4', title: 'Unreal Game', description: 'First-person shooter prototype built in UE5.' },
];

export default function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <Text>Project List Coming Soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});