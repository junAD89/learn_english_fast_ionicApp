package com.studiesapp.nom;

import android.util.Log;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.JSObject;
import com.startapp.sdk.adsbase.StartAppAd;
import com.startapp.sdk.adsbase.adlisteners.AdDisplayListener;
import com.startapp.sdk.adsbase.adlisteners.AdEventListener;

@CapacitorPlugin(name = "StartApp")
public class StartAppPlugin extends Plugin {
    
    private static final String TAG = "StartAppPlugin";
    private StartAppAd startAppAd;
    private boolean isAdLoaded = false;
    
    @Override
    public void load() {
        Log.d(TAG, "=== Plugin load() called ===");
        try {
            if (getActivity() != null) {
                // Initialiser l'annonce
                startAppAd = new StartAppAd(getActivity());
                
                // Précharger immédiatement
                loadInterstitialAd();
                
                Log.d(TAG, "StartAppPlugin loaded successfully");
            } else {
                Log.e(TAG, "Activity is null in load()");
            }
        } catch (Exception e) {
            Log.e(TAG, "Error in load(): " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    /**
     * Précharge une annonce interstitielle
     */
    @PluginMethod
    public void loadInterstitial(PluginCall call) {
        Log.d(TAG, "=== loadInterstitial called ===");
        try {
            if (startAppAd != null) {
                loadInterstitialAd();
                call.resolve();
            } else {
                call.reject("StartApp ad not initialized");
            }
        } catch (Exception e) {
            Log.e(TAG, "Error loading interstitial: " + e.getMessage());
            call.reject("Error loading interstitial: " + e.getMessage());
        }
    }
    
    /**
     * Affiche une annonce interstitielle
     */
    @PluginMethod
    public void showInterstitial(PluginCall call) {
        Log.d(TAG, "=== showInterstitial called ===");
        try {
            if (startAppAd != null && getActivity() != null) {
                if (isAdLoaded) {
                    Log.d(TAG, "Showing loaded ad...");
                    
                    // Listener pour les événements de pub
                    startAppAd.showAd(new AdDisplayListener() {
                        @Override
                        public void adHidden(com.startapp.sdk.adsbase.Ad ad) {
                            Log.d(TAG, "Ad hidden - reloading for next time");
                            isAdLoaded = false;
                            loadInterstitialAd(); // Recharger pour la prochaine fois
                            call.resolve();
                        }
                        
                        @Override
                        public void adDisplayed(com.startapp.sdk.adsbase.Ad ad) {
                            Log.d(TAG, "Ad displayed successfully");
                        }
                        
                        @Override
                        public void adClicked(com.startapp.sdk.adsbase.Ad ad) {
                            Log.d(TAG, "Ad clicked");
                        }
                        
                        @Override
                        public void adNotDisplayed(com.startapp.sdk.adsbase.Ad ad) {
                            Log.e(TAG, "Ad not displayed");
                            isAdLoaded = false;
                            loadInterstitialAd(); // Recharger
                            call.reject("Ad not displayed - reloading");
                        }
                    });
                } else {
                    Log.w(TAG, "Ad not ready yet - loading now");
                    loadInterstitialAd();
                    call.reject("Ad not ready - please wait and try again");
                }
            } else {
                Log.e(TAG, "StartApp ad not initialized or activity unavailable");
                call.reject("StartApp ad not initialized");
            }
        } catch (Exception e) {
            Log.e(TAG, "Error showing interstitial: " + e.getMessage());
            call.reject("Error showing interstitial: " + e.getMessage());
        }
    }
    
    /**
     * Vérifie si une annonce est prête
     */
    @PluginMethod
    public void isAdReady(PluginCall call) {
        Log.d(TAG, "=== isAdReady called ===");
        try {
            JSObject result = new JSObject();
            result.put("ready", isAdLoaded);
            Log.d(TAG, "Ad ready status: " + isAdLoaded);
            call.resolve(result);
        } catch (Exception e) {
            Log.e(TAG, "Error checking ad status: " + e.getMessage());
            call.reject("Error checking ad status: " + e.getMessage());
        }
    }
    
    /**
     * Méthode privée pour charger une annonce
     */
    private void loadInterstitialAd() {
        if (startAppAd != null) {
            Log.d(TAG, "Loading interstitial ad...");
            
            startAppAd.loadAd(new AdEventListener() {
                @Override
                public void onReceiveAd(com.startapp.sdk.adsbase.Ad ad) {
                    Log.d(TAG, "✅ Ad loaded successfully!");
                    isAdLoaded = true;
                }
                
                @Override
                public void onFailedToReceiveAd(com.startapp.sdk.adsbase.Ad ad) {
                    Log.e(TAG, "❌ Failed to load ad: " + ad.getErrorMessage());
                    isAdLoaded = false;
                }
            });
        } else {
            Log.e(TAG, "StartAppAd is null - cannot load ad");
        }
    }
    
    @Override
    protected void handleOnDestroy() {
        Log.d(TAG, "Plugin destroyed");
        startAppAd = null;
        isAdLoaded = false;
        super.handleOnDestroy();
    }
}