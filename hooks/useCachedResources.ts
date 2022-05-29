import { FontAwesome } from '@expo/vector-icons';
import { loadAsync } from 'expo-font';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        preventAutoHideAsync();
        await loadAsync(FontAwesome.font);
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
