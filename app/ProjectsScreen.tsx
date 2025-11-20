/*
 * Course: MAD201-01
 * Student: Darshilkumar Karkar(A00203357)
 * Description: Projects screen logic.
 */

import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from './theme/ThemeContext';
import { ColorPalette } from './theme/colors';

// Define the structure for a project item
type Project = {
  id: string;
  title: string;
  description: string;
};

// Sample data for the projects list
const projectData: Project[] = [
  {
    id: '1',
    title: 'Portfolio App',
    description: 'A React Native application to showcase my work and skills.',
  },
  {
    id: '2',
    title: 'Game Prototype',
    description: 'A 2D platformer game developed using Unreal Engine.',
  },
];

export default function ProjectsScreen() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  // Render function for each item
  const renderProject = ({ item }: { item: Project }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      {/* This button is clickable but has no action, as per assignment requirements. */}
      <TouchableOpacity style={styles.badge} onPress={() => {}} activeOpacity={0.6}>
        <Text style={styles.badgeText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Work</Text>
      <FlatList<Project>
        data={projectData}
        keyExtractor={(item) => item.id}
        renderItem={renderProject}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const getStyles = (colors: ColorPalette) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
    marginTop: 10,
    color: colors.text,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
    // Shadow for iOS
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.text,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.subtleText,
    marginBottom: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary + '20', // primary color with low opacity
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  badgeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
});
