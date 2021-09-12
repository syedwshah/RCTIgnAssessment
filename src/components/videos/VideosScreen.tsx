import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import {Box, Text} from 'react-native-design-utility';

import {theme} from '../../constants/theme';
import {VideoCard} from './VideoCard';

export const VideosScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const url = 'https://ign-apis.herokuapp.com/videos?startIndex=30&count=5';

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        // eslint-disable-next-line no-shadow
        const {data} = await res.json();

        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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

  return (
    <Box f={1} backgroundColor={theme.color.white}>
      <Box center>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Box
              m="xs"
              radius="sm"
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: theme.color.greyLight,
              }}>
              <VideoCard data={item} />
            </Box>
          )}
          ListHeaderComponent={() => (
            <Box px="sm" py="xs">
              <Text
                uppercase
                size={theme.text.size.xs}
                bold
                color={theme.color.ignRed}>
                5 mins ago
              </Text>
            </Box>
          )}
          ItemSeparatorComponent={() => (
            <Box px="sm" pt="md" pb="xs">
              <Text
                uppercase
                size={theme.text.size.xs}
                bold
                color={theme.color.ignRed}>
                5 mins ago
              </Text>
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};
