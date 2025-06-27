package com.studiesapp.nom;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.startapp.sdk.adsbase.StartAppSDK;
import com.studiesapp.nom.StartAppPlugin;

public class MainActivity extends BridgeActivity {
    @Override 
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        StartAppSDK.init(this, "205126138", false);
        registerPlugin(StartAppPlugin.class); // ← Ça !
    }
}