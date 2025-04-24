import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.studiesapp.nom',
  appName: 'learnAnglish',
  webDir: 'dist',
  plugins: {
    LiveUpdates: {  // Notez que c'est "LiveUpdates" et non "liveUpdates"
      appId: 'com.studiesapp.nom',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    },
    LocalNotifications: {
      smallIcon: 'ic_stat_myicon',
      iconColor: '#488AFF',
      sound: 'beep.wav',
    }
  }
};

export default config;