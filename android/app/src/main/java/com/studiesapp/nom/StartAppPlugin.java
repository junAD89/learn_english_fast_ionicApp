package com.studiesapp.nom;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.startapp.sdk.adsbase.StartAppAd;

@CapacitorPlugin(name = "StartApp")
public class StartAppPlugin extends Plugin {
    
    private StartAppAd startAppAd;
    
    @Override
    public void load() {
        startAppAd = new StartAppAd(getActivity());
    }
    
  @PluginMethod
public void showInterstitial(PluginCall call) {
    try {
        if (startAppAd != null) { 
            startAppAd.showAd();
            call.resolve();
        } else {
            call.reject("StartApp ad not initialized");
        }
    } catch (Exception e) {
        call.reject("Error showing interstitial: " + e.getMessage());
    }
}
}