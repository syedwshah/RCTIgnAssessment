import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Text, Box} from 'react-native-design-utility';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CardFooter} from '../../commons/CardFooter';
import {theme} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const VideoCard: React.FC<{data: any}> = ({data}) => {
  console.log('videos', data.assets[0]);
  return (
    <Box p="xs">
      <Box radius="xs" py="xs">
        <Image source={{uri: data.thumbnails[1]?.url}} style={s.imageStyle} />
      </Box>

      <Box p="xs">
        <Text size="sm">{data.metadata.title}</Text>
      </Box>

      <CardFooter />

      {/* Absolute positioned icons */}
      <Box f={1} position="absolute" style={s.hexagonPosition}>
        <Box flexDirection="row" center>
          <Icon name="circle" color={theme.color.ignRed} size={75} />
          <Box position="absolute">
            <Box pl="xs">
              <Icon name="play-outline" color={theme.color.white} size={45} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const s = StyleSheet.create({
  hexagonPosition: {
    marginLeft: theme.space.sm,
    marginTop: windowHeight * 0.25,
  },
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
