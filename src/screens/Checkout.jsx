import {Layout, Text} from '@ui-kitten/components';
import QRCode from 'react-native-qrcode-svg';

export default function CheckoutScreen({navigation}) {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>asd</Text>
      <QRCode value="Just some string value" />
    </Layout>
  );
}
