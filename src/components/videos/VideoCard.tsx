import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Box} from 'react-native-design-utility';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {CardFooter} from '../../commons/CardFooter';
import {theme} from '../../constants/theme';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const VideoCard: React.FC<{data: any}> = ({data}) => {
  // console.log('video url', data.assets[1].url);
  const navigation = useNavigation();
  const [videoToggle, setVideoToggle] = useState(false);

  return (
    <Box p="xs">
      <Box radius="xs" py="xs">
        <Image source={{uri: data.thumbnails[1]?.url}} style={s.imageStyle} />
        {/* {videoToggle === false ? (
          <Image source={{uri: data.thumbnails[1]?.url}} style={s.imageStyle} />
        ) : (
          <Box>
            <Image
              source={{uri: data.thumbnails[1]?.url}}
              style={s.imageStyle}
            />
            <WebView source={{uri: data.assets[1].url}} />
          </Box>
        )} */}
      </Box>

      <Box p="xs">
        <Text size="sm">{data.metadata.title}</Text>
      </Box>

      <CardFooter />

      {/* Absolute positioned icons */}
      <Box f={1} position="absolute" style={s.hexagonPosition}>
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={() => setVideoToggle(true)}
          onPress={() => {
            navigation.navigate(
              'Modal' as never,
              {uri: data.assets[1].url} as never,
            );
          }}>
          <Box flexDirection="row" center>
            <Icon name="circle" color={theme.color.ignRed} size={75} />
            <Box position="absolute">
              <Box pl="xs">
                <Icon name="play-outline" color={theme.color.white} size={45} />
              </Box>
            </Box>
          </Box>
        </TouchableOpacity>
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
