import type { CapacitorConfig } from '@capacitor/cli';
import { LiveUpdateConfig } from '@capacitor/live-updates';

interface MyCapacitorConfig extends CapacitorConfig {
  liveUpdates: LiveUpdateConfig;
}

const config: MyCapacitorConfig = {
  appId: 'fast.learn.english',
  appName: 'learnAnglish',
  webDir: 'dist',
  liveUpdates: {
    appId: '654159aa',
    channel: 'Production',
    autoUpdateMethod: 'background',
    maxVersions: 2
  }
};

export default config;
