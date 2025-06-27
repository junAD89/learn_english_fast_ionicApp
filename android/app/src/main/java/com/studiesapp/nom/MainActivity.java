package com.studiesapp.nom;

import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.startapp.sdk.adsbase.StartAppSDK;
import com.studiesapp.nom.StartAppPlugin;

public class MainActivity extends BridgeActivity {
    
    @Override
    public void onCreate(Bundle savedInstanceState) {
        Log.d("MainActivity", "=== BEFORE plugin registration ===");
        
        // ENREGISTRER LE PLUGIN EN PREMIER
        registerPlugin(StartAppPlugin.class);
        Log.d("MainActivity", "Plugin registered BEFORE super.onCreate");
        
        // PUIS appeler super.onCreate()
        super.onCreate(savedInstanceState);
        Log.d("MainActivity", "super.onCreate() called");
        
        // ENFIN initialiser StartApp
        StartAppSDK.init(this, "205126138", false);
        Log.d("MainActivity", "StartApp SDK initialized");
        
        Log.d("MainActivity", "=== MainActivity complete ===");
    }
}