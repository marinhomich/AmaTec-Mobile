import React from 'react';
import {NativeModules, Button} from 'react-native';

const NewModuleButton = () => {
  const {It4rModule} = NativeModules;

  const onPress = () => {
    It4rModule.printEvent();
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
