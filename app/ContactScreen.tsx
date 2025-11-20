/*
 * Course: MAD201-01
 * Student: Darshilkumar Karkar(A00203357)
 * Description: Contact screen with social links.
 */

import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ContactScreen() {
  
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Get In Touch</Text>
      
      <View style={styles.contactRow}>
        <TouchableOpacity style={styles.linkButton} onPress={() => openLink('https://linkedin.com')}>
           <Text style={styles.linkText}>LinkedIn</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.linkButton} onPress={() => openLink('https://github.com')}>
           <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailText}>student@canadore.ca</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  linkButton: {
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emailButton: {
    marginTop: 20,
    padding: 10,
  },
  emailText: {
    color: '#2196F3',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});