import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Text, Box} from 'react-native-design-utility';
import {CardFooter} from '../../commons/CardFooter';
import {theme} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ArticleDescription: React.FC<{data: any}> = ({data}) => {
  console.log('ArticleDescription', data);
  return (
    <Box p="xs">
      <Text weight="900" size="xl">
        {data?.metadata.headline}
      </Text>
      <Box radius="xs" py="xs">
        <Image source={{uri: data?.thumbnails[1].url}} style={s.imageStyle} />
      </Box>

      <Box p="xs">
        <Text size="sm">{data?.metadata.description}</Text>
      </Box>

      <Box flexDirection="row" justifyContent="start" alignItems="center">
        <Box p="xs">
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

      <CardFooter />
    </Box>
  );
};

const s = StyleSheet.create({
  imageStyle: {
    width: windowWidth * 0.915,
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
