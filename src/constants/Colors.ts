/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },

  primary: '#3B82F6',
  primaryVariant: '#2563EB',
  secondary: '#F59E42',
  secondaryVariant: '#FBBF24',
  background: '#181A20', // dark background
  surface: '#23262F', // card background
  error: '#EF4444',
  onPrimary: '#FFFFFF',
  onSecondary: '#1F2937',
  onBackground: '#FFFFFF',
  onSurface: '#E5E7EB',
  onError: '#FFFFFF',
  border: '#353945',
  shadow: 'rgba(0,0,0,0.16)',
};
