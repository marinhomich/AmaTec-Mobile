import {Layout, StyleService, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';

export default ({navigation}) => {
  const styles = useStyleSheet(themedStyles);
  // serial: '765489765',
  // name: 'arroz',
  // description: 'arroz 100% integral',
  // quantity: 0,
  // price: 3.99,
  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/products/arroz.png')}
      />
      <Layout style={styles.detailsContainer} level="1">
        <Text category="h6">Arroz</Text>
        <Text appearance="hint" category="p2">
          765489765
        </Text>
        <Text category="h4">R$ 3,99</Text>
        <Text style={styles.description} appearance="hint">
          Arroz 100% integral
        </Text>
      </Layout>
    </ScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  commentList: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 340,
    width: '100%',
  },
  detailsContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  subtitle: {
    marginTop: 4,
  },
  price: {
    position: 'absolute',
    top: 24,
    right: 16,
  },
  description: {
    marginVertical: 16,
  },
  size: {
    marginBottom: 16,
  },
  colorGroup: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  colorRadio: {
    marginHorizontal: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    marginHorizontal: -8,
    marginTop: 24,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  sectionLabel: {
    marginVertical: 8,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: 'text-basic-color',
  },
  commentInput: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
});
