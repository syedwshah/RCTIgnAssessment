import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import {Text, Box} from 'react-native-design-utility';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CardFooter} from '../../commons/CardFooter';
import {theme} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ArticleNoDescription: React.FC<{data: any}> = ({data}) => {
  const authors = data.authors[0];

  return (
    <Box>
      <Box radius="xs">
        <Image source={{uri: data.thumbnails[1].url}} style={s.imageStyle} />
      </Box>

      <Box pt="md" px="md">
        <Text weight="900" size="xl">
          {data.metadata.headline}
        </Text>
      </Box>

      <Box flexDirection="row" center p="sm">
        <Box px="xs">
          {authors?.thumbnail ? (
            <Image source={{uri: authors.thumbnail}} style={s.thumbnail} />
          ) : (
            <Box style={s.noThumnail} />
          )}
        </Box>

        <Text fontWeight="500" size="sm">
          By{' '}
        </Text>
        <Text fontWeight="500" size="sm" deco="underline">
          {authors?.name ?? 'Unknown author'}
        </Text>
      </Box>

      <Box px="sm">
        <Box
          style={{
            borderBottomColor: theme.color.greyLight,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Box pb="xs">
          <CardFooter />
        </Box>
      </Box>

      {/* Absolute positioned Hexagon */}
      <Box f={1} position="absolute" style={s.hexagonPosition}>
        <Box flexDirection="row" center>
          <Icon name="hexagon" color={theme.color.ignRed} size={75} />
          <Box position="absolute">
            <Box center>
              <Icon
                name="hexagon-outline"
                color={theme.color.white}
                size={30}
              />
              <Box position="absolute" pr={3}>
                <Icon name="format-align-left" color={theme.color.white} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const s = StyleSheet.create({
  hexagonPosition: {
    marginLeft: windowWidth * 0.4,
    marginTop: windowHeight * 0.24,
  },
  imageStyle: {
    width: windowWidth * 0.96,
    height: windowHeight * 0.3,
    borderRadius: theme.radius.xs,
  },
  thumbnail: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  noThumnail: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: theme.color.greyLight,
  },
});
