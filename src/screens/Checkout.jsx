import {Layout, Text} from '@ui-kitten/components';
import QRCode from 'react-native-qrcode-svg';

export default function CheckoutScreen({navigation}) {
  return (
    <Layout style={{flex: 1, alignItems: 'center'}}>
      <Text category="h1" style={{marginVertical: 10}}>
        Pagamento com PIX
      </Text>
      <QRCode value="Just some string value" size={300} />
      <Text style={{marginVertical: 10}}>Válido por 10 minutos</Text>
    </Layout>
  );
}
