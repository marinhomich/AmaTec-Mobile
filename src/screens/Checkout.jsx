import {Layout, Text} from '@ui-kitten/components';
import {useEffect} from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function CheckoutScreen({navigation}) {
  useEffect(() => setTimeout(() => navigation.navigate('Final'), 3000), []);
  return (
    <Layout style={{flex: 1, alignItems: 'center'}}>
      <Text category="h1" style={{marginVertical: 10}}>
        Pagamento com PIX
      </Text>
      <QRCode value="URL PAGAMENTO PIX Valor" size={300} />
      <Text style={{marginVertical: 10}}>Válido por 10 minutos</Text>
    </Layout>
  );
}
