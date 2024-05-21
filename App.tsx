import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/style/theme';
import Navigation from './src/navigation';
import useCachedResources from './src/helpers/useCachedResources';

import './src/translations/i18n';

export default function App() {
  const { isLoadingComplete, fontsLoaded } = useCachedResources();

  if (!isLoadingComplete || !fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
        <StatusBar />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
