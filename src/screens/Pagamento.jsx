import {Button, Layout} from '@ui-kitten/components';

export default function PagamentoScreen({navigation}) {
  return (
    <Layout style={{flex: 1}}>
      <Button
        disabled
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
