import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fast.learn.english',
  appName: 'learnAnglish',
  webDir: 'dist',
  plugins: {
    LiveUpdates: {  // Notez que c'est "LiveUpdates" et non "liveUpdates"
      appId: '654159aa',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;