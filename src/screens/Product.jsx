import {Layout, StyleService, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';

export default ({navigation}) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://imgnike-a.akamaihd.net/768x768/024108BP.jpg',
        }}
      />
      <Layout style={styles.detailsContainer} level="1">
        <Text category="h6">Tênis Nike Air Max 90 GTX Masculino</Text>
        <Text appearance="hint" category="p2">
          Casual
        </Text>
        <Text category="h4">R$ 819,99</Text>
        <Text style={styles.description} appearance="hint">
          Projetado para manter você se divertindo quando a chuva começa, o Nike
          Air Max 90 GTX oferece uma versão à prova d'água do tênis de corrida
          campeão que ajudou a definir os anos 90. Com certeza é uma edição
          cobiçada, seu design testado e comprovado recebe um cabedal GORE-TEX
          para que você possa dar um mergulho sem se molhar.
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
