/*
 * Course: MAD201-01
 * Student: Darshilkumar Karkar(A00203357)
 * Description: A reusable UI component for toggling between light and dark themes.
 */
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { useTheme } from './ThemeContext';

export const ThemeSwitch = () => {
  const { theme, toggleTheme, colors } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <View style={styles.container}>
      <FontAwesome name="sun-o" size={20} color={colors.white} />
      <Switch
        trackColor={{ false: '#767577', true: '#8D6E63' }}
        thumbColor={isDarkMode ? colors.accent : '#f4f3f4'}
        onValueChange={toggleTheme}
        value={isDarkMode}
        style={styles.switch}
      />
      <FontAwesome name="moon-o" size={20} color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginRight: 15 },
  switch: { marginHorizontal: 5 },
});