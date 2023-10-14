import {Button, Layout, Text} from '@ui-kitten/components';
import {useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useProductStore} from '../lib/zustand';

export default function AddItemScreen() {
  const {products, addProduct, eraseAll} = useProductStore();

  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.front;

  console.log(products);
  if (device == null) {
    return (
      <>
        <Text>Sem Câmera</Text>
        <Button
          onPress={() => addProduct(Math.random(), 'Título do Produto', 10, 1)}>
          Add
        </Button>
        <Button onPress={() => eraseAll()}>Remover Tudo</Button>
      </>
    );
  }

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Camera
        ref={camera}
        style={{width: 200, height: 200}}
        device={device}
        isActive={showCamera}
        photo={true}
      />
    </Layout>
  );
}
