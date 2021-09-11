import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {ActivityIndicator, Image, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {CommentCount} from '../../commons/CommentCount';

import {theme} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ArticlesScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const url = 'https://ign-apis.herokuapp.com/articles?startIndex=30&count=5';

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        // eslint-disable-next-line no-shadow
        const {data} = await res.json();
        console.log(data);

        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  if (isLoading) {
    return (
      <Box f={1} center backgroundColor={theme.color.white}>
        <ActivityIndicator />
      </Box>
    );
  } else if (isError) {
    return (
      <Box f={1} center backgroundColor={theme.color.white}>
        <Text color={theme.color.ignRed}>Cannot fetch data</Text>
        <Text color={theme.color.ignRed}>Please try again later</Text>
      </Box>
    );
  }

  // Refactor what changes between data with/without a description
  //There should be two components: one with description and one without

  // image without description has no Padding top

  return (
    <Box f={1} backgroundColor={theme.color.white}>
      <Box
        center
        m="xs"
        radius="sm"
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: theme.color.greyLight,
        }}>
        <Box p="xs">
          <Text weight="900" size="xl">
            {data[3]?.metadata.headline}
          </Text>
          <Box radius="xs" py="xs">
            <Image
              source={{uri: data[2]?.thumbnails[1].url}}
              style={s.imageStyle}
            />
          </Box>

          {/* Add situation where there is no description */}
          <Box p="xs">
            <Text size="sm">{data[2]?.metadata.description}</Text>
          </Box>

          {/* Thumbnail and author */}
          <Box flexDirection="row" justifyContent="start" alignItems="center">
            <Box p="xs">
              {data[2]?.authors[0].thumbnail ? (
                <Image
                  source={{uri: data[2]?.authors[0].thumbnail}}
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
              {data[2]?.authors[0].name ?? 'Unknown author'}
            </Text>
          </Box>

          <Box
            p="xs"
            flexDirection="row"
            alignItems="center"
            justifyContent="between">
            <Box>
              <Text
                uppercase
                size={10}
                fontWeight="900"
                color={theme.color.ignRed}>
                The orange box
              </Text>
              <Box style={s.underline} />
            </Box>
            <Box>
              <Text size="sm" bold>
                {971}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
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
  underline: {
    height: 2,
    width: windowWidth * 0.265,
    backgroundColor: theme.color.ignRed,
  },
});
