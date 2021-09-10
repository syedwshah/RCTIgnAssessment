import React, {useState, useEffect} from 'react';

import {ActivityIndicator, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../../constants/theme';

export const ArticlesScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [url, setUrl] = useState(
    'https://ign-apis.herokuapp.com/articles?count=1',
  );
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  if (isLoading) {
    return (
      <Box f={1} center>
        <ActivityIndicator />
      </Box>
    );
  } else if (isError) {
    return (
      <Box f={1} center>
        <Text color={theme.color.ignRed}>Cannot fetch data</Text>
        <Text color={theme.color.ignRed}>Please try again later</Text>
      </Box>
    );
  }

  return (
    <Box f={1}>
      <Box
        center
        m="xs"
        radius="xs"
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: theme.color.greyLight,
        }}>
        <Box px="xs">
          <Text bold size="xl">
            {data[0]?.metadata.headline}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

// const styles = StyleSheet.create({
//   container:
// });
