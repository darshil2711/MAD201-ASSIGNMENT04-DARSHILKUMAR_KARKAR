/*
 * Course: MAD201-01
 * Student: Darshilkumar Karkar(A00203357)
 * Description: Contact screen with social links.
 */

import { FontAwesome } from '@expo/vector-icons'; // Import icon library
import React from 'react';
import { Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from './theme/ThemeContext';
import { ColorPalette } from './theme/colors';
export default function ContactScreen() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Get In Touch</Text>
        <Text style={styles.subHeader}>
          I'm available for freelance work and open to new opportunities.
        </Text>
        
        {/* LinkedIn Button */}
        <TouchableOpacity 
          style={[styles.button, styles.linkedinButton]} 
          onPress={() => openLink('https://www.linkedin.com/in/darshilkumar-karkar-4605051a4/')}
        >
          <FontAwesome name="linkedin-square" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Connect on LinkedIn</Text>
        </TouchableOpacity>
        
        {/* GitHub Button */}
        <TouchableOpacity 
          style={[styles.button, styles.githubButton]} 
          onPress={() => openLink('https://github.com/darshil2711')}
        >
          <FontAwesome name="github" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Follow on GitHub</Text>
        </TouchableOpacity>

        {/* Email Section */}
        <Text style={styles.emailLabel}>Or send me an email:</Text>
        <TouchableOpacity onPress={() => openLink('mailto:darshilkarkar012@gmail.com')}>
          <Text style={styles.emailText}>darshilkarkar012@gmail.com</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: ColorPalette) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background, 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: colors.subtleText,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    // Shadow for iOS
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
  },
  linkedinButton: {
    backgroundColor: colors.linkedin,
  },
  githubButton: {
    backgroundColor: colors.github,
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  emailLabel: {
    marginTop: 30,
    fontSize: 14,
    color: colors.subtleText,
    marginBottom: 10,
  },
  emailText: {
    color: colors.primary,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});