import type { CapacitorConfig } from '@capacitor/cli';



const config: CapacitorConfig = {
  appId: 'com.studiesapp.nom',
  appName: 'FastEnglish',
  webDir: 'dist',
  plugins: {
    LiveUpdates: {  // Notez que c'est "LiveUpdates" et non "liveUpdates"
      appId: 'e4c57dff',
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