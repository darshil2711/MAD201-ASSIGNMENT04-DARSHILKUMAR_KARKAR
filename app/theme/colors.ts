/*
 * Course: MAD201-01
 * Student: Darshilkumar Karkar(A00203357)
 * Description: Defines the color palettes for the light and dark themes.
 */
export const lightColors = {
  primary: '#5fad56',      // moss-green
  header: '#f2c14e',       // tuscan-sun
  background: '#f9fbf8', // A very light, complementary green-white
  card: '#FFFFFF', 
  text: '#222222', // A dark color for readability
  subtleText: '#5fad56',      // moss-green
  accent: '#f2c14e',       // tuscan-sun
  border: '#e8e8e8', // A light gray for borders
  white: '#FFFFFF',
  black: '#000000',
  linkedin: '#0077B5',
  github: '#181717',
};

export const darkColors = {
  primary: '#4d9078',      // jungle-teal
  header: '#f78154',       // coral-glow
  background: '#1a2e29', // A very dark, complementary teal
  card: '#4d9078',      // jungle-teal
  text: '#f0f0f0', // A soft off-white
  subtleText: '#f2c14e',      // tuscan-sun
  accent: '#f78154',       // coral-glow
  border: '#4d9078',      // jungle-teal
  white: '#FFFFFF',
  black: '#000000',
  linkedin: '#0077B5',
  github: '#181717',
};

export type ColorPalette = typeof lightColors;