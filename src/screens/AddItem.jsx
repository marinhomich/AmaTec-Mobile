import {Button, Layout} from '@ui-kitten/components';
import {useProductStore} from '../lib/zustand';

export default function AddItemScreen() {
  const {addProduct, eraseAll} = useProductStore();

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => addProduct(Math.random(), 'Título do Produto', 10, 1)}>
        Add
      </Button>
      <Button onPress={() => eraseAll()}>Remover Tudo</Button>
    </Layout>
  );
}
