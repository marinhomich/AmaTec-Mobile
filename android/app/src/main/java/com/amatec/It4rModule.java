package com.amatec;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import br.com.itfast.tectoy.Dispositivo;
import br.com.itfast.tectoy.TecToy;
import android.util.Log;

public class It4rModule extends ReactContextBaseJavaModule {
    private TecToy tecToy;


    It4rModule(ReactApplicationContext context) {
        super(context);
        tecToy = new TecToy(Dispositivo.K2_MINI, context);

    }

    @Override
    public String getName() {
        return "It4rModule";
    }

     @ReactMethod
     public void printEvent() {
         tecToy.imprimir("txt");
     }


//    @ReactMethod
//    public void printEvent() {
//        Log.d("printEvent", "tecToy" );
//    }
}