import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Text, Box} from 'react-native-design-utility';
import {CardFooter} from '../../commons/CardFooter';
import {theme} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const VideoCard: React.FC<{data: any}> = ({data}) => {
  console.log('videos', data);
  return (
    <Box p="xs">
      <Box radius="xs" py="xs">
        <Image source={{uri: data.thumbnails[1]?.url}} style={s.imageStyle} />
      </Box>

      <Box p="xs">
        <Text size="sm">{data.metadata.title}</Text>
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
