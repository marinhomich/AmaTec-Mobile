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

const PlusIcon = props => <Icon {...props} name="plus-outline" />;
const MinusIcon = props => <Icon {...props} name="minus-outline" />;

export default function ListItemProduct({data, navigation}) {
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
                style={{borderRadius: 16, paddingHorizontal: 0}}
                size="tiny"
                accessoryLeft={MinusIcon}
              />

              <Text>{item.quantity}</Text>
              <Button
                style={{borderRadius: 16, paddingHorizontal: 0}}
                size="tiny"
                accessoryLeft={PlusIcon}
              />
            </View>
          )}
        />
      )}
    />
  );
}

// renderItem={({item}) => <Text style={styles.item}>{item.key}
