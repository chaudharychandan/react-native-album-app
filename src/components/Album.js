import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Album = ({ record }) => {
  const btnText = 'Buy Now';
  const {
    thumbnail_image,
    title,
    artist,
    image,
    url
  } = record;

  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          {btnText}
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default Album;
