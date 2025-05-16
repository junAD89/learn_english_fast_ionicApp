import type { CapacitorConfig } from '@capacitor/cli';



const config: CapacitorConfig = {
  appId: 'com.studiesapp.nom',
  appName: 'FastEnglish',
  webDir: 'dist',
  plugins: {

    LocalNotifications: {
      smallIcon: 'ic_stat_myicon',
      iconColor: '#488AFF',
      sound: 'beep.wav',
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  }
};

export default config;