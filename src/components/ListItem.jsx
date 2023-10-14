import {
  Avatar,
  Button,
  Icon,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {useProductStore} from '../lib/zustand';

const PlusIcon = props => <Icon {...props} name="plus-outline" />;
const MinusIcon = props => <Icon {...props} name="minus-outline" />;

export default function ListItemProduct({data, navigation}) {
  const {decreaseQuantity, increaseQuantity} = useProductStore();

  return (
    <List
      data={data}
      renderItem={({item, index}) => (
        <ListItem
          onPress={() =>
            navigation.navigate('Produto', {
              itemId: item.serial,
              itemName: item.name,
            })
          }
          title={`${item.name}`}
          description={`R$${item.price}`}
          accessoryLeft={() => {
            const images = {
              arroz: require('../assets/products/arroz.png'),
              feijão: require('../assets/products/feijão.png'),
              'coca-cola': require('../assets/products/coca-cola.png'),
              nescau: require('../assets/products/nescau.png'),
              café: require('../assets/products/café.png'),
            };
            return (
              <Avatar
                shape="square"
                source={images[item.name]}
                // source={require('../assets/products/coca-cola.png')}
              />
            );
          }}
          accessoryRight={() => (
            <View
              style={{
                flexDirection: 'row',
                gap: 4,
                alignItems: 'center',
              }}>
              <Button
                disabled={item.quantity === 0}
                style={{borderRadius: 16, paddingHorizontal: 0}}
                size="tiny"
                accessoryLeft={MinusIcon}
                onPress={() => decreaseQuantity(item.serial)}
              />

              <Text>{item.quantity}</Text>
              <Button
                style={{borderRadius: 16, paddingHorizontal: 0}}
                size="tiny"
                accessoryLeft={PlusIcon}
                onPress={() => increaseQuantity(item.serial)}
              />
            </View>
          )}
        />
      )}
    />
  );
}

// renderItem={({item}) => <Text style={styles.item}>{item.key}
