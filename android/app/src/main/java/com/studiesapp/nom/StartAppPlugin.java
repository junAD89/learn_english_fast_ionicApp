package com.studiesapp.nom;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.startapp.sdk.adsbase.StartAppAd;
import android.util.Log;

@CapacitorPlugin(name = "StartApp")
public class StartAppPlugin extends Plugin {
    
    private StartAppAd startAppAd;
    
    @Override
    public void load() {
        Log.d("StartAppPlugin", "=== LOAD METHOD CALLED ===");
        try {
            if (getActivity() != null) {
                startAppAd = new StartAppAd(getActivity());
                Log.d("StartAppPlugin", "StartAppAd created successfully");
            } else {
                Log.e("StartAppPlugin", "Activity is null in load()");
            }
        } catch (Exception e) {
            Log.e("StartAppPlugin", "Error in load(): " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    @PluginMethod
    public void showInterstitial(PluginCall call) {
        Log.d("StartAppPlugin", "=== showInterstitial METHOD CALLED ===");
        try {
            if (startAppAd != null) { 
                Log.d("StartAppPlugin", "Showing ad...");
                startAppAd.showAd();
                call.resolve();
            } else {
                Log.e("StartAppPlugin", "startAppAd is null");
                call.reject("StartApp ad not initialized");
            }
        } catch (Exception e) {
            Log.e("StartAppPlugin", "Error showing ad: " + e.getMessage());
            call.reject("Error showing interstitial: " + e.getMessage());
        }
    }
}