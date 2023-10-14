import {Button, Layout, Text} from '@ui-kitten/components';
import {useBearStore} from '../lib/zustand';

export default function PagamentoScreen({navigation}) {
  const bears = useBearStore(state => state.bears);
  const increasePopulation = useBearStore(state => state.increasePopulation);
  return (
    <Layout style={{flex: 1}}>
      <Text>{bears}</Text>
      <Button
        onPress={increasePopulation}
        style={{marginHorizontal: 16, marginVertical: 6}}
        size="giant">
        Crédito
      </Button>
      <Button
        disabled
        style={{marginHorizontal: 16, marginVertical: 6}}
        size="giant">
        Débito
      </Button>
      <Button
        style={{marginHorizontal: 16, marginVertical: 6}}
        size="giant"
        onPress={() => navigation.navigate('Checkout')}>
        PIX
      </Button>
    </Layout>
  );
}
