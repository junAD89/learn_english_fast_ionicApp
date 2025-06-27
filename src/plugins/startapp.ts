import { registerPlugin } from "@capacitor/core";

export interface StartAppPlugin {
    showInterstitial(): Promise<void>;
}

const StartApp = registerPlugin<StartAppPlugin>('StartApp');

export default StartApp;