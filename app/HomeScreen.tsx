/*
 * Course: MAD201-01
 * Student: Darshilkumar Karkar(A00203357)
 * Description: Home screen displaying profile and bio.
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from './_layout';
import { useTheme } from './theme/ThemeContext';
import { ColorPalette } from './theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Image Placeholder */}
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO36HQLxnHwrjPBPzTDnwViZdr24GaFEPISQ&s '}} 
        style={styles.profileImage} 
      />
      
      <Text style={styles.name}>Darshilkumar Karkar</Text>
      <Text style={styles.bio}>
        Student at Canadore College. Passionate about Mobile Dev and Unreal Engine.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Projects')}
      >
        <Text style={styles.buttonText}>View My Projects</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]} 
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>Contact Me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const getStyles = (colors: ColorPalette) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: colors.card,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  bio: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
    color: colors.subtleText,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButtonText: {
    color: colors.primary,
  },
});