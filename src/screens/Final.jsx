import {Icon, Layout, Text} from '@ui-kitten/components';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useProductStore} from '../lib/zustand';

export default function FinalScreen({navigation}) {
  const {cleanAll} = useProductStore();
  const resOk = true;
  const CheckIcon = () => <Icon name="checkmark-circle-outline" />;

  useEffect(
    () =>
      setTimeout(() => {
        cleanAll();
        navigation.popToTop();
      }, 3000),
    [],
  );

  return (
    <Layout
      style={[
        styles.modalContainer,
        {backgroundColor: resOk ? 'green' : 'red'},
      ]}>
      <View style={styles.alertBox}>
        <Text category="h1" style={styles.alertText}>
          Pagamento Efetuado com Sucesso!
        </Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  alertText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    color: '#FFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
