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
              itemId: index,
              itemName: item.title,
            })
          }
          title={`${item.title}`}
          description={`R$${item.price}`}
          accessoryLeft={() => (
            <Avatar
              shape="square"
              source={{
                uri: 'https://imgnike-a.akamaihd.net/768x768/024108BP.jpg',
              }}
            />
          )}
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
                onPress={() => decreaseQuantity(item.id)}
              />

              <Text>{item.quantity}</Text>
              <Button
                style={{borderRadius: 16, paddingHorizontal: 0}}
                size="tiny"
                accessoryLeft={PlusIcon}
                onPress={() => increaseQuantity(item.id)}
              />
            </View>
          )}
        />
      )}
    />
  );
}

// renderItem={({item}) => <Text style={styles.item}>{item.key}
