import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import Icon from 'react-native-vector-icons/Feather';

import {theme} from '../constants/theme';

export const CardFooter = () => {
  return (
    <Box
      p="xs"
      flexDirection="row"
      alignItems="center"
      justifyContent="between">
      <Box>
        <Text uppercase size={10} fontWeight="900" color={theme.color.ignRed}>
          The orange box
        </Text>
        <Box
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 2,
            backgroundColor: theme.color.ignRed,
          }}
        />
      </Box>

      <Box flexDirection="row" center>
        <Box pr="xs">
          <Icon name="message-square" size={theme.text.size.lg} />
        </Box>
        <Text size="sm" bold>
          {971}
        </Text>
      </Box>
    </Box>
  );
};
