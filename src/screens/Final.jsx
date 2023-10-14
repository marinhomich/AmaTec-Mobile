import {Layout, Spinner, Text} from '@ui-kitten/components';
import {useEffect} from 'react';
import {useProductStore} from '../lib/zustand';
import Message from '../components/Message';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export default function FinalScreen({navigation}) {
  const {addProduct, eraseAll} = useProductStore();
  const resOk = true;
  // useEffect(
  //   () =>
  //     setTimeout(() => {
  //       if (resOk) {
  //         navigation.goBack();
  //       } else {
  //         alert('Sucesso');
  //       }
  //       // navigation.navigate('Home');
  //       // eraseAll();
  //     }, 2000),
  //   [],
  // );

  return (
    <Layout
      style={[
        styles.modalContainer,
        {backgroundColor: resOk ? 'green' : 'red'},
      ]}>
      <View style={styles.alertBox}>
        <Text style={styles.alertText}>123</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
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
