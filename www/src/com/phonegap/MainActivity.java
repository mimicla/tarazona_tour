package com.mimicla.TarazonaTour;

import com.phonegap.*;

import android.os.Bundle;

public class MainActivity extends DroidGap {

@Override

public void onCreate(Bundle savedInstanceState) {

super.onCreate(savedInstanceState);

super.setIntegerProperty("splashscreen", R.drawable.splash); // Display splash screen for android
super.setIntegerProperty("loadUrlTimeoutValue", 60000);
super.loadUrl("file:///www/index.html",10000);// Give max time here

}

}
