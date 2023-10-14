import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CheckoutScreen from '../screens/Checkout';
import PagamentoScreen from '../screens/Pagamento';
import ProductScreen from '../screens/Product';
import ListItemProduct from './ListItem';
import AddItemScreen from '../screens/AddItem';
import {Image} from 'react-native';
import {useProductStore} from '../lib/zustand';

const Stack = createNativeStackNavigator();
const PlusIcon = props => <Icon {...props} name="plus-outline" />;

function HomeScreen({navigation}) {
  const {products} = useProductStore();

  const sum = products.reduce((sum, object) => {
    return sum + object.price * object.quantity;
  }, 0);
  return (
    <Layout style={{flex: 1}}>
      {products.length ? (
        <>
          <ListItemProduct data={products} navigation={navigation} />
          <Layout
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 0.5,
              paddingVertical: 10,
              paddingHorizontal: 16,
            }}>
            <Text>Custo Total: </Text>
            <Text>{`R$${sum}`}</Text>
          </Layout>
          <Button
            onPress={() => navigation.navigate('Pagamento')}
            style={{marginHorizontal: 16, marginVertical: 10}}
            size="medium">
            Finalizar
          </Button>
        </>
      ) : (
        <Layout
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Nenhum Produto adicionado</Text>
        </Layout>
      )}
    </Layout>
  );
}

export const AppNavigator = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={({navigation}) => ({
            headerTitle: props => (
              <Image
                source={require('../assets/logos/logo.png')}
                style={{width: 90, height: 20}}
              />
            ),
            headerRight: props => (
              <Button
                onPress={() => navigation.navigate('AddItem')}
                style={{paddingHorizontal: 0}}
                size="tiny"
                accessoryRight={PlusIcon}>
                Adicionar Produto
              </Button>
            ),
          })}
          component={HomeScreen}
        />
        <Stack.Screen
          name="AddItem"
          options={{title: 'Adicionar Produto'}}
          component={AddItemScreen}
        />

        <Stack.Screen
          options={({route}) => ({
            headerTitle: props => <Text>{route.params.itemName}</Text>,
          })}
          name="Produto"
          component={ProductScreen}
        />
        <Stack.Screen name="Pagamento" component={PagamentoScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
