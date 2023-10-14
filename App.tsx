import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';
import {AppNavigator} from './src/components/Navigator';
import {default as theme} from './theme.json'; // <-- Import app theme
// import {Camera} from 'react-native-vision-camera';
// import {Linking} from 'react-native';

export default function App(): JSX.Element {
  // useEffect(() => {
  //   async function getPermission() {
  //     const permission = await Camera.requestCameraPermission();
  //     console.log(`Camera permission status: ${permission}`);
  //     if (permission === 'denied') {
  //       await Linking.openSettings();
  //     }
  //   }
  //   getPermission();
  // }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
}
