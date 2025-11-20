/*
 * Course: MAD201-01
 * Student: Darshilkumar Karkar(A00203357)
 * Description: React Context for managing and providing the app's theme (light/dark mode).
 */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ColorPalette, darkColors, lightColors } from './colors';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  colors: ColorPalette;
  toggleTheme: () => void;
};

// The context is created with an undefined default value.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(systemScheme || 'light');

  // Automatically update the theme if the system theme changes.
  useEffect(() => {
    setTheme(systemScheme || 'light');
  }, [systemScheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const colors = theme === 'dark' ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};