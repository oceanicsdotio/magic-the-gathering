// Modifies the device top status (e.g. clock, wifi)
import { StatusBar } from 'expo-status-bar';

// Pre-calculate area inside notches and touch areas
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Hooks
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

// Components
import Navigation from './components/Navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar hidden={true}/>
      </SafeAreaProvider>
    );
  }
}
