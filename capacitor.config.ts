import type { CapacitorConfig } from '@capacitor/cli';
import { LiveUpdateConfig } from '@capacitor/live-updates';

// Étendre l'interface CapacitorConfig pour inclure liveUpdates
interface MyCapacitorConfig extends CapacitorConfig {
  liveUpdates: LiveUpdateConfig;
}

const config: MyCapacitorConfig = {
  appId: 'com.studiesapp.nom',
  appName: 'learnAnglish',
  webDir: 'dist',
  // Déplacer LiveUpdates hors des plugins
  liveUpdates: {
    appId: 'com.studiesapp.nom',
    channel: 'Production',
    autoUpdateMethod: 'background',
    maxVersions: 2
  },
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_myicon',
      iconColor: '#488AFF',
      sound: 'beep.wav',
    }
  }
};

export default config;