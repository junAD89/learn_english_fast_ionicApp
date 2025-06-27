package com.studiesapp.nom;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;  
import com.startapp.sdk.adsbase.StartAppSDK;  


public class MainActivity extends BridgeActivity {
    @Override 
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);

        // init start io sdk
        StartAppSDK.init(this, "205126138", false);
    }
}