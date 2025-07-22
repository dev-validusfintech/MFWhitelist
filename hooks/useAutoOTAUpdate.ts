import * as Updates from 'expo-updates';
import { useEffect } from 'react';
import { Alert, Platform } from 'react-native';

export function useAutoOTAUpdate() {
  useEffect(() => {
    const runOTA = async () => {
      try {
        if (!Updates.isEnabled || __DEV__) return;

        const update = await Updates.checkForUpdateAsync();
        console.log('[OTA] Checked for updates');

        if (update.isAvailable) {
          console.log('[OTA] Update available. Fetching...');
          await Updates.fetchUpdateAsync();
          console.log('[OTA] Update fetched. Reloading...');
          await Updates.reloadAsync();
        } else {
          console.log('[OTA] No updates found');
        }
      } catch (error) {
        console.error('[OTA] Error checking updates:', error);
        if (Platform.OS !== 'web') {
          Alert.alert('Update Error', 'Unable to check for updates.');
        }
      }
    };

    runOTA();
  }, []);
}
