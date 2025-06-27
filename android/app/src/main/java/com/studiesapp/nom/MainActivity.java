package com.studiesapp.nom;

import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.startapp.sdk.adsbase.StartAppSDK;
import com.studiesapp.nom.StartAppPlugin;

public class MainActivity extends BridgeActivity {
    
    private static final String TAG = "MainActivity";
    
    @Override
    public void onCreate(Bundle savedInstanceState) {
        Log.d(TAG, "=== MainActivity onCreate START ===");
        
        try {
            // 1. ENREGISTRER LE PLUGIN EN PREMIER
            registerPlugin(StartAppPlugin.class);
            Log.d(TAG, "✅ StartAppPlugin registered successfully");
            
            // 2. APPELER super.onCreate()
            super.onCreate(savedInstanceState);
            Log.d(TAG, "✅ super.onCreate() completed");
            
            // 3. INITIALISER StartApp SDK
            StartAppSDK.init(this, "205126138", false);
            Log.d(TAG, "✅ StartAppSDK initialized with App ID: 205126138");
            
        } catch (Exception e) {
            Log.e(TAG, "❌ Error in MainActivity onCreate: " + e.getMessage());
            e.printStackTrace();
        }
        
        Log.d(TAG, "=== MainActivity onCreate COMPLETE ===");
    }
    
    @Override
    public void onResume() {  // ← PUBLIC au lieu de protected
        super.onResume();
        Log.d(TAG, "MainActivity resumed");
    }
    
    @Override
    public void onPause() {   // ← PUBLIC au lieu de protected
        super.onPause();
        Log.d(TAG, "MainActivity paused");
    }
}