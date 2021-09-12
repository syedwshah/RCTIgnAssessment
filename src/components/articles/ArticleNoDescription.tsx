import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import {Text, Box} from 'react-native-design-utility';
import {CardFooter} from '../../commons/CardFooter';
import {theme} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ArticleNoDescription: React.FC<{data: any}> = ({data}) => {
  return (
    <Box>
      <Box radius="xs">
        <Image source={{uri: data?.thumbnails[1].url}} style={s.imageStyle} />
      </Box>

      <Box pt="xs" px="md">
        <Text weight="900" size="xl">
          {data[1]?.metadata.headline}
        </Text>
      </Box>

      <Box flexDirection="row" center p="sm">
        <Box px="xs">
          {data.authors[0]?.thumbnail ? (
            <Image
              source={{uri: data.authors[0]?.thumbnail}}
              style={s.thumbnail}
            />
          ) : (
            <Box style={s.noThumnail} />
          )}
        </Box>

        <Text fontWeight="500" size="sm">
          By{' '}
        </Text>
        <Text fontWeight="500" size="sm" deco="underline">
          {data.authors[0]?.name ?? 'Unknown author'}
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
    </Box>
  );
};

const s = StyleSheet.create({
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
